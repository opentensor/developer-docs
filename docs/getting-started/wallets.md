---
sidebar_position: 2
---

# Wallet

The Bittensor wallet is the core ownership and identity technology around which all functionalities of the network are carried out. A wallet consists of a [coldkey](docs/intro)  and a [hotkey](docs/intro) pairing of two seperate [EdDSA cryptographic keypairs](https://en.wikipedia.org/wiki/EdDSA#Ed25519) that are responsible for different functionalities within the ecosystem, but are logically connected via the API.

The [coldkey](docs/intro) is encrypted on your device and is used to store funds securely and perform high risk operations, such as transfers and staking, while the [hotkey](docs/intro) is unencrypted, and used for less secure operations such as signing messages into the network, running miners, and validating the network.

Once you have [installed bittensor](/docs/getting-started/installation), you can create a wallet locally on your machine in two ways, described below. You can also create an [external wallet](docs/intro) through the Bittensor website, or use a secondary tool like [subkey](https://docs.substrate.io/reference/command-line-tools/subkey/). Both of these options allow you to use TAO without installing Bittensor.

### btcli


```bash dark
$ btcli wallet new_coldkey --wallet.name my_coldkey
    IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possesion of this mnemonic can use it to regenerate the key and access your tokens.
    The mnemonic to the new coldkey is:
    **** *** **** **** ***** **** *** **** **** **** ***** *****
    You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
    btcli regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****

$ btcli wallet new_hotkey --wallet.name my_coldkey --wallet.hotkey my_first_hotkey
    IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possesion of this mnemonic can use it to regenerate the key and access your tokens.
    The mnemonic to the new hotkey is:
    **** *** **** **** ***** **** *** **** **** **** ***** *****
    You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
    btcli regen_hotkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

As previously mentioned, the hotkey is **not** encrypted on the device whereas the coldkey **is**.
If you want to encrypt your hotkey, use **btcli new_hotkey --use_password**.

### python


```python numbered dark
import bittensor as bt
wallet = bt.wallet( name = 'my_coldkey', hotkey = 'my_first_hotkey' )
wallet.create_if_non_existent()
"Wallet (my_coldkey, my_first_hotkey, ~/.bittensor/wallets/)"
```

Generated wallets are stored locally on your machine under `~/.bittensor/wallets`.
```bash dark nocopy
$ tree ~/.bittensor/
    ~/.bittensor/                       # The Bittensor root directory.
        wallets/                        # The folder containing all Bittensor wallets.
            my_coldkey/                 # The name of your wallet, i.e. "my_coldkey".
                coldkey                 # Your password encrypted coldkey.
                coldkeypub.txt          # The unencrypted public address of your coldkey
                hotkeys/                # The folder containing all this coldkey's hotkeys.
                    my_first_hotkey     # Your unencrypted hotkey information.
```

You can list all the local wallets stored in Bittensor's root directly with [btcli wallet list](docs/intro).
```bash dark nocopy
$ btcli wallet list
Wallets
└─
    my_wallet (<ss58_address>)
       └── my_first_hotkey (<ss58_address>)
```
The [ss58 encoded](https://docs.substrate.io/reference/address-formats/#:~:text=case%20L%20(l)-,Address%20type,address%20bytes%20that%20follow%20it.&text=Simple%20account%2Faddress%2Fnetwork%20identifier,directly%20as%20such%20an%20identifier) strings shown above are compact representations of your public keys, use these as destinations for transfering TAO, for instance when using [btcli wallet transfer](docs/intro).

**Be sure to store your mnemonics safely**

If someone has your mnemonic, they own your TAO. If you lose the password to your wallet, or the access to the machine where the wallet is stored, you can always regenerate the coldkey using the mnemonic you saved from above. You can **not** retrieve the wallet with the password alone.

If you need to regenerate your wallets, you can use the cli with your mnemonic.

```bash dark
btcli wallet regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

### external wallet

To create a wallet without installing bittensor you can use the wallet on [Bittensor](http://bittensor.com). Click the **0.00** in the top right corner. Select **create** to create a new wallet or **import** to import your mnemonic from an existing wallet. The "access" option can be used if you have already created a wallet using the website and have not chosen to "forget" it. Once you have accessed your account, you can send, receive, or stake your TAO.

## bt.wallet


### Examples

```python dark
import bittensor as bt

# Creating a default wallet coldkey = default, hotkey = default, path = ~/.bittensor/wallets
wallet = bt.wallet()

# Create wallet by parsing --wallet.name, --wallet.hotkey and --wallet.path from the command line.
wallet = bt.wallet( config = bt.wallet.config() )

# Create wallet by explicitly setting names of coldkey, hotkey and path.
wallet = bt.wallet( name = 'my_coldkey', hotkey = 'my_first_hotkey', path = '~/path/to/wallets/dir' )
```

### methods


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


#### _str__
```python
__str__(self)
```
Returns a string representation of the Wallet.


#### _repr__
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












