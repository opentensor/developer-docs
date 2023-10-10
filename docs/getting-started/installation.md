---
sidebar_position: 1
---

# Installation


There are three primary methods of installing Bittensor on your local machine: 
- Using a script.
- With `pip install`. 
- From source.

### script

This is the most straightforward method and is recommended for the novice user as it will pre-install requirements, like Python, if they are not already present on your machine. Simply paste the following into your terminal:

```bash dark
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/opentensor/bittensor/master/scripts/install.sh)"
```


### pip

```bash dark
pip3 install bittensor
```


### source

```bash dark
git clone https://github.com/opentensor/bittensor.git
$ python3 -m pip install -e bittensor/
```

Once installed, you can verify installation using the [Bittensor Command Line Interface](docs/intro) with **btcli --help*** and/or check the installation in python.
```python numbered dark
import bittensor as bt
print( bt.__version__ )
```

### apple m1

There are quite a few Python libraries that are not yet compatible with Apple M chipset architecture. The best way to use Bittensor on this hardware is through Conda and Miniforge. The Opentensor team has created a Conda environment that makes installing Bittensor on these systems very easy. Simply download the YAML file [here](https://github.com/opentensor/bittensor/blob/master/scripts/environments/apple_m1_environment.yml).

> NOTE: This tutorial assumes you have installed conda on mac, if you have not done so already you can install it from [here](https://conda.io/projects/conda/en/latest/user-guide/install/macos.html).

1. Create the conda environment from the **apple_m1_environment.yml** file here:
    ```bash
    conda env create -f apple_m1_environment.yml
    ```

2. Activate the new environment: **conda activate bittensor**.
3. Verify that the new environment was installed correctly:
   ```bash
   conda env list
   ```
