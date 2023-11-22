---
title: "Install Bittensor"
---

# Install Bittensor

Before you can start developing, install Bittensor and then create Bittensor wallet.

:::tip On macOS
The following installation instructions are for macOS. For Apple M1, see the below [Installing on Apple M1](#installing-on-apple-m1) section. 
:::

## Install

You can install Bittensor on your local machine in either of the following ways. **Make sure you verify your installation after you install**:
- Using a Bash command.
- Using `pip3 install`.
- From source.

### Using a Bash command

This is the most straightforward method. It is recommended for a beginner as it will pre-install requirements like Python, if they are not already present on your machine. Copy and paste the following `bash` command into your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/master/scripts/install.sh)"
```

### Using `pip3 install`

```bash
pip3 install bittensor
```

### From source

1. Clone the Bittensor repo.

    ```bash
    git clone https://github.com/opentensor/bittensor.git
    ```
2. Install with `python3`

    ```bash
    python3 -m pip install -e bittensor/
    ```

## Verify the installation

You can verify your installation in either of the two ways as shown below:

### Verify using the `btcli` command

```bash
btcli --help
```
which will give you the below output:

```text
usage: btcli <command> <command args>

bittensor cli v6.1.0

positional arguments:
  {subnets,s,subnet,root,r,roots,wallet,w,wallets,stake,st,stakes,sudo,su,sudos,legacy,l}
    subnets (s, subnet)
                        Commands for managing and viewing subnetworks.
    root (r, roots)     Commands for managing and viewing the root network.
    wallet (w, wallets)
                        Commands for managing and viewing wallets.
    stake (st, stakes)  Commands for staking and removing stake from hotkey accounts.
    sudo (su, sudos)    Commands for subnet management
    legacy (l)          Miscellaneous commands.

options:
  -h, --help            show this help message and exit
  --config CONFIG       If set, defaults are overridden by passed file.
  --strict              If flagged, config will check that only exact arguments have been set.
  --no_version_checking
                        Set true to stop cli version checking.
  --no_prompt           Set true to stop cli from prompting the user.
```

using the [Bittensor Command Line Interface](reference/btcli) with **btcli --help*** and/or check the installation in python.
```python numbered
import bittensor as bt
print( bt.__version__ )
```

### Verify using Python interpreter

1. Launch the Python interpreter on your terminal.   

    ```bash
    python3
    ```
2. Enter the following two lines in the Python interpreter.
   
   ```python
    import bittensor as bt
    print( bt.__version__ )
    ```
    The Python interpreter output will look like below:

    ```python
    Python 3.11.6 (main, Oct  2 2023, 13:45:54) [Clang 15.0.0 (clang-1500.0.40.1)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> import bittensor as bt
    >>> print( bt.__version__ )
    6.1.0
    ```

### Verify by listing axon information

You can also verify the Bittensor installation by listing the axon information for the neurons. Enter the following lines in the Python interpreter.

```python
>>> import bittensor as bt
>>> metagraph = bt.metagraph(1)
>>> metagraph.axons[:10]
```
The Python interpreter output will look like below.

:::note Multi-line display
For multi-line display click the `Toggle word wrap` button on the top right of the below code window.
:::

```bash
[AxonInfo( /ipv4/3.139.80.241:11055, 5GqDsK6SAPyQtG243hbaKTsoeumjQQLhUu8GyrXikPTmxjn7, 5D7u5BTqF3j1XHnizp9oR67GFRr8fBEFhbdnuVQEx91vpfB5, 600 ), AxonInfo( /ipv4/8.222.132.190:5108, 5CwqDkDt1uk2Bngvf8avrapUshGmiUvYZjYa7bfA9Gv9kn1i, 5HQ9eTDorvovKTxBc9RUD22FZHZzpy1KRfaxCnRsT9QhuvR6, 600 ), AxonInfo( /ipv4/34.90.71.181:8091, 5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2, 5ChuGqW2cxc5AZJ29z6vyTkTncg75L9ovfp8QN8eB8niSD75, 601 ), AxonInfo( /ipv4/64.247.206.79:8091, 5HK5tp6t2S59DywmHRWPBVJeJ86T61KjurYqeooqj8sREpeN, 5E7W9QXNoW7se7B11vWRMKRCSWkkAu9EYotG5Ci2f9cqV8jn, 601 ), AxonInfo( /ipv4/51.91.30.166:40203, 5EXYcaCdnvnMZbozeknFWbj6aKXojfBi9jUpJYHea68j4q1a, 5CsxoeDvWsQFZJnDCyzxaNKgA8pBJGUJyE1DThH8xU25qUMg, 601 ), AxonInfo( /ipv4/149.137.225.62:8091, 5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3, 5Ccmf1dJKzGtXX7h17eN72MVMRsFwvYjPVmkXPUaapczECf6, 600 ), AxonInfo( /ipv4/38.147.83.11:8091, 5Hddm3iBFD2GLT5ik7LZnT3XJUnRnN8PoeCFgGQgawUVKNm8, 5DCQw11aUW7bozAKkB8tB5bHqAjiu4F6mVLZBdgJnk8dzUoV, 610 ), AxonInfo( /ipv4/38.147.83.30:41422, 5HNQURvmjjYhTSksi8Wfsw676b4owGwfLR2BFAQzG7H3HhYf, 5EZUTdAbXyLmrs3oiPvfCM19nG6oRs4X7zpgxG5oL1iK4MAh, 610 ), AxonInfo( /ipv4/54.227.25.215:10022, 5DxrZuW8kmkZPKGKp1RBVovaP5zHtPLDHYc5Yu82Z1fWqK5u, 5FhXUSmSZ2ec7ozRSA8Bg3ywmGwrjoLLzsXjNcwmZme2GcSC, 601 ), AxonInfo( /ipv4/52.8.243.76:40033, 5EnZN591jjsKKbt3yBtfGKWHxhxRH9cJonqTKRT5yTRUyNon, 5ChzhHyGmWwEdHjuvAxoUifHEZ6xpUjR67fDd4a42UrPysyB, 601 )]
>>>
```

## Installing on Apple M1

To use Bittensor on Apple M1, either via CLI (`btcli`) or within your Python code, follow the below steps:

1. Install `conda` on macOS. Follow [this guide on conda.io](https://conda.io/projects/conda/en/latest/user-guide/install/macos.html).
2. Download the `apple_m1_environment.yml` configuration file from Bittensor. 
   - [Click to visit the file](https://github.com/opentensor/bittensor/blob/master/scripts/environments/apple_m1_environment.yml).
   - Click on the `Raw` button at the top right and save the raw file on your local machine.
  
3. Create the `conda` environment using the `apple_m1_environment.yml` file you just downloaded:
    ```bash
    conda env create -f apple_m1_environment.yml
    ```

4. Activate the new environment: 
   ```bash
   conda activate bittensor
   ```

5. Verify that the new environment was installed correctly:
   
   ```bash
   conda env list
   ```
6. Now are you ready to use Bittensor on your Apple M1.