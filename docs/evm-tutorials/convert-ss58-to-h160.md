---
title: "Convert Substrate (SS58) Address to Ethereum (H160)"
---

import { InstallPartial } from "./_install.mdx";
import { CreateBtcliPartial } from "./_create-btcli-wallet.mdx";

# Convert Substrate (SS58) Address to Ethereum (H160)

This tutorial demonstrates how to convert between Substrate (SS58) and Ethereum (H160) addresses. This is useful for moving across the boundary between a) core Subtensor functionality based on Polkadot and b) EVM smart contracts.

In what follows, we'll create a wallet in BTCLI and convert its SS58 address to H160 format in order to use it with EVM smart contracts and MetaMask.

## Procedure

<CreateBtcliPartial />

<InstallPartial />

## Set your config

### Convert Address for EVM

Run the conversion script, replacing `ss58Address` with your address:

```bash
node convert-ss58-address.js
```

Note down the H160 address output by the script - this is your wallet's mirror address in EVM format that can be used with MetaMask and EVM smart contracts.

### Transfer TAO from BTCLI to EVM Mirror

Use `btcli` to transfer TAO to the H160 mirror address. Here we will use test network.

```bash
btcli wallet transfer --destination <your h160 mirror address> --network test
```

:::info
When transferring to an H160 address from BTCLI, the funds will be available on the EVM side and can be accessed through MetaMask or EVM smart contracts.
:::

### Verify Balance in MetaMask

1. [Set up MetaMask for Bittensor EVM](./evm-testnet-with-metamask-wallet)
2. Import your H160 address into MetaMask using the private key (if available) or add it as a watch-only address
3. Your TAO balance should now be visible in MetaMask
4. You can now use this address for EVM transactions on Bittensor

## Conversion Script

Below is the code used above for the conversion.

**Source code**:
- [EVM examples repo](https://github.com/opentensor/evm-bittensor)
- [Address mapping](https://github.com/opentensor/evm-bittensor/blob/main/examples/address-mapping.js)
- [Convert SS58 address](https://github.com/opentensor/evm-bittensor/blob/main/examples/withdraw-address.js)

```javascript
//convert-ss58-address.js

function ss58ToH160(ss58Address) {
  // Decode the SS58 address to a Uint8Array public key
  const publicKey = decodeAddress(ss58Address);

  // Take the first 20 bytes of the hashed public key for the Ethereum address
  const ethereumAddressBytes = publicKey.slice(0, 20);

  // Convert the 20 bytes into an Ethereum H160 address format (Hex string)
  const ethereumAddress = '0x' + Buffer.from(ethereumAddressBytes).toString('hex');

  return ethereumAddress;
}

async function main() {
    const ss58Address = "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty";

    const h160Address = ss58ToH160(ss58Address);
    console.log(`H160 mirror: ${h160Address}`);
}

main().catch(console.error);
```



