---
title: "Ed25519 Verify Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Ed25519 Verify Precompile

This smart contract is precompiled at Bittensor EVM address `0x0000000000000000000000000000000000000402`.
It allows you to verify an `ed25519` signature to confirm ownership of a `ss58` public key in EVM (for example, for a Bittensor wallets coldkey public key).

For example, you may want to verify coldkey ownership before transferring to someone. EVM functionality doesn't allow transferring directly to a `ss58` address&mdash;like the public key of a bittensor coldkey, because EVM uses the H160 address schema. To bridge the gap, you can use this precompile to prove a claim of ownership. The owner of a coldkey can send an EVM transaction with a signed message, serving as proof of ownership of the coldkey's `ss58` address.

Below, we'll explore a complete code example.

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


## Code example

[On GitHub](https://github.com/opentensor/evm-bittensor/blob/main/examples/ed25519-verify.js).

```js
// ed25519-verify.js
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