---
title: "Ed25519 Verify Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Ed25519 Verify Precompile

This precompile is deployed on the subtensor EVM at the address `0x0000000000000000000000000000000000000402`. This precompile allows you to verify an `ed25519` signature. 

You can use this precompile to verify proof of `ss58` account ownership on the EVM side. For example, you may need to do such verification for an airdrop to TAO owners. While EVM functionality doesn't allow airdropping directly to `ss58` addresses (because EVM is using H160 address schema), one can implement an airdrop via claiming. An owner of `ss58` address eligible for an airdrop can send an EVM transaction which includes the proof of `ss58` address ownership, for example, a signed message, uniquely specific for a given airdrop.

For a complete code example see [`ed25519-verify.js`](https://github.com/opentensor/evm-bittensor/blob/main/examples/ed25519-verify.js).

:::danger Stop. Did you install the dependencies?
Before you proceed, make sure you finished the [Install](./install.md) step.
:::

## Run

Navigate to the `examples` directory of the EVM-Bittensor repo:

  ```bash
  cd examples
  ```
To run this precompile, execute:

  ```bash
  node ed25519-verify.js
  ```

This example demonstrates how to:

1. Sign an arbitrary message with `ed25519` key. 

    Any substrate keyring can be initialized as `ed25519` with the same seed phrase or private key as used for signing subtensor transactions, even if they are usually used to create `sr25519` signatures. 
  
    The precompile only allows verification of 32-byte messages. However, the arbitrary message can be converted into 32-byte message by calculating the message hash (like it is done in this below example):

    ```javascript
      const messageHash = ethers.keccak256(messageHex); // Hash the message to fit into bytes32
    ```

2. Verify the signature using the precompile contract.
3. Fail the verification of the signature using the corrupted message hash with the precompile contract.
4. Fail the verification of the corrupted signature with the precompile contract.