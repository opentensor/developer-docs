---
title: "Install Bittensor SDK"
---

# Install Bittensor SDK

Before you can start developing, you must install Bittensor SDK and then create Bittensor wallet.

## Upgrade

If you already installed Bittensor SDK, make sure you upgrade to the latest version. Run the below command:

```bash
python3 -m pip install --upgrade bittensor
```

## Install on macOS and Linux

You can install Bittensor on your local machine in either of the following ways. **Make sure you verify your installation after you install**:
- [Install using a Bash command](#install-using-a-bash-command).
- [Install using `pip3 install`](#install-using-pip3-install)
- [Install from source](#install-from-source)

### Install using a Bash command

This is the most straightforward method. It is recommended for a beginner as it will pre-install requirements like Python, if they are not already present on your machine. Copy and paste the following `bash` command into your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/master/scripts/install.sh)"
```

:::warning For Ubuntu-Linux users
If you are using Ubuntu-Linux, the script will prompt for `sudo` access to install all required apt-get packages.
:::
:::tip Create and activate a virtual environment

    - Create Python virtual environment. Follow [this guide on python.org](https://docs.python.org/3/library/venv.html#creating-virtual-environments).

    - Activate the new environment. Follow [this guide on python.org](https://docs.python.org/3/library/venv.html#how-venvs-work)
:::

### Install using `pip3 install`

```bash
python3 -m venv btsdk_venv
source btsdk_venv/bin/activate
pip install bittensor
```

### Install from source

1. Clone the Bittensor repo

```bash
git clone https://github.com/opentensor/bittensor.git
```
2. Change to the Bittensor directory:

```bash
cd bittensor
```

3. Installation

You can install Bittensor using any of the below options:

- **Install only SDK**: Run the below command to install Bittensor SDK in the above virtual environment.
```python
pip install bittensor
```
- **Install SDK with btcli**: Install Bittensor SDK with `btcli`. The `btcli` will be installed as an independent tool and its Python package is `bittensor-cli`.
```python
pip install bittensor[btcli]
```
- **Install SDK with torch**: Install Bittensor SDK with [torch.](https://pytorch.org/docs/stable/torch.html)
```python
pip install bittensor[torch]
```
- **Install SDK with cubit**: Install Bittensor SDK with [cubit.](https://github.com/opentensor/cubit)

    - Install `cubit` first. See the [Install](https://github.com/opentensor/cubit?tab=readme-ov-file#install) section. **Only Python 3.9 and 3.10 versions are supported.**
    - Then install SDK with `pip install bittensor`.

## Install on Windows

To install and run Bittensor SDK on Windows you must install [**WSL 2** (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/about) on Windows and select [Ubuntu Linux distribution](https://github.com/ubuntu/WSL/blob/main/docs/guides/install-ubuntu-wsl2.md). 

After you installed the above, follow the same installation steps described above in [Install on macOS and Linux](#install-on-macos-and-linux).

:::danger Limited support on Windows
While wallet transactions like delegating, transfer, registering, staking can be performed on a Windows machine using WSL 2, the mining and validating operations are not recommended and are not supported on Windows machines.
 :::


## Verify the installation

You can verify your installation in either of the two ways as shown below:

### Verify using `btsdk` version

```python
python3 -m bittensor
```

```bash
Bittensor SDK version: <version number>
```

The above command will show you the `<version number>` of the `btsdk` you just installed.


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
    >>> print( bt.__version__ )
    <version number>
    ```
You will see the version number you installed in place of `<version number>`. 
### Verify by listing axon information

You can also verify the Bittensor installation by listing the axon information for the neurons. Enter the following lines in the Python interpreter.

```python
import bittensor as bt
metagraph = bt.metagraph(1)
metagraph.axons[:10]
```
The Python interpreter output will look like below.

```bash
[AxonInfo( /ipv4/3.139.80.241:11055, 5GqDsK6SAPyQtG243hbaKTsoeumjQQLhUu8GyrXikPTmxjn7, 5D7u5BTqF3j1XHnizp9oR67GFRr8fBEFhbdnuVQEx91vpfB5, 600 ), AxonInfo( /ipv4/8.222.132.190:5108, 5CwqDkDt1uk2Bngvf8avrapUshGmiUvYZjYa7bfA9Gv9kn1i, 5HQ9eTDorvovKTxBc9RUD22FZHZzpy1KRfaxCnRsT9QhuvR6, 600 ), AxonInfo( /ipv4/34.90.71.181:8091, 5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2, 5ChuGqW2cxc5AZJ29z6vyTkTncg75L9ovfp8QN8eB8niSD75, 601 ), AxonInfo( /ipv4/64.247.206.79:8091, 5HK5tp6t2S59DywmHRWPBVJeJ86T61KjurYqeooqj8sREpeN, 5E7W9QXNoW7se7B11vWRMKRCSWkkAu9EYotG5Ci2f9cqV8jn, 601 ), AxonInfo( /ipv4/51.91.30.166:40203, 5EXYcaCdnvnMZbozeknFWbj6aKXojfBi9jUpJYHea68j4q1a, 5CsxoeDvWsQFZJnDCyzxaNKgA8pBJGUJyE1DThH8xU25qUMg, 601 ), AxonInfo( /ipv4/149.137.225.62:8091, 5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3, 5Ccmf1dJKzGtXX7h17eN72MVMRsFwvYjPVmkXPUaapczECf6, 600 ), AxonInfo( /ipv4/38.147.83.11:8091, 5Hddm3iBFD2GLT5ik7LZnT3XJUnRnN8PoeCFgGQgawUVKNm8, 5DCQw11aUW7bozAKkB8tB5bHqAjiu4F6mVLZBdgJnk8dzUoV, 610 ), AxonInfo( /ipv4/38.147.83.30:41422, 5HNQURvmjjYhTSksi8Wfsw676b4owGwfLR2BFAQzG7H3HhYf, 5EZUTdAbXyLmrs3oiPvfCM19nG6oRs4X7zpgxG5oL1iK4MAh, 610 ), AxonInfo( /ipv4/54.227.25.215:10022, 5DxrZuW8kmkZPKGKp1RBVovaP5zHtPLDHYc5Yu82Z1fWqK5u, 5FhXUSmSZ2ec7ozRSA8Bg3ywmGwrjoLLzsXjNcwmZme2GcSC, 601 ), AxonInfo( /ipv4/52.8.243.76:40033, 5EnZN591jjsKKbt3yBtfGKWHxhxRH9cJonqTKRT5yTRUyNon, 5ChzhHyGmWwEdHjuvAxoUifHEZ6xpUjR67fDd4a42UrPysyB, 601 )]
>>>
```

