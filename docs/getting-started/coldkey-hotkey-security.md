---
title: "Coldkey and Hotkey Workstation Security"
---

# Coldkey and Hotkey Workstation Security

This page goes into detail of security concerns for working with coldkeys and hotkeys in Bittensor.

See also:

- [Intro: Wallets, Coldkeys and Hotkeys in Bittensor](./wallets)
- [Bittensor CLI: Permissions Guide](../btcli-permissions)

## Coldkey workstation security

Your coldkey private key, accessible with your recovery seed phrase, is the complete representation of your identity to Bittensor. In otherwords, holding the coldkey or seed phrase is the ultimate authority over your Bittensor wallet. A stolen coldkey allows an attacker holder to transfer (steal) your TAO, redelegate your stakes, or take other actions that can’t be reversed.

Conversely, there is no way to recover...

Because of these high stakes, best practices should be diligently followed. Prioritize confidentiality and integrity over convenience when handling coldkeys.

### Isolation of coldkey operations

The first principle is to isolate coldkey operations from day-to-day or internet-exposed systems. This often means using a dedicated, air-gapped machine or at least a workstation that is minimally connected to the internet, and has only highly trusted software installed to minimize the risk of malware or keyloggers intercepting your coldkey or recovery seed phrase.

:::tip Coldkeys do not mine

Miners will need coldkeys to manage their TAO and alpha currency, as well as hotkeys to serve requests. Ensure there is a clear boundary: The coldkey should **never** be on an environment with untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.
:::

### Air-gapped machines

Is it possible to transfer an unsigned extrinsic to a USB key, plug that into your coldkey workstation, sign offline, then move the signed payload back to an online machine to broadcast it ???

### Minimal operating system

What is a minimal (?) recommended operating system for a bittensor coldkey workstation ???

### Hardware Security Modules (HSMs) and Hardware Wallets

Ledger...

dtao enabled?

single use cell phone?

  
Enterprise-level hardware security modules? Are there services where you store private keys for signing without every exposing them and the company is insured for your value with them, does that exist?


What about Hashicorp Vault? Can you use that with HSM? AWS CloudHSM or Azure Key Vault with HSM-backed keys? How would the integration with `btcli` go

