---
title: "Create Wallet"
---

# Create Wallet

This section describes steps to create a Bittensor wallet, regenerate keys, and encrypt keys. If you are new to Bittensor wallets, see [Working with Keys](../subnets/working-with-keys.md) for an explanation of Bittensor wallet keys.

## Ways of creating wallet

You can create a Bittensor wallet either for basic uses like securely storing your TAO and receiving and sending them or for advanced uses like creating a subnet and participating as a subnet miner or a subnet validator:

- **For basic use**: Create an external wallet account by using the [Chrome Extension for Bittensor Wallet](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc?pli=1). An external wallet account created in this way will allow you to use TAO **without installing Bittensor**. If your activities are limited to sending or receiving TAO, then this is a recommended option.
- **For subnet participation**: Create a local wallet account using `btcli` command line tool on your computer. This requires that you install Bittensor on your machine. If you are interested in either creating a subnet or participating as a subnet miner or a subnet validator, then you must use this option.

## Creating a basic wallet

:::tip Suitable for non-technical users
Use this option if your activities are limited to sending and receiving TAO and you are not creating a subnet or participating as a subnet validator or a subnet miner. 
:::

To create a basic wallet account, use the Chrome Extension for Bittensor Wallet. Follow the below steps:

1. The Wallet will first create a wallet account address in the form of a 48-hexadecimal character string that usually starts with `5`. 
2. Critically, the Wallet will show you a 12-word list arranged in a specific order. You are required to keep this list of words, without changing the word order, in a safe location. This list of ordered words is called by various names such as **mnemonic** or **seed phrase**.
3. The Wallet will then prompt you for specific mnemonic words as a way of authentication.
4. Next, you will assign a name and a password to your wallet account.
5. Finally, to receive TAO from another party, you will give them your wallet account address from Step 1 (the 48-hexadecimal character string) as the destination address. Similarly, to send (transfer) TAO to another party, you will first ask them for their wallet address and send TAO to their wallet address. This way, you can create multiple wallet accounts, each with a different name and even a different password for each wallet account.

### Mnemonic

:::danger Always keep your mnemonic safe 
Anyone who knows the mnemonic for your wallet account can access your TAO tokens. Hence, you must always keep this mnemonic in a safe and secure place known only to you. More importantly, if you lose your wallet address, you can use its mnemonic (stored away in safekeeping) to restore the wallet.
:::

:::note Use Import option in Chrome Wallet Extension
To restore your lost coldkey, use the **Import** option in Chrome Extension for Bittensor Wallet and provide your 12-word mnemonic.
:::

:::tip Suitable for subnet participation
Use this option if you are creating a subnet or participating as a subnet validator or a subnet miner. You must [install Bittensor](installation.md) for this option.
:::

After you have [installed Bittensor](installation.md), you can create a local wallet on your machine in the following two ways:

