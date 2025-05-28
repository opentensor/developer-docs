---
title: "Verify Address Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Verify Address Precompile

The Ed25519 Verify Precompile allows EVM smart contracts to verify Ed25519 signatures, which are commonly used in Substrate-based chains like Bittensor. This is essential for bridging identity and ownership between Substrate and EVM ecosystems. For example, you may want to verify coldkey ownership before transferring to someone. EVM functionality doesn't allow transferring directly to a `ss58` address—like the public key of a Bittensor coldkey—because EVM uses the H160 address schema. To bridge the gap, you can use this precompile to prove a claim of ownership. The owner of a coldkey can send an EVM transaction with a signed message, serving as proof of ownership of the coldkey's `ss58` address.

## Prerequisites

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**
- [Clone the Bittensor EVM examples repo](./install.md)
- [Get set up for using EVM wallet on testnet](./evm-testnet-with-metamask-wallet)
- [Install](./install) the EVM-Bittensor repo, containing scripts and examples.

## Example

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
2. Verify the signature using the precompile contract.
3. Fail the verification of the signature using a corrupted message hash with the precompile contract.
4. Fail the verification of a corrupted signature with the precompile contract.


[On GitHub](https://github.com/opentensor/evm-bittensor/blob/main/examples/ed25519-verify.js).

<details>
  <summary>Full code</summary>
```js
const { ethers } = require('ethers');
const { Keyring } = require('@polkadot/keyring');

// PROTECT YOUR PRIVATE KEYS WELL, NEVER COMMIT THEM TO GITHUB OR SHARE WITH ANYONE
const { rpcUrl } = require('./config.js');

const provider = new ethers.JsonRpcProvider(rpcUrl);

const IED25519VERIFY_ADDRESS = '0x0000000000000000000000000000000000000402';
const IEd25519VerifyABI = [
    {
        "inputs": [
            { "internalType": "bytes32", "name": "message", "type": "bytes32" },
            { "internalType": "bytes32", "name": "publicKey", "type": "bytes32" },
            { "internalType": "bytes32", "name": "r", "type": "bytes32" },
            { "internalType": "bytes32", "name": "s", "type": "bytes32" }
        ],
        "name": "verify",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "pure",
        "type": "function"
    }
];

async function main() {
  const keyring = new Keyring({ type: 'ed25519' });
  const myAccount = keyring.addFromUri('//Alice');

  //////////////////////////////////////////////////////////////////////
  // Generate a signature

  // Your message to sign
  const message = 'Sign this message';
  const messageU8a = new TextEncoder().encode(message);
  const messageHex = ethers.hexlify(messageU8a); // Convert message to hex string
  const messageHash = ethers.keccak256(messageHex); // Hash the message to fit into bytes32
  console.log(`messageHash = ${messageHash}`);
  const hashedMessageBytes = hexToBytes(messageHash);

  // Sign the message
  const signature = myAccount.sign(hashedMessageBytes);
  console.log(`Signature: ${bytesToHex(signature)}`);

  // Verify the signature locally
  const isValid = myAccount.verify(hashedMessageBytes, signature, myAccount.publicKey);
  console.log(`Is the signature valid? ${isValid}`);

  //////////////////////////////////////////////////////////////////////
  // Verify the signature using the precompile contract

  const publicKeyBytes = bytesToHex(myAccount.publicKey);
  console.log(`publicKeyBytes = ${publicKeyBytes}`);

  // Split signture into Commitment (R) and response (s)
  let r = signature.slice(0, 32); // Commitment, a.k.a. "r" - first 32 bytes
  let s = signature.slice(32, 64); // Response, a.k.a. "s" - second 32 bytes
  let rBytes = bytesToHex(r);
  let sBytes = bytesToHex(s);
  const ed25519Contract = new ethers.Contract(IED25519VERIFY_ADDRESS, IEd25519VerifyABI, provider);
  const isPrecompileValid = await ed25519Contract.verify(messageHash, publicKeyBytes, rBytes, sBytes);
  console.log(`Is the signature valid according to the smart contract? ${isPrecompileValid}`);

  //////////////////////////////////////////////////////////////////////
  // Verify the signature for bad data using the precompile contract

  let brokenHashedMessageBytes = hashedMessageBytes;
  brokenHashedMessageBytes[0] = (brokenHashedMessageBytes[0] + 1) % 0xff;
  const brokenMessageHash = bytesToHex(brokenHashedMessageBytes);
  console.log(`brokenMessageHash = ${brokenMessageHash}`);
  const isPrecompileValidBadData = await ed25519Contract.verify(brokenMessageHash, publicKeyBytes, rBytes, sBytes);
  console.log(`Is the signature valid according to the smart contract for broken data? ${isPrecompileValidBadData}`);

  //////////////////////////////////////////////////////////////////////
  // Verify the bad signature for good data using the precompile contract

  let brokenR = r;
  brokenR[0] = (brokenR[0] + 1) % 0xff;
  rBytes = bytesToHex(r);
  const isPrecompileValidBadSignature = await ed25519Contract.verify(messageHash, publicKeyBytes, rBytes, sBytes);
  console.log(`Is the signature valid according to the smart contract for broken signature? ${isPrecompileValidBadSignature}`);
}

main().catch(console.error);

function hexToBytes(hex) {
  // Remove the '0x' prefix if it exists
  if (hex.startsWith('0x')) {
      hex = hex.slice(2);
  }

  // Initialize the array
  var bytes = new Uint8Array(hex.length / 2);

  // Loop through each pair of characters
  for (var i = 0; i < bytes.length; i++) {
      // Convert the pair of characters to a byte
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return bytes;
}

function bytesToHex(bytes) {
  // Initialize the hex string
  var hex = [];

  // Loop through each byte
  for (var i = 0; i < bytes.length; i++) {
      // Convert each byte to a hex string and add it to the array
      // Ensure it is two digits by padding with a zero if necessary
      hex.push((bytes[i] >>> 4).toString(16));
      hex.push((bytes[i] & 0xF).toString(16));
  }

  // Join all hex string parts into one string
  return '0x' + hex.join('');
}
```
</details>
## Example Output

```
node ed25519-verify.js
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
	cjs 12.2.1	node_modules/@polkadot/keyring/node_modules/@polkadot/util/cjs
	cjs 13.5.1	node_modules/@polkadot/util/cjs
messageHash = 0xd6ce89c7d4f347455c7dddf19b42e0357edd7587b73b81b384810253c3c3c8ff
Signature: 0x35c3c28c3470ea348343cea4881bd353843236df73a04300261cb86411fe88a05a196842849eb1ef4335b1f171a70e74d2d4c8d3b71ad6a41b6fa48afec85b01
Is the signature valid? true
publicKeyBytes = 0x88dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee
Is the signature valid according to the smart contract? true
brokenMessageHash = 0xd7ce89c7d4f347455c7dddf19b42e0357edd7587b73b81b384810253c3c3c8ff
Is the signature valid according to the smart contract for broken data? false
Is the signature valid according to the smart contract for broken signature? false
```