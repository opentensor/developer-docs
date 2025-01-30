import bittensor as bt
from utils import *
import torch
import time
from multiprocessing.pool import ThreadPool
from multiprocessing import Manager
from concurrent.futures import ProcessPoolExecutor
from experiment_setup import ExperimentSetup
import os
import pickle
import argparse
from tqdm import tqdm
import traceback

class WeightCopySimulation:
    def __init__(self, setup=None):
        if setup != None:
            self.setup = setup
        else:
            self.get_parse()
            self.setup = ExperimentSetup(
                netuids=range(self.args.start_netuid, self.args.end_netuid),
                liquid_alpha=True,
            )
        self.metas = {}

    def get_parse(self):
        parser = argparse.ArgumentParser(description="Process some integers.")
        parser.add_argument("--start_netuid", type=int, default=1)
        parser.add_argument("--end_netuid", type=int, default=38)
        self.args = parser.parse_args()

    def get_metagraphs(self, netuids = None):
        if self.setup.log: print(f"Getting metagraph {netuids}")
        def load_metagraph(file_name, netuid, block):
            try:
                meta = torch.load(file_name)
                return meta
            except:
                return None

        metas = {}

        # === Collect metagraphs that has to be loaded ===
        args = []
        for netuid in (self.setup.netuids if netuids == None else netuids):
            metas[netuid] = {}
            for data_point in range(self.setup.data_points):
                block = self.setup.start_block + self.setup.tempo * data_point
                file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                args.append((file_name, netuid, block))

                for cr_interval in self.setup.cr_intervals:
                    block = self.setup.start_block + self.setup.tempo * (
                        data_point + cr_interval
                    )
                    file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                    args.append((file_name, netuid, block))

        # === Load metagraphs with multiprocessing ===
        with ThreadPool() as pool:
            results = pool.starmap(load_metagraph, args)

        # === Sort out the metagraphs into a dict ===
        for meta, (file_name, netuid, block) in zip(results, args):
            if netuid not in metas:
                metas[netuid] = {}
            metas[netuid][block] = meta

        return metas

    def get_base_simulate(self, netuid, global_metas, alpha_low, alpha_high, end_block, fetch = False):
        file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_base_block{end_block}.pkl"
        
        if not os.path.isfile(file_name): 
            if fetch:
                self.base_simulate(netuid, global_metas, alpha_low, alpha_high)
            else:
                time.sleep(30)

            return self.get_base_simulate(netuid, global_metas, alpha_low, alpha_high, end_block, fetch)

        else:            
            with open(file_name, "rb") as handle:
                yuma_results = pickle.load(handle)

            return yuma_results

    def base_simulate(self, netuid, global_metas, alpha_low=0.9, alpha_high=0.9):
       
        metas = global_metas[netuid]

        end_block = self.setup.start_block + self.setup.tempo * (self.setup.data_points - 1)
        file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_base_block{end_block}.pkl"

        if os.path.isfile(file_name):
            return

        for block, meta in metas.items():
            if meta == None:
                return

        def _base_simulate(self, file_name, netuid, metas):
            if netuid == 1: 
                num_miners = 1024
            else:
                num_miners = 256
            
            # === Simulate the early blocks ===
            yuma_results = {}
            meta_0 = list(metas.values())[0]
            validators = torch.zeros(num_miners, dtype = torch.int); validators[:len(meta_0.validator_trust)] = torch.tensor(meta_0.validator_trust > 0)
            validators = validators.bool()

            # === Setup for the scope of simulation ===
            early_blocks = [
                self.setup.start_block + self.setup.tempo * data_point
                for data_point in range(self.setup.data_points)
            ]

            start_time = time.time()
            for i, block in (enumerate(early_blocks) if netuid != self.setup.netuids[0] else tqdm (enumerate(early_blocks), desc=f"netuid{netuid} Simulating early blocks...")) :
                meta = metas[block]
                if len(meta.W) == 0:
                    old_yuma_result = list(yuma_results.values())[-1]
                    W_bad = old_yuma_result['weight']
                    S_bad = old_yuma_result['stake']

                else:  
                    S = torch.zeros(num_miners); S[:len(meta.S)] = torch.tensor(meta.S)
                    W = torch.zeros(num_miners, num_miners)
                    W[:meta.W.shape[0], :meta.W.shape[1]] = torch.tensor(meta.W)
                    S_bad = torch.cat((S[validators], S[validators].median().view(1)))

                    W_bad = torch.cat(
                        (
                            W[validators],
                            (torch.ones(W.shape[1]) / W.shape[1]).view(1, -1),
                        )
                    )

                if i == 0:
                    B_old = None
                else:
                    B_old = yuma_results[block - self.setup.tempo]["validator_ema_bond"]
                
                yuma_result = Yuma2(
                    W_bad,
                    S_bad,
                    B_old=B_old,
                    liquid_alpha=self.setup.liquid_alpha,
                    alpha_low=alpha_low,
                    alpha_high=alpha_high,
                    precision = self.setup.consensus_precision
                )
                yuma_results[block] = yuma_result

                start_time = time.time()

            # === Save the stat ===
            with open(
                file_name,
                "wb",
            ) as f:
                pickle.dump(yuma_results, f)

            return yuma_results



        try:
            if self.setup.log: print('start', file_name)
            _base_simulate(
                self,
                file_name,
                netuid,
                metas,
            )
        except Exception as E:
            if self.setup.log: print('failed', file_name, traceback.print_exc())

        return

    def simulate(self, netuid, global_metas, cr_interval, alpha_low=0.9, alpha_high=0.9):
        if len(global_metas) > 5:
            time.sleep(30)
            self.simulate(netuid, global_metas, cr_interval, alpha_low=0.9, alpha_high=0.9)

        if self.setup.liquid_alpha:
            yuma_file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_conceal{cr_interval}_al{alpha_low:.1f}_ah{alpha_high:.1f}.pkl"
        else:
            yuma_file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_conceal{cr_interval}.pkl"

        if netuid not in global_metas and not self.check_complete_netuid(netuid) and cr_interval == self.setup.cr_intervals[0]:
            global_metas[netuid] = self.get_metagraphs([netuid])[netuid]
                
        if os.path.isfile(yuma_file_name):
            return
        
        if netuid not in global_metas:
            if self.setup.log: print(f'waiting for metagraph netuid {netuid}, cr_interval {cr_interval}, {global_metas.keys()}')
            time.sleep(30)
            self.simulate(netuid, global_metas, cr_interval, alpha_low=0.9, alpha_high=0.9)
        
        metas = global_metas[netuid]

        for block, meta in metas.items():
            if meta == None:
                return
        
        def _simulate(
            self,
            yuma_file_name,
            netuid,
            cr_interval,
            metas,
            alpha_low=0.9,
            alpha_high=0.9,
        ):
            if netuid == 1:
                num_miners = 1024
            else:
                num_miners = 256
            
            yuma_results = {}
            meta_0 = list(metas.values())[0]
            validators = torch.zeros(num_miners, dtype = torch.int); validators[:len(meta_0.validator_trust)] = torch.tensor(meta_0.validator_trust > 0)
            validators = validators.bool()

            # === Setup for the scope of simulation ===
            early_blocks = [
                self.setup.start_block + self.setup.tempo * data_point
                for data_point in range(self.setup.data_points)
            ]

            late_blocks = [
                self.setup.start_block
                + self.setup.tempo * (data_point + cr_interval)
                for data_point in range(self.setup.data_points)
            ]

            yuma_results = self.get_base_simulate(netuid, global_metas, alpha_low, alpha_high, end_block = early_blocks[-1], fetch = (cr_interval == self.setup.cr_intervals[0]))

            # === Simulate for the late blocks ===
            start_time = time.time()
            for i, (early_block, late_block) in (enumerate(zip(early_blocks, late_blocks)) if cr_interval != self.setup.cr_intervals[0] else tqdm (enumerate(zip(early_blocks, late_blocks)), desc=f"netuid{netuid} Simulating cr {cr_interval}...")) :
                meta = metas[late_block]

                if len(meta.W) == 0:
                    old_yuma_result = list(yuma_results.values())[-1]
                    W_bad = old_yuma_result['weight']
                    S_bad = old_yuma_result['stake']
                
                else:
                    S = torch.zeros(num_miners)
                    S[:len(meta.S)] = torch.tensor(meta.S)
                    W = torch.zeros(num_miners, num_miners)
                    W[:meta.W.shape[0], :meta.W.shape[1]] = torch.tensor(meta.W)

                    S_bad = torch.cat((S[validators], S[validators].median().view(1)))
                    W_bad = torch.cat(
                        (
                            W[validators],
                            yuma_results[early_block]["server_consensus_weight"].view(
                                1, -1
                            ),
                        )
                    )

                if i == 0:
                    B_old = None
                else:
                    B_old = (
                        yuma_results[late_block - self.setup.tempo][
                            "validator_ema_bond"
                        ]
                        .detach()
                        .clone()
                    )

                yuma_result = Yuma2(
                    W_bad,
                    S_bad,
                    B_old=B_old,
                    liquid_alpha=self.setup.liquid_alpha,
                    alpha_low=alpha_low,
                    alpha_high=alpha_high,
                    precision = self.setup.consensus_precision
                )
                yuma_results[late_block] = yuma_result

                start_time = time.time()

            # === Save the stat ===
            with open(
                yuma_file_name,
                "wb",
            ) as f:
                pickle.dump(yuma_results, f)

        try:
            if self.setup.log: print('start', yuma_file_name)
            _simulate(
                self,
                yuma_file_name,
                netuid,
                cr_interval,
                metas,
                alpha_low,
                alpha_high,
            )
            if self.check_complete_netuid(netuid) and netuid in global_metas:
                del global_metas[netuid]
                print(f'completed {netuid}', global_metas.keys())

        except Exception as E:
            if self.setup.log: print('failed', yuma_file_name, traceback.print_exc())

        return

    def check_complete_netuid(self, netuid):
        if self.setup.liquid_alpha:
            for cr_interval in self.setup.cr_intervals:
                for alpha_low in self.setup.alpha_lows:
                    for alpha_high in self.setup.alpha_highs:
                        if alpha_low > alpha_high:
                            continue
                        yuma_file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_conceal{cr_interval}_al{alpha_low:.1f}_ah{alpha_high:.1f}.pkl"
                        if not os.path.isfile(yuma_file_name):
                            return False
        
        else:
            for cr_interval in self.setup.cr_intervals:
                yuma_file_name = f"{self.setup.result_path}/yuma_result_netuid{netuid}_conceal{cr_interval}.pkl"
                if not os.path.isfile(yuma_file_name):
                    return False

        return True
            
    def run_simulation(self):
        # # === All simulations for all use case ===
            tasks = []
            metas = Manager().dict()
            if self.setup.liquid_alpha:
                for netuid in self.setup.netuids:
                    for cr_interval in self.setup.cr_intervals:
                        for alpha_low in self.setup.alpha_lows:
                            for alpha_high in self.setup.alpha_highs:
                                if alpha_low > alpha_high:
                                    continue
                                tasks.append([netuid, metas, cr_interval, alpha_low, alpha_high])
            
            else:
                for netuid in self.setup.netuids:
                    for cr_interval in self.setup.cr_intervals:
                        tasks.append([netuid, metas, cr_interval])

            with ProcessPoolExecutor(max_workers=self.setup.processes) as exe:
                try:    
                    for task in tasks:
                        exe.submit(self.simulate, *task)
                except KeyboardInterrupt:
                    exe.shutdown(wait=False, cancel_futures=True)


if __name__ == "__main__":
    sim = WeightCopySimulation()
    sim.run_simulation()
