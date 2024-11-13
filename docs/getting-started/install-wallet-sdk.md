---
title: "Install Wallet SDK"
---

# Install Wallet SDK

The Bittensor Wallet SDK is a Python interface for a powerful Rust-based Bittensor wallet functionality. You do not need to know Rust to use this Wallet SDK. However, if you want to contribute to the Rust components of this Wallet SDK, the Rust source is located in the `src` directory of [`btwallet](https://github.com/opentensor/btwallet) repo.


## Supported Python versions

- bittendor (SDK): Python 3.9-3.11 (reference: https://github.com/opentensor/bittensor/blob/master/setup.py#L86-L88)
- bittensor-cli: Python 3.9-3.12 (reference: https://github.com/opentensor/btcli/blob/main/setup.py#L91-L94 )
- bittensor-wallet: Python 3.9-3.12 (reference: https://github.com/opentensor/btwallet/blob/main/pyproject.toml#L34-L37)

## Developer reference

For a full developer reference, see the [Bittensor Wallet SDK section](pathname:///btwallet-api/html/index.html).

---

## Compatibility notes

- If you installed either Bittensor SDK version `8.2.0` or BTCLI version `8.2.0` then the Wallet SDK `2.0.2` is already installed. The below installation steps are only for a standalone installation of the Wallet SDK `2.0.2` package.

- The Bittensor SDK version `8.2.0` and later versions and BTCLI version `8.2.0` and later versions are compatible only with the Wallet SDK versions `>=2.0.2`.

## Install

Follow the below steps to install the Bittensor Wallet SDK:

### From PyPI

Use this option if you want to use the Wallet SDK.

```bash
$ python3 -m venv btwallet-venv  # create a virtual env
$ source btwallet-venv/bin/activate  # activate the env
$ pip install bittensor-wallet  # install bittensor-wallet
```

### From source

Use this option if you want to develop your application using the Wallet SDK.

```bash
python3 -m venv btwallet-venv  # create a virtual env
source venv/bin/activate  # activate the env
git clone https://github.com/opentensor/btwallet.git
cd btwallet
pip install maturin
maturin develop
```

After the `maturin develop` command completes, run the below command:

```bash
pip list
```

You will see `bittensor-wallet` in the list on installed packages. This means the installation was successful.

---

## Verify your installation

In the `python3` interpreter, run the below code to verify that your installation was successful. See an example output below:

```bash
python3
Python 3.12.4 (v3.12.4:8e8a4baf65, Jun  6 2024, 17:33:18) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import bittensor_wallet
>>> print(bittensor_wallet.__version__)
2.0.0
>>>
```

The above will print the Wallet SDK version you just installed, i.e., `2.0.0`, confirming that the installation was successful.

---

## Usage examples

**1. Create a wallet**

In the `python3` interpreter, run the below code:

```python
from bittensor_wallet import Wallet

# creates wallet with name `default`
wallet = Wallet()
wallet.create()
```

If a wallet with the name "default" already exists, then you will see a message. If it doesn't exist, then the above code will create both a coldkey and a hotkey and displays the following information, including your mnemonic **(mnemonics are replaced with `x` in the below example for security)**:

```
IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new coldkey is:

forward xxxx xxx xxx xxxx xxxx xxxx xxx xx xx xx actress

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen-coldkey --mnemonic "forward xxxx xxx xxx xxxx xxxx xxxx xxx xx xx xx actress"

Specify password for key encryption:
Retype your password:

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new hotkey is:

fuel xxxx xxx xxx xxxx xxxx xxxx xxx xx xx xxx bind

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen-hotkey --mnemonic "fuel xxxx xxx xxx xxxx xxxx xxxx xxx xx xx xxx bind"

name: 'default', hotkey: 'default', path: '~/.bittensor/wallets/'
>>> print(wallet)
Wallet (Name: 'default', Hotkey: 'default', Path: '~/.bittensor/wallets/')
>>>
```

**2. Pass arguments to a class other than the default**

```
name (str): The name of the wallet, used to identify it among possibly multiple wallets.
hotkey (str): String identifier for the hotkey.
path (str): File system path where wallet keys are stored.
config (Config): Bittensor configuration object.
```

In the `python3` interpreter, run the below code. See an example below (only partial is shown):

```bash
python3
Python 3.12.4 (v3.12.4:8e8a4baf65, Jun  6 2024, 17:33:18) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from bittensor_wallet import Wallet
>>> my_name = "my_wallet_name"
>>> my_path = "path_to_my_wallet"
>>> my_hotkey = "name_of_my_hotkey"
>>>
>>> my_wallet = Wallet(name=my_name, path=my_path, hotkey=my_hotkey)
>>> my_wallet.create()

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

```

The above will create a wallet with "my_wallet_name". 

**3. Use your own config**

```python
from bittensor_wallet.config import Config
config = Config()
```

---
