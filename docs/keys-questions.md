---
title: "Bittensor Wallets and Keys FAQ"
--- 

# Bittensor Wallets and Keys FAQ

## Can polkadot multisigs be used for bittensor coldkeys?

Maybe? Our old docs suggest so?

https://wiki.polkadot.network/docs/learn-account-multisig

## Can I check my TAO balance and stake without using my coldkey?

Yes!
https://bittensor.com/scan/address/5HHELoMy4QzWAjMwMsgnSqeWyWT9kfqByLLc2CKiziWmWgPj
`btcli wallet balance --ss58-address COLDKEY`

## Can I check my alpha without using my coldkey?

Maybe in python? apparently not w btcli, i think apps let you do it?

## Can I check the performance of miners and validators without a coldkey or hotkey

yes you just need their hotkey address

## Wallet Creation & Security

### Can I create a coldkey without storing the mnemonic?

No, you must store the mnemonic to recover your coldkey in case of loss.

### What happens if someone steals my coldkey’s mnemonic?

They can regenerate your key and access all your funds; you should move your funds immediately if compromised.

### Is it safe to store my coldkey on an online machine?

Not really, but depends on how much you care if your account gets hacked, ideally coldkeys should be stored offline on an air-gapped device to minimize risk.

### How can I manage and back up my hotkey securely?

Hashicorp Vault maybe? other secrets manager tools...

### What are the different ways to create a wallet?

   - btcli
   - mobile app
   - python


### Can I change the password on my coldkey file?

???


### How do I securely delete an old coldkey?

depends on what you mean...

if you mean, a copy of a coldkey on a device that will allow you to sign transactions, you can delete the file, but it's really hard to make sure enough that it can't be recovered.


the wallet in the sense of the key-pair and ledger entry is permanent. if you think your seed-phrase has been compromised, rotate your TAO and alpha stake holdings to another coldkey.





### Are Bittensor wallets compatible with hardware wallets?

Ledger works


### What encryption algorithm does `btcli` use for wallets?

???

### Can I use multi-factor authentication (MFA) for my Bittensor wallet?

Nope. There are a variety of security measures you can take, but not that.


## Using Wallets Safely

### Can I sign transactions without exposing my coldkey?

Yes, use an air-gapped setup or a hardware signer.

### How do I check if my coldkey has been compromised?

that's tricky... if you suspect it has, rotate it by creating a new coldkey and transfering all your tao and stake to it, don't wait.


### Can I use a Yubikey or other security key to protect my wallet?

 Not natively, but you can use it for securing the storage of your encrypted coldkey file.


### Can I generate a coldkey completely offline and import it to a live machine?

Yes, this is recommended for maximum security.

### Is it possible to use a different derivation path for generating wallet keys?
???


### What’s the best practice for using hotkeys in a cloud-hosted miner?

Use separate hotkeys per subnet and rotate them periodically.

### Can I revoke access to a hotkey without affecting my coldkey?

No, hotkeys are permanently linked to the coldkey on-chain.

### How can I check my coldkey’s stake without loading the wallet file?

Use `btcli stake list --ss58 COLDKEY`.
    NOPE this doesn't work? what about w python?


## Transactions & Signing
### Can I sign a transactions offline and then submit them

Ledger?

### How do I verify that a signed transaction was completed successfully?
Check transaction history on `bittensor.com/scan`.

### What happens if a malicious actor submits an invalid transaction using my coldkey?

The transaction will fail.

But keey in mind that anyone with your key (including recreating it from the seed phrase) can submit a transaction that is technically valid.



### Can I set a spending limit for a coldkey?

No, spending limits are not supported.

### Are Bittensor transactions encrypted?
No, they are public, but they are cryptographically signed onto the blockchain as part of a permanent, censorship-resistant record.

### How do I track outgoing transactions from my wallet?

Use `bittensor.com/scan` or query the chain with the following script...

### Can I undo or reverse a transaction if I send it to the wrong address?

No, blockchain transactions are irreversible.

### How does the Bittensor network prevent double-spending attacks?

Transactions are validated on-chain, ensuring spent TAO cannot be reused.


## Staking & Security
### Can I delegate my stake without exposing my wallet public address?

no?

### What’s the safest way to unstake my TAO?

Use `btcli stake remove` on a secure machine.

needs coldkey.


### What happens if I stake to a malicious hotkey?

???

You might lose rewards but not your stake.



### Can I set a whitelist of trusted hotkeys for staking?

No, but you can manually choose validators.




### Can I use a time-locked smart contract for staking security?

???



### What’s the process to recover staked funds if I lose my hotkey?

You need access to the linked coldkey to withdraw.

### How does the network verify stake transfers?

Transfers are signed and recorded on-chain.

### Can a subnet operator freeze or modify my stake?

No, subnets cannot control individual stakes.


## Hotkeys & Coldkeys
### How does key rotation work in Bittensor?



### Can I disable a hotkey without affecting my stake?



### What’s the risk of exposing my hotkey’s address publicly?



### Can I create a hotkey that only works for a specific subnet?

.... no I think?

### How do I securely transfer a wallet to another device?



### Can I set an expiration date for a hotkey?

No, hotkeys remain valid unless manually rotated.

### If I delete my hotkey, can I recover it later?

Only if you have the mnemonic backup.

### What’s the safest way to store multiple hotkeys for different subnets?

Use encrypted storage and air-gapped backups.

### How can I confirm that a hotkey belongs to a particular coldkey?

There is an identity thing I think in btcli.

### Does Bittensor enforce rate limits on transactions from a single hotkey?

Yes I think so? or maybe just coldkey?
ions or modifications!