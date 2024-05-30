import os
from typing import List

class ExperimentSetup:
    def __init__(self,
        processes: int = 1, # processes to run with 
        tempo: int = 360, # the tempo on chain (blocks), how often are the chain calculating consensus.
        start_block: int = 2987500, # the block to refer to to start the experiment
        conceal_period: List = None, # the range of conceal period for experiment
        data_points: int = 20, # number of datapoints to collect for experiment
        netuids: List = None,
        metagraph_storage_path = "./metagraph_diagnostic",
        result_path = "./results",
    ):
        self.processes = processes
        self.tempo = tempo  
        self.start_block = start_block  
        self.data_points = data_points  
        self.metagraph_storage_path = metagraph_storage_path
        self.result_path = result_path

        if conceal_period == None:
            self.conceal_periods = [0] + list(range(1, 20, 2))  
        else:
            self.conceal_period = conceal_period

        if netuids == None:
            self.netuids = range(1, 33)
        else:
            self.netuids = netuids

        self.create_directory()

    def create_directory(self):
        if not os.path.isdir(self.metagraph_storage_path):
            os.mkdir(self.metagraph_storage_path)

        if not os.path.isdir(self.result_path):
            os.mkdir(self.result_path)