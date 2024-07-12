import torch
import bittensor as bt
import os.path
from multiprocessing import Pool
from experiment_setup import ExperimentSetup

def download_metagraph(netuid, block, file_name):
    if os.path.isfile(file_name):
        return
    else:
        print(netuid, block, file_name, " | downloading...")
    archive_subtensor = bt.subtensor("archive")
    meta = archive_subtensor.metagraph(netuid=netuid, block=block, lite=False)
    torch.save(meta, file_name)
    return

class DownloadMetagraph:
    def __init__(self, setup = None):
        if setup != None:
            self.setup = setup
        else:
            self.setup = ExperimentSetup()

    def run(self):
        if not os.path.isdir(self.setup.metagraph_storage_path):
            os.mkdir(self.setup.metagraph_storage_path)

        args = []
        for netuid in self.setup.netuids:
            for conceal_period in self.setup.conceal_periods:
                for data_point in range(self.setup.data_points):
                    block = self.setup.start_block + self.setup.tempo * data_point
                    file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                    args.append((netuid, block, file_name))

                    block = self.setup.start_block + self.setup.tempo * (
                        data_point + conceal_period
                    )
                    file_name = f"{self.setup.metagraph_storage_path}/netuid{netuid}_block{block}.pt"
                    args.append((netuid, block, file_name))

        args = set(args)
        with Pool(processes=self.setup.processes) as pool:
            pool.starmap(download_metagraph, args)


if __name__ == "__main__":
    DownloadMetagraph().run()
