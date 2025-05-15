---
title: "Bittensor vs Ethereum Smart Contracts"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Bittensor vs Ethereum Smart Contracts

This document explains how EVM for Bittensor is different from EVM for Ethereum.

On the Ethereum network, nodes such as full nodes, validator nodes and archive nodes run the Ethereum Virtual Environment (EVM) run-time environment. Smart contracts operate under this EVM. See the below high-level diagram.

When we say “smart contracts on Bittensor” we refer to the new EVM compability feature in the Bittensor subtensor blockchain. When this EVM feature is turned ON, it allows the subtensor blockchain to execute Ethereum-compatible smart contracts. **Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.** 


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

