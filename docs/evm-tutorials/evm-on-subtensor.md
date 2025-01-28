---
title: "EVM on Subtensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# EVM on Subtensor

Ethereum compatibility layer is now available on the subtensor. Using this EVM feature you can:
- Deploy and interact with any Ethereum smart contract, without any need to change it, on the subtensor blockchain.
- Access all the standard Ethereum JSON-RPC methods from this EVM compatibility layer on Bittensor.

When this EVM feature is turned ON, it allows the subtensor blockchain to execute Ethereum-compatible smart contracts. 

:::danger EVM smart contract executes on subtensor
Note that all operations performed by the subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.
:::

This document explains in simple terms what this EVM on subtensor is and how it works. Head on over to the [EVM Tutorials](./index.md) to start learning how to use this feature.

## Ethereum vs Bittensor smart contracts

On the Ethereum network, nodes such as full nodes, validator nodes and archive nodes run the Ethereum Virtual Environment (EVM) run-time environment. Smart contracts operate under this EVM. See the below high-level diagram.

When we say “smart contracts on Bittensor” we refer to the new EVM compability feature in the Bittensor subtensor blockchain. When this EVM feature is turned ON, it allows the subtensor blockchain to execute Ethereum-compatible smart contracts. **Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.** See the below diagram showing how smart contracts on subtensor work:


<left>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/2-EVM-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-2-EVM-block-diagram.svg'),
  }}
style={{width: 400}}
/>
</left>
<right>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/EVM-subtensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-EVM-subtensor-block-diagram.svg'),
  }}
style={{width: 400}}
/>
</right>


Next, see [EVM Tutorials](./index.md) to start learning how to use this feature.
