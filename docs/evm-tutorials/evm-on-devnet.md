---
title: "EVM on Devnet"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# EVM on Devnet

Use the devnet provided by OTF to learn and practice how to use EVM on Bittensor. This tutorial walks you through the steps. Furthermore, using a devnet gives you the below advantages:

- **Faucet**: You can request and get test TAO, i.e., fake TAO, for your development and testing.
- **Safe testing environment**: EVM devnet is isolated from the mainnet. This means you can test on devnet without worrying about your real TAO. 
- **Relaxed rate limits**: On EVM devnet the rate limits are not that strict, so you can do your testing faster and quicker.

## Step 1. Create a Metamask wallet 

1. You should have Metamask installed
2. Create a new account
3. Open the [Faucet page](https://evm-testnet.dev.opentensor.ai/faucet)
4. Click "Add Chain to Metamask" button 

The network may also be added manually:
  - Open Metamask settings
  - Click on "Add a network manually"
  - Enter 
    - Network name: "Subtensor"
    - New RPC URL: https://evm-testnet.dev.opentensor.ai
    - Chain ID: "945" (This is UTF-8 encoding for Alpha character)
    - Currency symbol: "TAO" 
    - Block explorer URL: https://evm-testscan.dev.opentensor.ai/
  - Click Save

5. Click connect icon in the address field or paste your address and click REQUEST 1 TAO button

## 2. Configure your address private key

1. Make sure you have at least one address configured in Metamask. If you don't have Metamask installed, you need to install it first.
2. Create config.js file by copying the config-example.js file:

```bash
cp config-example.js config.js
```

3. Locate your H160 account address in Metamask (Example: 0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf) and its private key (Example: 0000000000000000000000000000000000000000000000000000000000000001)
4. Copy the private key into `ethPrivateKey` string in your config.js file like that:

```javascript
const ethPrivateKey = "0000000000000000000000000000000000000000000000000000000000000001";
```