- [Using `btcli`](#creating-a-local-wallet-with-cli)
- [Using Python](#creating-a-local-wallet-using-python)

## Creating a local wallet with CLI

### Coldkey and hotkey

A Bittensor wallet consists of a **coldkey** and a **hotkey**. Only coldkey is created when you use the [Chrome Extension for Bittensor Wallet](https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc?pli=1). This is sufficient for normal storage and sending and receiving of TAO. However, to participate in a subnet, you will need a local coldkey and a local hotkey.

:::tip Explanation of keys 
See [Working with Keys](../subnets/working-with-keys.md) for an explanation of coldkey and hotkey.
:::

### Creating a coldkey using `btcli` 

If you plan to perform any of the following tasks, you only need to create a coldkey:

- Create a subnet.
- Transfer TAO.
- Delegate to a validator-delegate's hotkey.

**However, if you want to validate or mine in a subnet, you will need to create hotkey also**. See the below section [Creating a hotkey using `btcli`](#creating-a-hotkey-using-btcli).

Run the following command on your terminal by giving a name to your wallet, replacing the `<my_coldkey>`. 

```bash
btcli wallet new_coldkey --wallet.name <my_coldkey>
```

For example, 
```bash
btcli wallet new_coldkey --wallet.name test-coldkey
```
You will see the following terminal output. The mnemonic is hidden for security reasons.

```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new coldkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

:::tip Regenerating the coldkey
Make a note of the above command option `regen_coldkey` showing how to regenerate your coldkey in case you lose it.
:::

### Creating a hotkey using `btcli` 

If you plan to validate or mine in a subnet, you must create both a coldkey and a hotkey.

First, create a coldkey as described above in the [Creating a coldkey using `btcli`](#creating-a-coldkey-using-btcli). Then, provide this coldkey as a parameter to generate a hotkey. This will pair the hotkey with the coldkey. See below.

Use the below command to generate the hotkey. Replace `<my_coldkey>` with the coldkey generated above, and `<my_hotkey>` with a name for your hotkey.

```bash
btcli wallet new_hotkey --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey>
```

For example, 
```bash
btcli wallet new_hotkey --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

You will see the terminal log like below. The mnemonic is hidden for security reasons.
```text
IMPORTANT: Store this mnemonic in a secure (preferably offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.
The mnemonic to the new hotkey is:
**** *** **** **** ***** **** *** **** **** **** ***** *****
You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```
:::tip Regenerating the hotkey
Make a note of the above command option `regen_hotkey` showing how to regenerate your hotkey in case you lose it.
:::

### Encrypting the hotkey

By default, the hotkey is not encrypted on the device, whereas the coldkey is encrypted. To encrypt your hotkey, run this command:
```bash
btcli wallet new_hotkey --use_password
```

## Creating a local wallet using Python

Copy and paste the following three lines into your Python interpreter. Replace the string values for `name` (`my_coldkey`) and `hotkey` (`my_hotkey`) with your own.

```python showLineNumbers
import bittensor as bt
wallet = bt.wallet(name = 'my_coldkey', hotkey = 'my_hotkey' )
wallet.create_if_non_existent()
```

You will see a terminal output like this for an example wallet with `name` as `test-coldkey` and `hotkey` as `test-hotkey`. The mnemonic is hidden for security reasons.
```text 
>>> import bittensor as bt
>>> wallet = bt.wallet(name = 'test-coldkey', hotkey = 'test-hotkey')
>>> wallet.create_if_non_existent()

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new coldkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_coldkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

Specify password for key encryption:
Retype your password:

IMPORTANT: Store this mnemonic in a secure (preferable offline place), as anyone who has possession of this mnemonic can use it to regenerate the key and access your tokens.

The mnemonic to the new hotkey is:

**** **** **** **** **** **** **** **** **** **** **** ****

You can use the mnemonic to recreate the key in case it gets lost. The command to use to regenerate the key using this mnemonic is:
btcli w regen_hotkey --mnemonic **** **** **** **** **** **** **** **** **** **** **** ****

wallet(test-coldkey, test-hotkey, ~/.bittensor/wallets/)
```

## Location and addresses of the local wallets

Local wallets are stored on your machine under `~/.bittensor/wallets`. Use the below command to list them:

```bash
tree ~/.bittensor/
``` 

You will see an output like this:

```bash
tree ~/.bittensor/
/Users/docwriter/.bittensor/    # The Bittensor root directory.
└── wallets                     # The folder contains all Bittensor wallets.
    └── test-coldkey            # The name of the wallet.
        ├── coldkey             # The password-encrypted coldkey.
        ├── coldkeypub.txt      # The unencrypted version of the coldkey.
        └── hotkeys             # The folder contains all this coldkey's hotkeys.
            └── test-hotkey     # The unencrypted hotkey information.
```

and listing out the contents of the `coldkeypub.txt` file:

```bash
cd ~/.bittensor/wallets/test-coldkey
cat coldkeypub.txt | jq
{
  "accountId": "0x36e49805b105af2b5572cfc86426247df111df2f584767ca739d9fa085246c51",
  "publicKey": "0x36e49805b105af2b5572cfc86426247df111df2f584767ca739d9fa085246c51",
  "privateKey": null,
  "secretPhrase": null,
  "secretSeed": null,
  "ss58Address": "5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE1"
}
```

The contents of the `coldkeypub.txt` are to be interpreted as below:

- The fields `accountId` and `publicKey` contain the same value. 
- The `secretPhrase` and `secretSeed` are not included in the file due to the high-security nature of the coldkey. When you create your wallet, either using the Chrome extension or `btcli`, the mnemonic (`secretPhrase`) is shown only once, while `secretSeed` is not shown.
- The `ss58Address` is the SS58-version of the `accountId` or `publicKey`. **Send this as your coldkey public wallet address to receive TAO from another party.**

:::tip Conversion between publicKey and ss58Address
Use this site [SS58.org](https://ss58.org/) to verify the conversions between `publicKey` and `ss58Address` fields.
:::

Similarly, listing out the contents of the `hotkeys/test-hotkey` file:

```bash
cat hotkeys/test-hotkey | jq
{
  "accountId": "0xc66695556006c79e278f487b01d44cf4bc611f195615a321bf3208f5e351621e",
  "publicKey": "0xc66695556006c79e278f487b01d44cf4bc611f195615a321bf3208f5e351621e",
  "privateKey": "0x38d3ae3b6e4b5df8415d15f44f * * * 0f975749f835fc221b * * * cbaac9f5ba6b1c90978e3858 * * * f0e0470be681c0b28fe2d64",
  "secretPhrase": "pyramid xxx wide slush xxx hub xxx crew spin xxx easily xxx",
  "secretSeed": "0x6c359cc52ff1256c9e5 * * * 5536c * * * 892e9ffe4e4066ad2a6e35561d6964e",
  "ss58Address": "5GYqp3eKu6W7KxhCNrHrVaPjsJHHLuAs5jbYWfeNzVudH8DE"
}
```

The contents of the `hotkeys/test-hotkey` file are to be interpreted as below:

- The fields `accountId` and `publicKey` contain the same value, just as seen in `coldkeypub.txt`. 
- The `secretPhrase` and `secretSeed` are shown because the hotkey is, by default, not encrypted.
- The `ss58Address` is the SS58-version of the `accountId` or `publicKey`. **Send this as your hotkey public wallet address to receive TAO from another party.**

## Listing all the local wallets

You can list all the local wallets stored in Bittensor's root directly with:
```bash
btcli wallet list
```
You will see a terminal output like this:
```text
Wallets
└─
    test-coldkey (5DJgMDvzC27QTBfmgGQaNWBQd8CKP9z5A12yjbG6TZ5bxNE1)
       └── test-hotkey (5GYqp3eKu6W7KxhCNrHrVaPjsJHHLuAs5jbYWfeNzVudH8DE)
```

The output will show only the `ss58Address` field values from the `coldkeypub.txt` and `test-hotkey` files of the wallets.

:::tip Use the ss58Address keys as destinations for TAO
Use the above shown `ss58Address` field values as your public wallet addresses, i.e., as destinations for TAO transfers from another wallet to your wallet. For example, when using a command: `btcli wallet transfer`.
:::

## Store your mnemonics safely

:::danger If someone has your mnemonic, they own your TAO 
If you lose the password to your wallet, or if you have lost access to the machine where the wallet is stored, you can regenerate the coldkey using the mnemonic you saved during the wallet creation steps above. You can **not** retrieve the wallet with the password alone. Remember that if someone has your mnemonic, they own your TAO.
:::

As a reminder, if you need to regenerate your wallets, you can use the `btcli` with your mnemonic, as shown below:

```bash
btcli wallet regen_coldkey --mnemonic **** *** **** **** ***** **** *** **** **** **** ***** *****
```

<!-- move this section to somewhere else
## Bt.wallet 

<Accordion title="(examples)">

```python dark
import bittensor as bt

# Creating a default wallet coldkey = default, hotkey = default, path = ~/.bittensor/wallets
wallet = bt.wallet()

# Create a wallet by parsing --wallet.name, --wallet.hotkey and --wallet.path from the command line.
wallet = bt.wallet( config = bt.wallet.config() )

# Create a wallet by explicitly setting the names of coldkey, hotkey, and path.
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
Creates hotkey from suri string, optionally encrypts it with the user's input password.


#### new_coldkey
```python
new_coldkey( self, n_words:int = 12, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates a new coldkey, optionally encrypts it with the user's input password and saves it to disk.


#### create_new_coldkey
```python
create_new_coldkey( self, n_words:int = 12, use_password: bool = True, overwrite:bool = False) -> 'Wallet'
```
Creates a new coldkey, optionally encrypts it with the user's input password and saves it to disk.


#### new_hotkey
```python
new_hotkey( self, n_words:int = 12, use_password: bool = False, overwrite:bool = False) -> 'Wallet'
```
Creates a new hotkey, optionally encrypts it with the user's input password and saves it to disk.


#### create_new_hotkey
```python
create_new_hotkey( self, n_words:int = 12, use_password: bool = False, overwrite:bool = False) -> 'Wallet'
```
Creates a new hotkey, optionally encrypts it with the user's input password and saves it to disk.


#### regenerate_coldkeypub
```python
regenerate_coldkeypub( self, ss58_address: Optional[str] = None, public_key: Optional[Union[str, bytes]] = None, overwrite: bool = False ) -> 'Wallet'
```
Regenerates the coldkeypub from passed ss58_address or public_key and saves the file


#### regenerate_coldkey
```python
regenerate_coldkey(self, use_password: bool = True, overwrite: bool = False, **kwargs) -> 'Wallet'
```
Regenerates the coldkey from passed mnemonic, seed, or JSON encrypts it with the user's password and saves the file.


#### regenerate_hotkey
```python
regenerate_hotkey(self, use_password: bool = True, overwrite: bool = False, **kwargs) -> 'Wallet'
```
Regenerates the hotkey from passed mnemonic, seed, or JSON encrypts it with the user's password and saves the file.


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
Similar to `create_if_non_existent`, it creates coldkeypub and hotkeys if they don't exist.

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

## Updating legacy wallet

It is important that you update any legacy Bittensor wallets to the new NaCL format for security. You may accomplish this with the `btcli` using the `wallet update` subcommands.

See the below example command and the terminal output:
```bash
btcli wallet update
```
You will see an output like this:
```bash
>> Do you want to update all legacy wallets? [y/n]: y
>> =====  wallet(test-coldkey, default, ~/.bittensor/wallets/)  =====
>> ✅ Keyfile is updated. 
>> 🔑 Keyfile (NaCl encrypted, /Users/docwriter/.bittensor/wallets/test-coldkey/coldkey)>
```