For more on hardware wallets and HSMs, see:
- [Ledger’s official security overview](https://www.ledger.com/academy/securely-manage-your-crypto)  
- [AWS CloudHSM documentation](https://aws.amazon.com/cloudhsm/)  
- oblique reference to [HashiCorp Vault with HSM integration](https://developer.hashicorp.com/vault/docs/configuration/seal)

### Strong Encryption of Coldkey Files

how does encryption work in btcli? should you add your own encryption?
full-disk encryption (FDE)  to protect keys if the physical machine is stolen. eg,veracrypt, LUKS on Linux or BitLocker on Windows...

### Operational Hygiene
Even on a minimal or air-gapped machine, follow standard security hygiene:
- **Use strong passwords** for your encryption passphrases.  
- **Never reuse credentials** across different environments.  
- Keep your workstation’s firmware (UEFI/BIOS) and OS updated.  
- Maintain logs and check for unusual activity or tampering.  
- Disable all network services (SSH, RDP, or anything else) if you don’t strictly need them.


### Signing Policy and Governance

If you work within a team or DAO environment that collectively manages a coldkey, implement controls such as a multisig to avoid a single-person compromise.

How to do this, Polkadot, EVM???

### Periodic Security Assessments

Maintain a secure software environment:
- Keep an eye on newly discovered OS or hardware vulnerabilities.  
- Run vulnerability scans on any machine that touches your coldkey.  
- Conduct an internal or external penetration test if you operate at scale.

### Hybrid MLOps Considerations

In Bittensor, your coldkey might be used to stake and then a hotkey is placed in a production environment for machine learning workloads. Ensure there is a clear boundary: The coldkey environment should **never** install or run untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.  

### Additional Reading
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) for high-level best practices.  
- [OWASP Cryptographic Failures guidance](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html) on common pitfalls.  
- [SANS Institute’s InfoSec Reading Room](https://www.sans.org/white-papers/) for practical articles on secure system administration.  
- [Polkadot Wiki on Account Security](https://wiki.polkadot.network/docs/learn-accounts#security) (much is relevant to Substrate-based networks like Bittensor).

In short, you should approach coldkey management as if you were operating a high-value, mission-critical service. By isolating your coldkey from everyday operations, encrypting your keys, using hardware security when possible, and employing rigorous operational hygiene, you greatly reduce your risk. While this might be more complex to set up initially, it pays dividends in security, allowing you to hold and stake TAO with confidence.


## Hotkey workstation security

Hotkeys in Bittensor serve as the operational keys for mining, validation, and weight commits, which require moderately high availability. Because these keys do not control direct movement of TAO balances, they pose a lower risk if compromised. Nonetheless, a malicious actor who gains control of your hotkey can damage your reputation, submit invalid weights (if you are a validator) or serve malicious responses to requests as a miner.

Overall, a hotkey workstation can be considered an “operational” environment. Losing a hotkey is less of a direct financial loss than losing a coldkey, but the reputational and operational risks can be serious. Use general best practices for managing secrets when handling your hotkeys. Include continuous monitoring of activity associated with your hotkey and have a rapid mitigation strategy in place in case your hotkey is compromised.

### Secrets managements

Bittensor miners must handle hotkeys in MLOps pipeline. what are best practices? E.g., mount hotkeys with secrets management solutions like [HashiCorp Vault](https://www.vaultproject.io/), [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/), or [GCP Secret Manager](https://cloud.google.com/secret-manager) can store your hotkey material.  

### Monitoring and Logging

What does robust monitoring look like for a miner/validator? e.g.:
- **Track on-chain activity** associated with your hotkey. If you see suspicious transactions (e.g., attempts to re-register on multiple subnets unexpectedly, or large stake changes), investigate immediately.  
- **System-level logs**: Keep track of who accessed the server and when. Monitor for suspicious processes or memory usage that might indicate a compromise.  
- **API-level logs**: If you run a validator or miner software stack, ensure you log errors, warnings, and out-of-range behaviors in detail. Attackers might attempt to manipulate your node’s behavior or exploit vulnerabilities in the code.

### Key Lifecycle Management
In many MLOps pipelines, code is deployed continuously. This can create a risk that your hotkey secrets are baked into images or environment variables. Instead:
- Use ephemeral secret injection (CI/CD pipelines like GitLab or GitHub Actions allow storing secrets and injecting them at runtime).  
- Periodically rotate hotkeys. You should have something in place to rotate in case of compromise, but you should also probably rotate hotkeys periodically if they are online.

Should you archive your old hotkeys? if they are attached to a coldkey you still own probably/maybe? what are the implciations, they still bear your identity...

### Minimizing Attack Surface in ML Workloads
Because Bittensor nodes often run deep learning frameworks (like PyTorch or TensorFlow) to serve inference, that software stack can be large and complex, increasing the attack surface. Strategies to reduce risk:
- Keep your Python environment or Docker images updated with the latest patches.  
- Avoid installing unnecessary packages that might contain vulnerabilities.  
- Consider sandboxing the ML library if possible, using solutions like [PyPy sandboxing](https://doc.pypy.org/en/latest/sandbox.html) or custom Docker seccomp profiles.  

### Dealing With Potential Compromise

If you detect or suspect a hotkey compromise...

let the community know somehow?

### Team Collaboration

In some Bittensor setups, a small group or an organization might manage a pool of validators/miners. How do you manage permissions over keys within your org? probably you should have a good strategy though...


## Backing up your keys

You must keep redundant backups of your coldkey, but those backups must be just as secure as the primary. Common approaches:
- **Paper backups** of the mnemonic phrase, sealed in tamper-evident envelopes, stored in multiple physically secure locations.  
- **Encrypted USB drives** (with strong passphrases) stored in a safety deposit box or safe.  
- **Multi-geography strategy** so that a single disaster (fire or flood) doesn’t destroy all copies.