---
title: "Coldkey and Hotkey Workstation Security"
---

# Coldkey and Hotkey Workstation Security

This page goes into detail of security concerns for working with coldkeys and hotkeys in Bittensor.

See also:

- [Intro to Wallets, Coldkeys and Hotkeys in Bittensor](./wallets)
- [Bittensor CLI: Permissions Guide](../btcli-permissions)
- [Handle your Seed Phrase/Mnemonic Securely](../keys/handle-seed-phrase)

Interacting with Bittensor generally falls into one of three levels of security, depending on whether you need to use your coldkey private key, hotkey private key, or neither.

The workstations you use to do this work can be referred to as a permissionless workstation (requiring neither private key), a coldkey workstation or a hotkey workstation, depending on which private key is provisioned.

- [Permisionless workstation](#permissionless-workstation)
- [Coldkey workstation](#permissionless-workstation)
- [Hotkey workstation](#permissionless-workstation)

## Permissionless workstation

You can check public information about Bittensor wallets (including your TAO and alpha stake balances), subnets, validators, and more *without* using a (coldkey or hotkey) private key. This is because transaction information is public on the Bittensor blockchain, with parties being identified by their wallet's coldkey public key.

When you use a website and apps with *only your public key*, this is considered "permissionless" work. Whenever possible, you should do permissionless work on a **permissionless workstation**, meaning a device (laptop or desktop computer,  mobile phone, tablet, etc.) that does *not* have your coldkey private key loaded into it.

In other words, don't use your coldkey private key when you don't have to, and avoiding loading it into devices unnecessarily. Every device that *does* have your coldkey private key loaded into it is a **coldkey workstation**, and should be used with security precautions.

When you just want to read/check the state of the blockchain (balances, emissions, token prices, etc.) and you don't need to use your coldkey to *change* anything (for exmaple, to transfer TAO or move stake), it is preferable to use a permissionless workstation.

To use the Bittensor CLI `btcli` as a permissionless workstation:

1. Importing your coldkey ***public key*** (not private key) with:
	```shell
	btcli w regen-coldkeypub --ss58 <YOUR COLDKEY PUBLIC KEY>
	```

1. View your balances and stakes, as well as information about the Bittensor blockchain, subnets, miners, validators, etc., simply by running: 
	```shell
	btcli view dashboard
	```

Websites that offer permissionless browsing of Bittensor data include:

- [bittensor.com/scan](https://bittensor.com/scan)
- [TAO.app (without using the browser extention to load private key)](https://tao.app)

## Coldkey workstation

Your coldkey private key, accessible with your recovery [seed phrase](./wallets#the-seed-phrase-aka-mnemonic), is the complete representation of your identity to Bittensor. In otherwords, holding the coldkey or seed phrase is the ultimate authority over your Bittensor wallet. If your coldkey key is leaked or stolen allows an attacker holder to transfer (steal) your TAO, redelegate your stakes, or take other actions that can’t be reversed. Conversely, without your coldkey private key or the seed phrase, there is no possible way to recover access to your wallet.

Because of these high stakes, best practices should be diligently followed. Always prioritize confidentiality and integrity over convenience when handling coldkeys.


### Isolation of coldkey operations

The first principle is to isolate coldkey operations from day-to-day or internet-exposed systems. This means using a dedicated machine that is minimally connected to the internet, protected with full disk encryption, and has only highly trusted software installed to minimize the risk of malware or keyloggers intercepting your coldkey.

In short, you should approach all operations involving your coldkey management as high-value, mission-critical, and laden with inherent risk.

Ensure a clear boundary between coldkey operations and the working environment you use to carry them out, and everything else. 

:::tip Coldkeys do not mine

Miners will need coldkeys to manage their TAO and alpha currency, as well as hotkeys to serve requests. Ensure there is a clear boundary: The coldkey should **never** be on an environment with untrusted ML code from containers, frameworks, or libraries that might exfiltrate secrets.
:::

### Coldkey mobile device

You can use the Bittensor mobile wallet app: [bittensor.com/wallet](https://bittensor.com/wallet). If so, it is recommended to use a dedicated mobile phone for the purpose that you do not install other software on, to minimize the risk of the coldkey or seed phrase being leaked.

This option is suitable for alpha staking and TAO balance management.

### Coldkey laptop

This is required for using `btcli` or the Bittensor Python SDK for advanced use cases such as hotkey management and scripting.

<!-- What is a minimal (?) recommended operating system for a bittensor coldkey workstation ??? -->

### Operational Hygiene

Even on a minimal or air-gapped machine, follow standard security hygiene:
- Always [Handle your Seed Phrase/Mnemonic Securely](../keys/handle-seed-phrase).
- Use strong passwords for your encryption passphrases.  
- Do not reuse credentials across different environments.  
- Keep your workstation’s operating system and critical software updated with the latest security patches.
- Disable all network services (SSH, RDP, or anything else) that are not strictly needed.
- Maintain logs of important oprations.



### Rotating your coldkey

If you suspect your coldkey may have been leaked, you can request to swap it out of your wallet, using an extrinsic blockchain transaction. This operation has a 5 day waiting period, during which your coldkey will be locked. The cost of this coldkey swap transaction is 0.1 TAO.

See [Rotate/Swap your Coldkey](../subnets/schedule-coldkey-swap)

Effectively, this transfers all of your TAO and alpha stake balances, as well as your `sudo` control over any subnets you have created:

- For each hotkey owned by the old coldkey, its stake and block transfer to the new coldkey.
- For each subnet, if the old coldkey is the owner, ownership transfers to the new coldkey.
- For each hotkey staking for the old coldkey, transfer its stake to the new coldkey.
- Total stake transfers from the old coldkey to the new coldkey.
- The list of staking hotkeys transfers from the old coldkey to the new coldkey.
- For each hotkey owned by the old coldkey, ownership transfers to the new coldkey. The list of owned hotkeys for both old and new coldkeys updates.
- Any remaining balances transfer from the old coldkey to the new coldkey.


### Hardware Wallets and Hardware Security Modules (HSMs)

Ledger can be integrated with the Bittensor Chrome Extension. This may be a good option for managing stake and TAO balances, but does not allow for advanced functions such as hotkey management, subnet configuration, and governance.

See [Using Ledger Hardware Wallet](../staking-and-delegation/using-ledger-hw-wallet).

<!-- Enterprise-level hardware security modules? Are there services where you store private keys for signing without every exposing them and the company is insured for your value with them, does that exist? Do people use it?

What about Hashicorp Vault? Can you use that with HSM? AWS CloudHSM or Azure Key Vault with HSM-backed keys? How would the integration with `btcli` go

See:

- [AWS CloudHSM documentation](https://aws.amazon.com/cloudhsm/)  
- Oblique reference to [HashiCorp Vault with HSM integration](https://developer.hashicorp.com/vault/docs/configuration/seal)
 -->

### Signing Policy and Governance

If you work within a team or DAO environment that collectively manages a coldkey, consider implementing measures such as a multisig to avoid a compromise of a single individuals's keys from compromising the protected key.

<!-- How to do this, Polkadot, EVM??? -->

### Periodic Security Assessments

Maintain a secure software environment:
- Keep an eye on newly discovered OS or hardware vulnerabilities.  
- Run vulnerability scans on any machine that touches your coldkey.  
- Conduct red team exercises and penetration testing to identify weaknesses in your setup.








## Hotkey workstation

Hotkeys in Bittensor serve as the operational keys for mining, validation, and weight commits, which require moderately high availability. Because these keys do not control direct movement of TAO balances, they pose a lower risk if compromised. Nonetheless, a malicious actor who gains control of your hotkey can damage your reputation, submit invalid weights (if you are a validator) or serve malicious responses to requests as a miner.

Overall, a hotkey workstation can be considered an “operational” environment. Losing a hotkey is less of a direct financial loss than losing a coldkey, but the reputational and operational risks can be serious. Use general best practices for managing secrets when handling your hotkeys. Include continuous monitoring of activity associated with your hotkey and have a rapid mitigation strategy in place in case your hotkey is compromised.

### Secrets managements

Bittensor miners must handle hotkeys in MLOps workflows. Hotkeys must be created in coldkey workstation environments and then provisioned to the mining/hotkey workstation environment, i.e. a server that will handle requests from validators, for example by querying an AI model to generate a response (a generated image or text response) to a text prompt from a user.

- Secure secrets management solution (like [HashiCorp Vault](https://www.vaultproject.io/), [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), or [GCP Secret Manager](https://cloud.google.com/secret-manager)) to provision the hotkey private key or seedphrase to the mining server.
- Use ephemeral secret injection (CI/CD pipelines like GitLab or GitHub Actions allow storing secrets and injecting them at runtime).  
- Never put keys in code repositories 

### Hotkey rotation

If you suspect that a hotkey (but not a coldkey) has been leaked, rotate it as soon as possible using `btcli wallet swap-hotkey`. This moves the registration to a newly created hotkey owned by the same coldkey, including all of the stake delegated by other users.

Note that this operation incurs a $1 \tau$ recycling fee.


### Minimize dependency risk

Bittensor nodes often run complex software stacks with many dependencies. Take steps to reduce risk:
- Keep your Python environment or Docker images updated with the latest patches.  
- Avoid installing unnecessary packages that might contain vulnerabilities.  
- Consider sandboxing the ML library if possible, using solutions like [PyPy sandboxing](https://doc.pypy.org/en/latest/sandbox.html) or custom Docker seccomp profiles.  
