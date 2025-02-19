import os
from typing import List
import numpy as np

class ExperimentSetup:
    def __init__(
        self,
        processes: int = 1,  # processes to run with
        tempo: int = 360,  # the tempo on chain (blocks), how often are the chain calculating consensus.
        start_block: int = 3223749,  # (22 June) the block to refer to to start the experiment
        cr_intervals: List = None,  # the range of conceal period for experiment
        alpha_lows: List = [],  # the range of alpha lows for experiment
        alpha_highs: List = [],  # the range of alpha highs for experiment
        data_points: int = 30,  # number of datapoints to collect for experiment
        netuids: List = None,
        metagraph_storage_path="./metagraph_diagnostic",
        result_path="./results",
        liquid_alpha=False,
        consensus_precision=0.0001,
        chain_endpoint = "wss://archive.chain.opentensor.ai:443",
        log = False,
    ):
        self.processes = processes
        self.tempo = tempo
        self.start_block = start_block
        self.data_points = data_points
        self.metagraph_storage_path = metagraph_storage_path
        self.result_path = result_path
        self.liquid_alpha = liquid_alpha
        self.consensus_precision = consensus_precision
        self.chain_endpoint = chain_endpoint
        self.log = log

        if cr_intervals == None:
            self.cr_intervals = [0] + list(range(1, 30, 2))
        else:
            self.cr_intervals = cr_intervals

        if netuids == None:
            self.netuids = range(1, 38)
        else:
            self.netuids = netuids

        if liquid_alpha:
            self.alpha_highs = (
                alpha_highs
                if len(alpha_highs) > 0
                else [round(a, 2) for a in np.arange(0.1, 0.95, 0.2)]
            )

            self.alpha_lows = (
                alpha_lows
                if len(alpha_lows) > 0
                else [round(a, 2) for a in np.arange(0.1, 0.95, 0.2)]
            )

        self.create_directory()

    def __str__(self):
        return f"""
processes\t{self.processes}
tempo\t{self.tempo}
start_block\t{self.start_block}
data_points\t{self.data_points}
metagraph_storage_path\t{self.metagraph_storage_path}
result_paht\t{self.result_path}
liquid_alpha\t{self.liquid_alpha} 
consensus_precision\t{self.consensus_precision}
chain_endpoint\t{self.chain_endpoint}
cr_intervals\t{self.cr_intervals}
netuids\t{self.netuids}
"""
    def create_directory(self):
        if not os.path.isdir(self.metagraph_storage_path):
            os.makedirs(self.metagraph_storage_path)

        if not os.path.isdir(self.result_path):
            os.makedirs(self.result_path)
