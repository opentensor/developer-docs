---
title: "Run a Subnet Miner"
---

# Run a Subnet Miner

Before mining you must [register](./run-a-subnet-miner.md) the [hotkey of your wallet](../getting-started/wallets.md) into a UID slot on one of Bittensor's [subnets](../subnets/working-with-subnets.md), once this UID is yours you can run your own miner or select one of Bittensor's many [pre-built miners](https://github.com/opentensor/text-prompting/tree/main/neurons/miners).

### Running with pre-built

Bittensor's [pre-built miners](https://github.com/opentensor/text-prompting/tree/main/neurons/miners) are installed from [source](https://github.com/opentensor/text-prompting) via the text-prompting repo. For instance,
```bash dark title=text-prompting/neurons/miners/vicuna link=https://github.com/opentensor/text-prompting/tree/main/neurons/miners/vicuna
$ git clone https://github.com/opentensor/text-prompting
$ python3 -m pip install -e text-prompting/
$ tree text-prompting
text-prompting/
├── docs
    ...
├── examples
    ...
├── neurons
│   ├── miners                          # Miner examples
│   │   ├── bittensorLM                 # BTML 3B  param model
│   │   │   ├── miner.py                # Miner subclass
│   │   │   ├── README.md               # Info on how to run.
│   │   │   └── requirements.txt        # pip requirements for miner
│   │   ├── openai                      # Openai model endpoint
│   │   ├── streaming_template          # streaming templeate miner
│   │   ├── template                    # basic vanilla miner template
│   │   └── vicuna                      # vicuna base miner template
...
├── prompting
│   ├── baseminer                       # Base miner classes 
│   └── validators                      # Base validator classes
        ...
│       ├── reward                      # Reward functions and models
    ...
```
Each miner comes with unqiue requirements and instructions in their source directory `text-prompting/neurons/miners/<miner name>`.
```bash dark
# Installing miner requirements
python3 -m pip install -r text-prompting/neurons/miners/bittensorLM/requirements.txt
```
Each miner contains unique setup and hyperparameterization instructions. We recommend reading detailed instructions about each miner through their **--help** commands.
```bash dark
# Reading miner --help.
python3 text-prompting/neurons/miners/bittensorLM/miner.py
    --help
```
Runing the miner.
```bash dark
python3 text-prompting/neurons/miners/bittensorLM/miner.py
    --netuid 1
    --wallet.name <YOUR_WALLET_NAME>
    --wallet.hotkey <YOUR_HOTKEY_NAME>
    --logging.debug
    ... # Other params can be found in miner.py (e.g.)
    --vicuna.max_new_tokens 100 # Generate only 100 tokens for each completion
```

### Running with pm2


It is recommended that you run miners using a process manager such as [PM2](https://pm2.io/).
```bash dark
sudo apt-get install npm
npm install pm2
pm2 start <path to miner.py>
    --name my_miner
    --interpreter python3 # make sure this has the correct binary, especially if you are running in a venv
    -- ... your args i.e. --wallet.name ...
```
