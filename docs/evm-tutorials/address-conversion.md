---
title: "Ethereum (H160) to Substrate (SS58) Address Converstion"
---

# Converting Ethereum and Substrate Addresses

This tutorial demonstrates how to convert between Ethereum (H160) and Substrate (SS58) addresses in the Bittensor EVM environment.

When working with Bittensor's EVM implementation, you may need to convert between Ethereum-style addresses (H160) and Substrate-style addresses (SS58). This is particularly useful when interacting with both EVM and native Substrate functionality.

This conversion is particularly useful when:
- Interacting with both EVM and native Substrate contracts
- Managing accounts that need to work across both environments
- Verifying addresses across different address formats
- Integrating EVM-based applications with native Bittensor functionality

## Procedure

### 1. Create Wallet with MetaMask

1. Install MetaMask browser extension if you haven't already
2. Create a new account or import an existing one
3. Add the Bittensor EVM network to MetaMask:
   - Network Name: Bittensor EVM
   - RPC URL: `https://test.chain.opentensor.ai`
   - Chain ID: 945
   - Currency Symbol: TAO
   - Block Explorer URL: `https://evm.bittensor.com`

### 2. Convert Address for Bittensor

1. Clone the EVM examples repository:
   ```bash
   git clone https://github.com/opentensor/evm-bittensor.git
   cd evm-bittensor/examples
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the conversion script with your MetaMask address:
   ```bash
   node convert-address.js
   ```

4. Note down the SS58 address output by the script - this is your Bittensor address

### 3. Transfer TAO to EVM Wallet

1. Use `btcli` to transfer TAO to your SS58 address:
   ```bash
   btcli root transfer --amount 1.0 --dest <your-ss58-address>
   ```

2. Wait for the transfer to complete (usually takes a few blocks)

### 4. Verify Balance in MetaMask

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

