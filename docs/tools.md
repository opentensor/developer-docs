---
title: "Bittensor tooling overiew"
---

# Bittensor tooling overiew

Bittensor provides several tools to help developers, miners, and validators interact with the network and its features. Below is a quick overview of the core Bittensor tools, followed by links for further reading.

---

## Bittensor SDK

The Bittensor SDK is a Python-based library that allows developers to interact programmatically with the Bittensor network. You can use the SDK to:
- Create and manage wallets
- Register miners and validators
- Query and monitor network activity
- Build applications on top of Bittensor’s decentralized AI infrastructure

**Learn more in the [Bittensor SDK documentation](/docs/bittensor-sdk)** (link for illustration).

---

## Bittensor CLI

The Bittensor command-line interface (`btcli`) provides a straightforward way to:
- Create, manage, and encrypt wallet keys
- Transfer and stake TAO
- Perform subnet management operations (e.g., creating subnets, registering miners/validators)
- View wallet information and network status

It is designed for users who prefer quick terminal commands or those managing multiple nodes and subnet interactions.  
**See [Bittensor CLI reference](/docs/btcli.md)** for detailed usage instructions.

---

## Wallets and Keys

In Bittensor (like other cryptocurrency applications), a *wallet* is a tool for managing the cryptographic key-pairs required to prove your identity, sign transactions, and access your currency

Bittensor uses a dual-key wallet structure:
- **Coldkey** for secure storage of TAO and high-security operations  
- **Hotkey** for operational tasks like validation, mining, and day-to-day transactions

Both keys are crucial for safeguarding and participating in the network.  
**For a complete guide, see [Wallets & Keys](/docs/wallets-and-keys)** and [Working with Keys](/docs/working-with-keys).

---

**Next Steps**  
- [Install Bittensor](/docs/installation)  
- [Explore the Bittensor SDK](/docs/bittensor-sdk)  
- [Create and manage your wallets and keys](/docs/wallets-and-keys)  
- [Use the CLI for subnet and wallet operations](/docs/btcli.md)
