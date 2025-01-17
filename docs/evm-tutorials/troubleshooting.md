---
title: "Troubleshooting"
---

# Gas estimation failed

Failure of `eth_estimateGas` may indicate a wide range of problems. To understand the root cause, it can help to understand the live cycle of EVM transaction first. When someone posts a transaction to the network, the first thing to happen is gas estimation. The signed transaction is sent to a chain node and the node checks the transaction for errors. In case of literally any error with the transaction (including inability to pay fees due to low sender balance or mis-formatted transaction, etc.) the gas estimation will fail. Failure may or may not indicate the issue with gas fees. If you get the gas estimation failure, please check the following (this list will be updated dynamically):

1. Sender address has sufficient balance to pay gas fees
2. If you're using local chain, it is properly setup: Chain ID is set, deployment white list is disabled


# Gas estimation exceeds block limit (75000000)

Select the correct Solidity/EVM version. It needs to be Cancun / 0.8.24 or below.

# InvalidCode(Opcode(94)) when calling a precompile from another contract

Select the correct Solidity/EVM version. It needs to be Cancun / 0.8.24 or below.

# Transaction is pending for too long on localnet when posted through Metamask

The issue may occur when Metamask is used to sign and post transactions onchain. The cause may be the nonce caching. Metamask caches address nonce, and doesn't revert it when the network is restarted. So, what may happen is Metamask will post the transaction with higher nonce, and it will get stuck in transaction pool, waiting for the address nonce to reach the expected value. To fix this, open Metamask setting, select "Advanced", and then click on "Clear activity tab data".

