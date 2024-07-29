---
title: "Bittensor Networks"
---

# Bittensor Networks

The below table presents Bittensor networks and a few details:

| DESCRIPTION | MAINNET | TESTNET | DEVNET |
| :-----------| :------ |:-------|:----|
| **Chain URL**   | wss://entrypoint-finney.ai:443 | wss://test.finney.opentensor.ai:443 |wss://dev.chain.opentensor.ai:443|
| **Example Usage**| Default|`btcli wallet swap_hotkey --subtensor.chain_endpoint wss://dev.chain.opentensor.ai:443` **or** `btcli wallet swap_hotkey --subtensor.network test`|`btcli wallet swap_hotkey --subtensor.chain_endpoint wss://dev.chain.opentensor.ai:443`|
| **Block processing** | One block every 12 seconds | One block every 12 seconds | One block every 12 seconds|
| **Mainnet Archive** | wss://archive.chain.opentensor.ai:443 | None | None |
| **Network Purpose**| For all | For all | For OTF-internal only |
| **Faucet**| None | None | Available on internal project-basis |
| **Test TAO**| None | Available on request (not compatible with devnet test TAO) | Available internally on request (not compatible with testnet test TAO)|

