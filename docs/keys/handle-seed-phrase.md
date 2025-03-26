---
title: "Handle your Seed Phrase/Mnemonic Securely"
---

# Handle your Seed Phrase/Mnemonic Securely

The seed phrase (a.k.a. 'menemonic' or 'recovery phrase') is a series of (at least 12) words that is generated together with your wallet's cryptographic key pair, and which can be used to recover the coldkey private key. This seed phrase is therefore a human-usable way to save access to the cryptographic wallet offline, and to import the cryptographic wallet into a wallet application.

Whoever holds the seed phrase has full control over the wallet, so you should treat it like the keys to your digital safe. If someone else gains access to it, they can steal your assets. If you lose it, your assets are lost forever.

There are two categories of security failure with a secret like a seed phrase/mnemonic:

- To *lose* the secret means no longer having access to it. 
- To *leak* the secret means accidentally giving someone else access to it.

## Do not leak your keys/seed phrase

1. Do not keep paper/analog copies somewhere they can be accessed without your knowledge.
1. Do not expose your seed phrase to untrustworthy software by entering into applications:
	- messaging
	- email
	- online word processors
1. Beware key-logging software if you enter your seed phrase. Never enter your seed phrase on a device that may be compromised with malware!
1. Beware screen capture software if you generate and export your seed phrase. Never enter your seed phrase on a device that may be compromised with malware!
1. Beware cameras and eye-balls (the "over the shoulder" attack) if you generate and export your seed phrase. Don’t write it down or display it on screen in public or semi-public places.

## Do not lose your keys/seed phrase

You must keep redundant backups of your coldkey. If you lose all access to your seed phrase/initialized wallets, you permanently and unrecoverably lose access to your account (TAO, stake, etc.). 

## Backup tactics

Every option for backing up a seed phrase has pros and cons, and a full backup strategy relies on a combination of tactics that offers you a reasonable balance of security and accessbility.

### Paper

Tactics:

- Write your seed phrase on acid-free, archival-quality paper.
- Store it in a tamper-evident envelope in a locked safe or safety deposit box.
- Avoid common paper degradation risks: humidity, fire, ink fade, etc.

Pros:

- No risk of digital leak (except cameras).
- Can be hard to lose if properly secured in a safe.

Cons:
- Easy to leak if physical security is compromised (anyone can read or take a picture of it when the paper is exposed).
- Easy to lose to physical disaster (e.g. fire).

### Metal

Tactic: Etch or stamp your seed phrase onto a metal plate.

Pros:
Extremely resistant to loss by destruction (e.g. fire).

Cons:
- Easy to leak if physical security is compromised (anyone can read or take a picture of it when the plate is exposed).

### Encrypted drive

Tactics:
- Save the seed phrase in an encrypted text file on a USB drive.
- Use strong, unique passphrases and encrypt using industry-standard tools (e.g., GPG, VeraCrypt).
- Store the USB in a secure physical location—never leave it connected to a device.
- Only connect the USB drive to secure coldkey workstations.

### Initialized hardware wallet

A hardware wallet such as a Ledger device that has a coldkey loaded into it is a backup, in a sense. It can't be used to exfiltrate the seed phrase, but it can be used to transfer out assets or even coldkey swap.

A device like this is very resistant to leak (just don't lose your password to the device *and* the device itself) but very easy to lose (if you type the wrong password 3 times it'll factory restore itself, much less fire or flood).

But, compared to making multiple paper or metal backups of a seed phrase, having multiple initialized hardware wallets seems potentially a lot safer? This seems like a good idea to me but I don't want to recommend it just based on my own common sense... Does anyone discuss ideas like this?

### Multiple-locations

Keep redundant backups in separate, secure physical locations.

Ensure that a single point of failure—like fire, flood, or theft—cannot destroy all copies.

### Shamir's Secret Sharing

https://pycryptodome.readthedocs.io/en/latest/src/protocol/ss.html