---
title: "Handle your Seed Phrase/Mnemonic Securely"
---

# Handle your Seed Phrase/Mnemonic Securely

The seed phrase (a.k.a. 'menemonic' or 'recovery phrase') is a series of (at least 12) words that is generated together with your wallet's cryptographic key pair, and which can be used to recover the coldkey private key. This seed phrase is therefore a human-usable way to save access to the cryptographic wallet offline, and to import the cryptographic wallet into a wallet application.

Whoever holds the seed phrase has full control over the wallet, so you should treat it like the keys to your digital safe. If someone else gains access to it, they can steal your assets. If you lose it, your assets are lost forever.

There are two categories of security failure with a secret like a seed phrase/mnemonic:

- To *lose* the secret means no longer having access to it. This implies permanent, unrecoverable loss of the resources (TAO and alpha stake, subnet creator permissions on a subnet, etc.) controlled by a Bittensor coldkey private key.
- To *leak* the secret means accidentally giving someone else access to it. This may result in them stealing your resources, or further leaking it to others who may in turn act maliciously. If your secret is leaked, you can (and should) rotate it, i.e. perform a coldkey swap.

	See: [Rotating your coldkey](../getting-started/coldkey-hotkey-security#rotating-your-coldkey)

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

### Multiple-locations

Keep redundant backups in separate, secure physical locations.

Ensure that a single point of failure—like fire, flood, or theft—cannot destroy all copies.

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

Pros: Extremely resistant to loss by destruction (e.g. fire).

Cons: Easy to leak if physical security is compromised (anyone can read or take a picture of it when the plate is exposed).

### Encrypted drive

Tactics:
- Save the seed phrase in an encrypted text file on a USB drive.
- Use strong, unique passphrases and encrypt using industry-standard tools (e.g., GPG, VeraCrypt).
- Store the USB in a secure physical location—never leave it connected to a device.
- Only connect the USB drive to secure coldkey workstations.

### Hardware wallet

A hardware wallet such as a Ledger device that has a coldkey loaded into it can act as a backup, in a sense. It cannot be used to exfiltrate the seed phrase, but it can be used to transfer out assets or even coldkey swap to a new coldkey.

Pros:

- Strong protection against leaks
- Tamper-resistant, PIN-protected

Cons:

- Signing device, *not* full backup; cannot export seed phrase
- If lost and not backed up elsewhere, access is lost
- High risk of loss due to mistaken factory reset (e.g. wrong PIN too many times)

:::danger
Only to be used in addition to backups of the seed phrase.
:::

Here’s a concise, on-brand section you can drop into your doc, matching the tone and structure of the others:

### Mobile phone vault (e.g. Polkadot Vault)

[Polkadot Vault](https://wiki.polkadot.network/general/polkadot-vault/) turns a smartphone into an air-gapped signing device. It holds your private keys securely offline and is used only to sign transactions via QR code.

Pros:

- Strong protection against remote compromise (air-gapped and network-disabled).
- No direct exposure of seed phrase during signing.
- Can be used to sign extrinsics without revealing keys to online devices.

Cons:

- Signing device, *not* full backup; cannot export seed phrase
- Physical access can compromise keys.
- Requires careful configuration for offline mode.
- App updates require full device reset and recovery from seed.

:::tip
Use only a repurposed device kept permanently offline.
:::

### Shamir's Secret Sharing

[Shamir’s Secret Sharing (SSS)](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) is a cryptographic method for securely splitting a secret—like your seed phrase—into multiple pieces or “shares.” A minimum number of these shares must be recombined to reconstruct the original secret. This offers strong protection against both loss and leak.

For example, you might split a seed phrase into 5 shares, requiring any 3 to restore the secret. These can be stored separately or given to different custodians.

Pros:

- Extremely resistant to both single-point loss and leakage:
	- The leak of any share does not compromise your wallet.
	- The loss of any share does not result in loss of the wallet.
- Shares can be safely distributed across multiple locations or people.

Cons:
- Imposes additional operational complexity.
- Stored secret is no longer human readable. Can be remedied with [slip39](https://github.com/satoshilabs/slips/blob/master/slip-0039.md).

Tools:
- [`sssa-golang`](https://github.com/SSSaaS/sssa-golang): An implementation of Shamir's Secret Sharing Algorithm in Go.
- [Banana Split](https://github.com/paritytech/banana_split): Open source tool that uses a variation of SSS to split a seed phrase into QR codes.
- [PyCryptodome SSS](https://pycryptodome.readthedocs.io/en/latest/src/protocol/ss.html): A Python-based implementation of the Shamir scheme.

