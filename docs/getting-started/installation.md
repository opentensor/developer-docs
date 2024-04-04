---
title: "Install Bittensor"
---

# Install Bittensor

Before you can start developing, you must install Bittensor and then create Bittensor wallet.

## Upgrade

If you already installed Bittensor, make sure you upgrade to the latest version. Run the below command:

```bash
python3 -m pip install --upgrade bittensor
```

or
```bash
python -m pip install --upgrade bittensor
```

## Install on macOS and Linux

:::tip For macOS on Apple silicon
For Apple Silicon see the below [Installing on Apple Silicon](#installing-on-apple-silicon) section. 
:::

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

### Installing on Apple Silicon

To install Bittensor on Apple M1 or M2, we recommend you first activate a Python virtual environment. Follow the below steps:

#### Activate a virtual environment

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

5. Install `shtab`:
   ```bash
   conda install -c anaconda shtab
   ```
   
6. Verify that the new environment was installed correctly:
   
   ```bash
   conda env list
   ```
7. Next, install Bittensor as shown below.

#### Install Bittensor

Run the below command to install Bittensor in the above virtual environment.

```python
pip3 install bittensor --no-deps
```

## Install on Windows

To install and run Bittensor on Windows you must install [**WSL 2** (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/about) on Windows and select [Ubuntu Linux distribution](https://github.com/ubuntu/WSL/blob/main/docs/guides/install-ubuntu-wsl2.md). 

After you installed the above, follow the same installation steps described above in [Install on macOS and Linux](#install-on-macos-and-linux).

:::danger Limited support on Windows
While wallet transactions like delegating, transfer, registering, staking can be performed on a Windows machine using WSL 2, the mining and validating operations are not recommended and are not supported on Windows machines.
 :::


## Verify the installation

You can verify your installation in either of the two ways as shown below:

### Verify using the `btcli` command

Using the [Bittensor Command Line Interface](/btcli.md).

```bash
btcli --help
```
which will give you the below output:

```text
usage: btcli <command> <command args>

bittensor cli <version number>

positional arguments:
...
```
You will see the version number you installed in place of `<version number>`. 

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
    <version number>
    ```
You will see the version number you installed in place of `<version number>`. 
### Verify by listing axon information

You can also verify the Bittensor installation by listing the axon information for the neurons. Enter the following lines in the Python interpreter.

```python
>>> import bittensor as bt
>>> metagraph = bt.metagraph(1)
>>> metagraph.axons[:10]
```
The Python interpreter output will look like below.

```bash
[AxonInfo( /ipv4/3.139.80.241:11055, 5GqDsK6SAPyQtG243hbaKTsoeumjQQLhUu8GyrXikPTmxjn7, 5D7u5BTqF3j1XHnizp9oR67GFRr8fBEFhbdnuVQEx91vpfB5, 600 ), AxonInfo( /ipv4/8.222.132.190:5108, 5CwqDkDt1uk2Bngvf8avrapUshGmiUvYZjYa7bfA9Gv9kn1i, 5HQ9eTDorvovKTxBc9RUD22FZHZzpy1KRfaxCnRsT9QhuvR6, 600 ), AxonInfo( /ipv4/34.90.71.181:8091, 5HEo565WAy4Dbq3Sv271SAi7syBSofyfhhwRNjFNSM2gP9M2, 5ChuGqW2cxc5AZJ29z6vyTkTncg75L9ovfp8QN8eB8niSD75, 601 ), AxonInfo( /ipv4/64.247.206.79:8091, 5HK5tp6t2S59DywmHRWPBVJeJ86T61KjurYqeooqj8sREpeN, 5E7W9QXNoW7se7B11vWRMKRCSWkkAu9EYotG5Ci2f9cqV8jn, 601 ), AxonInfo( /ipv4/51.91.30.166:40203, 5EXYcaCdnvnMZbozeknFWbj6aKXojfBi9jUpJYHea68j4q1a, 5CsxoeDvWsQFZJnDCyzxaNKgA8pBJGUJyE1DThH8xU25qUMg, 601 ), AxonInfo( /ipv4/149.137.225.62:8091, 5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3, 5Ccmf1dJKzGtXX7h17eN72MVMRsFwvYjPVmkXPUaapczECf6, 600 ), AxonInfo( /ipv4/38.147.83.11:8091, 5Hddm3iBFD2GLT5ik7LZnT3XJUnRnN8PoeCFgGQgawUVKNm8, 5DCQw11aUW7bozAKkB8tB5bHqAjiu4F6mVLZBdgJnk8dzUoV, 610 ), AxonInfo( /ipv4/38.147.83.30:41422, 5HNQURvmjjYhTSksi8Wfsw676b4owGwfLR2BFAQzG7H3HhYf, 5EZUTdAbXyLmrs3oiPvfCM19nG6oRs4X7zpgxG5oL1iK4MAh, 610 ), AxonInfo( /ipv4/54.227.25.215:10022, 5DxrZuW8kmkZPKGKp1RBVovaP5zHtPLDHYc5Yu82Z1fWqK5u, 5FhXUSmSZ2ec7ozRSA8Bg3ywmGwrjoLLzsXjNcwmZme2GcSC, 601 ), AxonInfo( /ipv4/52.8.243.76:40033, 5EnZN591jjsKKbt3yBtfGKWHxhxRH9cJonqTKRT5yTRUyNon, 5ChzhHyGmWwEdHjuvAxoUifHEZ6xpUjR67fDd4a42UrPysyB, 601 )]
>>>
```

