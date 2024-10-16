---
title: "Transfer Between Two H160 Accounts"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Transfer Between Two H160 Accounts

The complete code for this example is located in file `examples/transfer-h160-to-h160.js` (ADD LINK).

## Prerequisite

:::danger stop, did you set up your Metamask wallet for EVM?
You must run either [EVM Localnet with Metamask Wallet](./evm-localnet-with-metamask-wallet.md) tutorial or [EVM Testnet with Metamask Wallet](./evm-testnet-with-metamask-wallet.md) tutorial before you can run this tutorial. 
:::

## Steps

1. Create additional address in Metamask

    You can just create a new account or add exising one using a private key. Copy the address (for example: `0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF`)

2. Paste the address in `destinationEthereumAddress`:

    ```js
    // Enter your destination address here:
    const destinationEthereumAddress = '0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF';
    ```

3. Configure the amount to be sent. In this example we are using large numbers so that the result is visible in Metamask: Because Metamask doesn't respect decimals of 9 and always defaults to 18 decimals. In production environment 0.1 TAO will match to "100000000000" (10^8), while for this demonstration we have to use "100000000000000000" (10^17), which will appear as "0.1 TAO" in Metamask, but will actually be equal to 100000000 TAO (10^8 TAO).

    ```js
        // Create a transfer transaction to send TAO
        const tx = {
            to: destinationEthereumAddress,
            value: "100000000000000000",
        };
    ```

4. Run:

    ```bash
    node examples/transfer-h160-to-h160.js
    ```

5. Observe the transaction receipt and the change of the recipient balance in logs. You can also look how the recipient balance changed in Metamask.