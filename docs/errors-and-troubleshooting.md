---
title: "Errors and Troubleshooting"
---

# Errors and Troubleshooting

This document presents helpful hints to troubleshoot the errors you may get while working in the Bittensor ecosystem. 

## KeyFileError

```bash
KeyFileError: Keyfile at: /path/to/.bittensor/wallets/some-coldkey/hotkeys/somehotkey does not exist
```

**Likely cause and remedy:** A key you are passing as a parameter in a `btcli` command is not registered in the network. Make sure you first register the keys in your desired network before using the keys. See [Register, Validate and Mine
](./subnets/register-validate-mine.md#register).

## Balances.transfer not found

```
ValueError: Call function 'Balances.transfer' not found
```

**Likely cause and remedy**: You are working with an older version of Bittensor. Update your Bittensor to the latest version. See [Install Bittensor](./getting-started/installation.md).