---
title: "Coldkey and Hotkey Workstation Security"
---

# Coldkey and Hotkey Workstation Security

This page goes into detail of security concerns for working with coldkeys and hotkeys in Bittensor.

See also:

- [Intro: Wallets, Coldkeys and Hotkeys in Bittensor](./wallets)
- [Bittensor CLI: Permissions Guide](../btcli-permissions)

## Coldkey workstation security

Your coldkey private key, accessible with your recovery seed phrase, is the complete representation of your identity to Bittensor. In otherwords, holding the coldkey or seed phrase is the ultimate authority over your Bittensor wallet. If your coldkey key is leaked or stolen allows an attacker holder to transfer (steal) your TAO, redelegate your stakes, or take other actions that can’t be reversed. Conversely, without your coldkey private key or the seedphrase, there is no possible way to recover access to your wallet.

Because of these high stakes, best practices should be diligently followed. Always prioritize confidentiality and integrity over convenience when handling coldkeys.

### Isolation of coldkey operations

The first principle is to isolate coldkey operations from day-to-day or internet-exposed systems. This means using a dedicated machine that is minimally connected to the internet, protected with full disk encryption, and has only highly trusted software installed to minimize the risk of malware or keyloggers intercepting your coldkey.

In short, you should approach all operations involving your coldkey management as high-value, mission-critical, and laden with inherant risk.

Ensure a clear boundary between coldkey operations and the working environment you use to carry them out, and everything else. 

:::tip Coldkeys do not mine

Miners will need coldkeys to manage their TAO and alpha currency, as well as hotkeys to serve requests. Ensure there is a clear boundary: The coldkey should **never** be on an environment with untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.
:::

<!--  Is it possible to transfer an unsigned extrinsic to a USB key, plug that into your coldkey workstation, sign offline, then move the signed payload back to an online machine to broadcast it ???
 -->


<!-- What is a minimal (?) recommended operating system for a bittensor coldkey workstation ??? -->

### Operational Hygiene

Even on a minimal or air-gapped machine, follow standard security hygiene:
- **Use strong passwords** for your encryption passphrases.  
- **Never reuse credentials** across different environments.  
- Keep your workstation’s firmware (UEFI/BIOS) and OS updated.  
- Maintain logs and check for unusual activity or tampering.  
- Disable all network services (SSH, RDP, or anything else) if you don’t strictly need them.


### Do not leak your seed-phrase

1. Do not keep paper/analog copies somewhere they can be accessed without your knowledge.
1. Do not expose your seed-phrase to untrustworthy software by entering into apps:
	- messaging
	- email
	- online word processors
1. Beware key-loggers.
1. Beward cameras and eye-balls (the "over the shoulder" attack).

### Do not lose your keys/seed-phrase

You must keep redundant backups of your coldkey. If you lose all access to your seed-phrase/initialized wallets, you permanently and unrecoverably lose access to your account (TAO, stake, etc.). 

Common approaches:
- **Paper backups** of the mnemonic phrase, sealed in tamper-evident envelopes and locked in a safety deposit box or safe.
- **Encrypted USB drives** with strong passphrases stored in a safety deposit box or safe.  
- **Multiple locations strategy** so that a single disaster (fire or flood) doesn’t destroy all copies.

<!-- ### Hardware Security Modules (HSMs) and Hardware Wallets

Ledger... 

dtao enabled?

Dedicated cell phone with mobile app?

Enterprise-level hardware security modules? Are there services where you store private keys for signing without every exposing them and the company is insured for your value with them, does that exist?
 -->

What about Hashicorp Vault? Can you use that with HSM? AWS CloudHSM or Azure Key Vault with HSM-backed keys? How would the integration with `btcli` go

For more on hardware wallets and HSMs, see:
- [Ledger’s official security overview](https://www.ledger.com/academy/securely-manage-your-crypto)  
- [AWS CloudHSM documentation](https://aws.amazon.com/cloudhsm/)  
- oblique reference to [HashiCorp Vault with HSM integration](https://developer.hashicorp.com/vault/docs/configuration/seal)


### Signing Policy and Governance

If you work within a team or DAO environment that collectively manages a coldkey, consider implementing measures such as a multisig to avoid a compromise of a single individuals's keys from compromising the protected key.

<!-- How to do this, Polkadot, EVM??? -->

### Periodic Security Assessments

Maintain a secure software environment:
- Keep an eye on newly discovered OS or hardware vulnerabilities.  
- Run vulnerability scans on any machine that touches your coldkey.  
- Conduct redteam exercises and penetration testing to identify weaknesses in your setup.


## Hotkey workstation security

Hotkeys in Bittensor serve as the operational keys for mining, validation, and weight commits, which require moderately high availability. Because these keys do not control direct movement of TAO balances, they pose a lower risk if compromised. Nonetheless, a malicious actor who gains control of your hotkey can damage your reputation, submit invalid weights (if you are a validator) or serve malicious responses to requests as a miner.

Overall, a hotkey workstation can be considered an “operational” environment. Losing a hotkey is less of a direct financial loss than losing a coldkey, but the reputational and operational risks can be serious. Use general best practices for managing secrets when handling your hotkeys. Include continuous monitoring of activity associated with your hotkey and have a rapid mitigation strategy in place in case your hotkey is compromised.

### Secrets managements

Bittensor miners must handle hotkeys in MLOps workflows. Hotkeys must be created in coldkey workstation environments and then provisioned to the mining/hotkey workstation environment, i.e. a server that will handle requests from validators, for example by querying an AI model to generate a response (a generated image or text response) to a text prompt from a user.

- Secure secrets management solution (like [HashiCorp Vault](https://www.vaultproject.io/), [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), or [GCP Secret Manager](https://cloud.google.com/secret-manager)) to provision the hotkey private key or seedphrase to the mining server.
- Use ephemeral secret injection (CI/CD pipelines like GitLab or GitHub Actions allow storing secrets and injecting them at runtime).  
- Never putting keys in code repositories

<!-- What are best practices?   -->

<!--

### Monitoring and Logging

Need some input guidance here. But presumably validators would want some kind of monitoring to make sure their hotkey isn't being used to submit bogus weights, or that just that they aren't dropping out of consensus... 

miners too...

is there some way to monitor **all the activity** associated with a hotkey over the last period to use it for something like audit logging? Or how would one do that?


 -->

### Hotkey rotation

If you suspect that a hotkey (but not a coldkey) has been leaked, rotate it as soon as possible using `btcli wallet swap-hotkey`. This moves the registration to a newly created hotkey owned by the same coldkey, including all of the stake delegated by other users.

<!-- Fact check ^^ -->

Note that this operation incurs a $1 \tau$ recycling fee.


### Minimize dependency risk

Because Bittensor nodes often run deep learning frameworks (like PyTorch or TensorFlow) to serve inference, that software stack can be large and complex, increasing the attack surface. Strategies to reduce risk:
- Keep your Python environment or Docker images updated with the latest patches.  
- Avoid installing unnecessary packages that might contain vulnerabilities.  
- Consider sandboxing the ML library if possible, using solutions like [PyPy sandboxing](https://doc.pypy.org/en/latest/sandbox.html) or custom Docker seccomp profiles.  


<!-- ### Team Collaboration

In some Bittensor setups, a small group or an organization might manage a pool of validators/miners. How do you manage permissions over keys within your org? probably you should have a good strategy though. Like vault with permissions granted over a pool of hotkeys with access logged -->