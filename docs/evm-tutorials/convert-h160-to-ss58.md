---
title: "Convert Ethereum (H160) Address to Substrate (SS58)"
---
import { InstallPartial } from "./_install.mdx";
import { CreatePartial } from "./_create-mm-wallet.mdx";

# Convert Ethereum (H160) Address to Substrate (SS58)

This tutorial demonstrates how to convert between Ethereum (H160) and Substrate (SS58) addresses in the Bittensor EVM environment.

When working with Bittensor's EVM implementation, you may need to convert between Ethereum-style addresses (H160) and Substrate-style addresses (SS58). This is particularly useful when interacting with both EVM and native Substrate functionality.

## Procedure

<CreatePartial />

<InstallPartial />

## Set your config

### Convert Address for Bittensor
  
Run the conversion script, replacing `ethereumAddress` with your address:

```bash
node convert-address.js
```

Note down the SS58 address output by the script - this is your wallet's coldkey public key, your address on any Bittensor network.

### Transfer TAO to EVM Wallet

Use `btcli` to transfer TAO to your SS58 address. Here we will use test network.

   ```bash
   btcli wallet transfer --destination <your ss58 address> --network test
   ```
### Verify Balance in MetaMask

1. Open MetaMask
2. Ensure you're connected to the Bittensor EVM network
3. Your TAO balance should now be visible in MetaMask
4. You can now use this wallet for EVM transactions on Bittensor

## Conversion Script

Below is the code used above for the conversion.

**Source code**:
- [EVM examples repo](https://github.com/opentensor/evm-bittensor)
- [Address mapping](https://github.com/opentensor/evm-bittensor/blob/main/examples/address-mapping.js)
- [Convert address](https://github.com/opentensor/evm-bittensor/blob/main/examples/convert-address.js)

```javascript
//convert-address.js

const { convertH160ToSS58 } = require('./address-mapping.js');

async function main() {
    const ethereumAddress = "0xbdA293c21DfCaDDAeB9aa8b98455d42325599d23";

    const ss58Address = convertH160ToSS58(ethereumAddress);
    console.log(`ss58 mirror: ${ss58Address}`);
}

main().catch(console.error);
```

```javascript
// address-mapping.js
function convertH160ToSS58(ethAddress) {
    const prefix = 'evm:';
    const prefixBytes = new TextEncoder().encode(prefix);
    const addressBytes = hexToU8a(ethAddress.startsWith('0x') ? ethAddress : `0x${ethAddress}`);
    const combined = new Uint8Array(prefixBytes.length + addressBytes.length);

    // Concatenate prefix and Ethereum address
    combined.set(prefixBytes);
    combined.set(addressBytes, prefixBytes.length);

    // Hash the combined data (the public key)
    const hash = blake2AsU8a(combined);

    // Convert the hash to SS58 format
    const ss58Address = encodeAddress(hash, 42); // Network ID 42 for Bittensor
    return ss58Address;
}
```

### Step-by-Step Explanation

1. **Prefix Addition**: The function adds an 'evm:' prefix to distinguish EVM addresses
2. **Byte Conversion**: 
   - Converts the prefix to bytes using TextEncoder
   - Converts the Ethereum address to bytes using hexToU8a
3. **Combination**: Creates a new Uint8Array containing both the prefix and address bytes
4. **Hashing**: Uses Blake2b (via blake2AsU8a) to create a deterministic hash of the combined bytes
5. **SS58 Encoding**: Finally encodes the hash as an SS58 address using network ID 42 (Bittensor's network ID)

