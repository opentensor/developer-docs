import os
from typing import List
import numpy as np


class ExperimentSetup:
    def __init__(
        self,
        processes: int = 1,  # processes to run with
        tempo: int = 360,  # the tempo on chain (blocks), how often are the chain calculating consensus.
        start_block: int = 3223749,  # (22 June) the block to refer to to start the experiment
        conceal_period: List = None,  # the range of conceal period for experiment
        alpha_lows: List = None,  # the range of alpha lows for experiment
        alpha_highs: List = None,  # the range of alpha highs for experiment
        data_points: int = 30,  # number of datapoints to collect for experiment
        netuids: List = None,
        metagraph_storage_path="./metagraph_diagnostic",
        result_path="./results",
        liquid_alpha=False,
        consensus_precision=0.0001,
    ):
        self.processes = processes
        self.tempo = tempo
        self.start_block = start_block
        self.data_points = data_points
        self.metagraph_storage_path = metagraph_storage_path
        self.result_path = result_path
        self.liquid_alpha = liquid_alpha
        self.consensus_precision = consensus_precision

        if conceal_period == None:
            self.conceal_periods = [0] + list(range(1, 16, 2))
        else:
            self.conceal_periods = conceal_period

        if netuids == None:
            self.netuids = range(1, 38)
        else:
            self.netuids = netuids

        self.alpha_highs = (
            alpha_highs
            if alpha_highs
            else [round(a, 2) for a in np.arange(0.1, 0.95, 0.2)]
        )

        self.alpha_lows = (
            alpha_lows
            if alpha_lows
            else [round(a, 2) for a in np.arange(0.1, 0.95, 0.2)]
        )

        self.create_directory()

    def create_directory(self):
        if not os.path.isdir(self.metagraph_storage_path):
            os.makedirs(self.metagraph_storage_path)

        if not os.path.isdir(self.result_path):
            os.makedirs(self.result_path)
