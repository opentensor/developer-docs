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

## Recommended backup tactics

Each has pros and cons. A full backup strategy depends on multiple backups...

### Paper

Write your seed phrase on acid-free, archival-quality paper.

Store it in a tamper-evident envelope in a locked safe or safety deposit box.

Avoid common paper degradation risks: humidity, fire, ink fade, etc.

### Metal

Etch or stamp your seed phrase onto a metal plate designed to resist fire, water, and corrosion.

Store it alongside your other offline backups.

### Encrypted drive

Save the seed phrase in an encrypted text file on a USB drive.

Use strong, unique passphrases and encrypt using industry-standard tools (e.g., GPG, VeraCrypt).

Store the USB in a secure physical location—never leave it connected to a device.

### Multiple-locations

Keep redundant backups in separate, secure physical locations.

Ensure that a single point of failure—like fire, flood, or theft—cannot destroy all copies.