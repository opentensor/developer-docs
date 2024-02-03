---
title: "Create Wallet"
---

# Create Wallet

The Bittensor wallet holds the core ownership. It is the identity technology underlying all the operations in the Bittensor network. 

## Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. The coldkey and hotkey are responsible for different functionalities within the Bittensor ecosystem. These two keys are logically connected via the Bittensor API.

The coldkey is encrypted on your device. It is used to store funds securely and perform high risk operations such as transfers and staking.

The hotkey is by default unencrypted. However, you can encrypt the hotkey. The hotkey is used for less secure operations such as signing messages into the network, running subnet miners, and validating the network. The hotkey is generated from the coldkey.

:::tip Coldkey and hotkey are pairings of separate private and public keys
Each key is a pairing of two seperate [EdDSA cryptographic keypairs](https://en.wikipedia.org/wiki/EdDSA#Ed25519). Hence, a coldkey is a pairing of a private key and a public key. Similarly, a hotkey is a pairing of another set of private key and public keys. In this sense, a coldkey or a hotkey is each analogous to an account on a blockchain, where the account is defined by a pair of a public and a private key.
:::

## Ways of creating wallet

You can:
- Create a wallet locally on your machine. This requires that you install Bittensor on your machine.
- Create an external wallet, either through the Bittensor website or by using a tool like [subkey](https://docs.substrate.io/reference/command-line-tools/subkey/). An external wallet created in this way will allow you to use TAO without installing Bittensor.

## Creating a local wallet

After you have [installed Bittensor](installation.md), you can create a wallet locally on your machine in the following two ways:
- Using `btcli`.
- Using Python.

### Using `btcli` 

Using `btcli` to create a local wallet is a two step process: 
- First create a coldkey.
- Provide this coldkey as a parameter to generate a hotkey. 

#### Step 1: Generate a coldkey

Run the following command on your terminal by giving a name to your wallet, replacing the `my_coldkey`. 

```bash
btcli wallet new_coldkey --wallet.name <my_coldkey>
```

For example, 
```bash
btcli wallet new_coldkey --wallet.name test-coldkey
```
You will see the following terminal output. The mnemonic is hidden for security reasons.

```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possesion of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new coldkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

:::tip Regenerating a key
Make a note of the above command option `regen_coldkey` showing how to regenerate your coldkey in case you lose it.
:::

#### Step 2: Generate a hotkey

Next, use the below command to generate the hotkey. Replace `<my_coldkey>` with the coldkey generated above, and `<my_first_hotkey>` with a name for your hotkey.

```bash
btcli wallet new_hotkey --wallet.name <my_coldkey> --wallet.hotkey <my_first_hotkey>
```

For example, 
```bash
btcli wallet new_hotkey --wallet.name test-coldkey --wallet.hotkey my_first_hotkey
```

You will see the terminal log like below. The mnemonic is hidden for security reasons.
```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possesion of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new hotkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```
:::tip Regenerating a key
Make a note of the above command option `regen_hotkey` showing how to regenerate your hotkey in case you lose it.
:::

### Encrypting the hotkey

By default, the hotkey is not encrypted on the device whereas the coldkey is encrypted. To encrypt your hotkey, run this command:
```bash
btcli wallet new_hotkey --use_password
```

### Using Python 
Copy and paste the following three lines into your Python interpreter. You can replace the string values for `name` (`my_coldkey`) and `hotkey` (`my_first_hotkey`) with your own.

```python showLineNumbers
import bittensor as bt
wallet = bt.wallet(name = 'my_coldkey', hotkey = 'my_first_hotkey' )
wallet.create_if_non_existent()
```

You will see a terminal output like this for an example wallet with `name` as `tst1_coldkey` and `hotkey` as `tst1_hotkey`. The mnemonic is hidden for security reasons.
```text 
>>> import bittensor as bt
>>> wallet = bt.wallet(name = 'tst1_coldkey', hotkey = 'tst1_hotkey')
>>> wallet.create_if_non_existent()

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new coldkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

Specify password for key encryption:
Password not strong enough. Try increasing the length of the password or the password complexity
Specify password for key encryption:
Retype your password:

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new hotkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

wallet(tst1_coldkey, tst1_hotkey, ~/.bittensor/wallets/)
>>>
```
### Location of the created wallet

Generated wallets are stored locally on your machine under `~/.bittensor/wallets`.  Use the below command:
```bash
tree ~/.bittensor/
``` 

To see the following the directory structure for the above-created Bittensor wallet.

```bash
tree ~/.bittensor/
/Users/docwriter/.bittensor/    # The Bittensor root directory.
└── wallets # The folder containing all Bittensor wallets.
    └── tst1_coldkey # The name of the wallet.
        ├── coldkey # The password-encrypted coldkey.
        ├── coldkeypub.txt # The unencrypted public address of the coldkey.
        └── hotkeys # The folder containing all this coldkey's hotkeys.
            └── tst1_hotkey # The unencrypted hotkey information.
```

### List all the local wallets

You can list all the local wallets stored in Bittensor's root directly with:
```bash
btcli wallet list
```
You will see a terminal output like this:
```text
Wallets
└─
    tst1_coldkey (<ss58_string>)
       └── tst1_hotkey (<ss58_string>)
```

The above shown `<ss58_string>` are [SS58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier). These are compact representations of the public keys corresponding to the wallet's coldkey and hotkey. 

:::tip Use the public keys as destinations for TAO
Use the above shown public keys as wallet addresses, i.e., as destinations for TAO transfers. For example, when using a command: `btcli wallet transfer`).
:::

### Store your mnemonics safely

:::danger If someone has your mnemonic, they own your TAO 
If you lose the password to your wallet, or if you have lost the access to the machine where the wallet is stored, you can regenerate the coldkey using the mnemonic you saved during wallet creation steps above. You can **not** retrieve the wallet with the password alone. Remember that if someone has your mnemonic, they own your TAO. 
:::

As a reminder, if you need to regenerate your wallets, you can use the `btcli` with your mnemonic, as shown below:

```bash
btcli wallet regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

## Creating an external wallet

To create a wallet without installing Bittensor, use the wallet on [Bittensor](http://bittensor.com). Follow these steps:

1. On [Bittensor website](http://bittensor.com) click the **0.00** on the top right corner. 
2. Select **Create** to create a new wallet or **Import** to import your mnemonic from an existing wallet. 
   - Use the **Access** option if you have already created a wallet using the website and have not chosen to **Forget** it. After you have accessed your account, you can send, receive, or stake your TAO.

<!-- move this section to somewhere else
## Bt.wallet 

<Accordion title="(examples)">

```python dark
import bittensor as bt

# Creating a default wallet coldkey = default, hotkey = default, path = ~/.bittensor/wallets
wallet = bt.wallet()

# Create wallet by parsing --wallet.name, --wallet.hotkey and --wallet.path from the command line.
wallet = bt.wallet( config = bt.wallet.config() )

# Create wallet by explicitly setting names of coldkey, hotkey and path.
wallet = bt.wallet( name = 'my_coldkey', hotkey = 'my_first_hotkey', path = '~/path/to/wallets/dir' )
```


</Accordion>

<Accordion title="(methods)">


#### create_coldkey_from_uri
```python
create_coldkey_from_uri(self, uri:str, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates coldkey from suri string, optionally encrypts it with the user's inputed password.


#### create_hotkey_from_uri
```python
create_hotkey_from_uri( self, uri:str, use_password: bool = False, overwrite:bool = False) -> 'Wallet'
```
Creates hotkey from suri string, optionally encrypts it with the user's inputed password.


#### new_coldkey
```python
new_coldkey( self, n_words:int = 12, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates a new coldkey, optionally encrypts it with the user's inputed password and saves to disk.


#### create_new_coldkey
```python
create_new_coldkey( self, n_words:int = 12, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates a new coldkey, optionally encrypts it with the user's inputed password and saves to disk.


#### new_hotkey
```python
new_hotkey( self, n_words:int = 12, use_password: bool = False, overwrite:bool = False) -> 'Wallet'
```
Creates a new hotkey, optionally encrypts it with the user's inputed password and saves to disk.


#### create_new_hotkey
```python
create_new_hotkey( self, n_words:int = 12, use_password: bool = False, overwrite:bool = False) -> 'Wallet'
```
Creates a new hotkey, optionally encrypts it with the user's inputed password and saves to disk.


#### regenerate_coldkeypub
```python
regenerate_coldkeypub( self, ss58_address: Optional[str] = None, public_key: Optional[Union[str, bytes]] = None, overwrite: bool = False ) -> 'Wallet'
```
Regenerates the coldkeypub from passed ss58_address or public_key and saves the file


#### regenerate_coldkey
```python
regenerate_coldkey(self, use_password: bool = True, overwrite: bool = False, **kwargs) -> 'Wallet'
```
Regenerates the coldkey from passed mnemonic, seed, or json encrypts it with the user's password and saves the file.


#### regenerate_hotkey
```python
regenerate_hotkey(self, use_password: bool = True, overwrite: bool = False, **kwargs) -> 'Wallet'
```
Regenerates the hotkey from passed mnemonic, seed, or json encrypts it with the user's password and saves the file.


#### __str__
```python
__str__(self)
```
Returns a string representation of the Wallet.


#### __repr__
```python
__repr__(self)
```
Returns the same string representation as `__str__`.


#### create_if_non_existent
```python
create_if_non_existent(self, coldkey_use_password:bool = True, hotkey_use_password:bool = False) -> 'Wallet'
```
Creates coldkeypub and hotkeys if they don't exist.


 
#### create
```python
create(self, coldkey_use_password:bool = True, hotkey_use_password:bool = False) -> 'Wallet'
```
Similar to `create_if_non_existent`, creates coldkeypub and hotkeys if they don't exist.

#### recreate
```python
recreate(self, coldkey_use_password:bool = True, hotkey_use_password:bool = False ) -> 'Wallet'
```
Creates new coldkeypub and hotkeys, overwriting existing ones.

#### set_hotkey, set_coldkeypub, set_coldkey
```python
set_hotkey(self, keypair: 'bittensor.Keypair', encrypt: bool = False, overwrite: bool = False) -> 'bittensor.Keyfile'
set_coldkeypub(self, keypair: 'bittensor.Keypair', encrypt: bool = False, overwrite: bool = False) -> 'bittensor.Keyfile'
set_coldkey(self, keypair: 'bittensor.Keypair', encrypt: bool = True, overwrite: bool = False) -> 'bittensor.Keyfile'
```
Sets the hotkey, coldkeypub, and coldkey, respectively. Each can optionally be encrypted and overwritten.


#### get_coldkey, get_hotkey, get_coldkeypub
```python
get_coldkey(self, password: str = None ) -> 'bittensor.Keypair'
get_hotkey(self, password: str = None ) -> 'bittensor.Keypair'
get_coldkeypub(self, password: str = None ) -> 'bittensor.Keypair'
```
Returns the coldkey, hotkey, and coldkeypub, respectively. If encrypted, requires a password.


#### create_coldkey_from_uri
```python
create_coldkey_from_uri(self, uri:str, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates a coldkey from a suri string. Optionally encrypts and overwrites existing coldkey.


</Accordion>
-->

## Update wallet

It is important that you update any legacy Bittensor wallets to the new NaCL format for security. You may accomplish this with the `btcli` using the `wallet update` subcommands.

See the below example command and the terminal output:
```bash
btcli wallet update
>> Do you want to update all legacy wallets? [y/n]: n
>> =====  wallet(tst1_coldkey, default, ~/.bittensor/wallets/)  =====
>> ✅ Keyfile is updated. 
>> 🔑 Keyfile (NaCl encrypted, ~/.bittensor/wallets/tst1_coldkey/coldkey)>
```
