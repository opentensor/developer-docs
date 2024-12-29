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

## How an Ethereum smart contract works

On the Ethereum network, nodes such as full nodes, validator nodes and archive nodes run the Ethereum Virtual Environment (EVM) run-time environment. Smart contracts operate under this EVM. See the below high-level diagram.

<center>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/2-EVM-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-2-EVM-block-diagram.svg'),
  }}
style={{width: 450}}
/>
</center>

To understand what it means to have a smart contract in Bittensor, it helps if we go over how one creates, deploys and interacts with a smart contract. The below overview is not meant to be comprehensive.

## Creating and deploying a smart contract on Ethereum

As a developer, your developer journey would look like this:

### Step 1: Write a smart contract

- You write a smart contract code using a language like Solidity.
- The smart contract code defines the logic, functions, and state variables.

### Step 2: Compile the smart contract

- You compile the smart contract code locally using a compiler like Solc (Solidity compiler).
- Compilation converts the Solidity code into EVM bytecode.
- The compiler also generates an Application Binary Interface (ABI), a JSON file that describes the contract’s interface to the smart contract.

### Step 3: Deploy the smart contract

To deploy the contract, you will create an Ethereum transaction. Your deployment transaction will contain:

- **Recipient address:** For contract deployment, the recipient address is left empty or set to null.
- **Data payload:** The compiled bytecode of the contract.
- **Value:** (Optional) Any ETH you will send to the contract upon creation.
- **Gas limit:** Sufficient gas to cover the deployment costs.
- **Nonce, gas price, signature:** Standard transaction fields that you, the sender, will provide.

You will sign and send the deployment transaction to the Ethereum network. 

### Step 4: EVM processes the transaction

- When the block containing your transaction is processed, the EVM on each node executes your deployment transaction.
- **Note that** the EVM doesn’t perform code verification in the sense of checking for correctness or security. It just ensures that the code execution doesn’t exceed the gas limit and that your smart contract code adheres to the EVM’s rules. It is your responsibility (as a developer) to ensure that your smart contract code is secure and performs functions as you intended.
  :::tip Subnets for auditing smart contracts
  Subnet 222 on testnet is for auditing smart contracts. Watch this subnet and others in the Bittensor ecosystem that are evolving rapidly to serve users in this area.
  :::
- The EVM creates a new contract account for your smart contract, with a unique address. Your smart contract’s bytecode is stored at this address on the Ethereum blockchain.

### Step 5: On-chain address for your smart contract

- After the block containing the deployment transaction is confirmed, your smart contract is live on the Ethereum network.
- Your smart contract’s address can be found in the transaction receipt.
- Users and other contracts can now interact with the contract using this address.

## Interacting with your deployed smart contract

### Step 1

To interact with your smart contract, a user (or another smart contract) sends a signed transaction with:

- **Recipient address:** Your smart contract’s on-chain address.
- **Data payload:** Encoded function call and parameters, formatted according to your smart contract’s ABI.
- **Value:** (Optional) ETH this user is sending to your smart contract.
- **Gas limit, gas price, nonce, signature** details from this user.

### Step 2

EVM executes the interaction transaction:

- The EVM on each node loads your smart contract code from the blockchain state. The EVM then executes the specified function in your smart contract with the user-provided parameters. The user would have consulted your smart contract’s ABI to understand how to provide these parameter values.
- The EVM deducts gas from the user’s account, based on the computational resources used.
- Upon execution of the smart contract, the contract’s state may be updated based on the execution. Also, events may be emitted.

### Step 3

Blockchain state updates:

- Any changes to the contract’s storage or to the Ethereum blockchain state are applied.
- Once the transaction is confirmed, a receipt is generated, including details like logs and gas used.

## Application Binary Interface (ABI)

As stated above, when you compile your smart contract, the compiler generates a JSON file called Application Binary Interface (ABI). An ABI is a commonly used interface in software engineering, to call or interact with a specific function that exists within some compiled binary (or bytecode).

In our smart contract case, the compiler generates an ABI file that you will publish. The users of your smart contract will then consult this ABI to figure out how to interact with your smart contract bytecode that lives on the Ethereum blockchain (having been successfully deployed by you).

A few more summary details on ABI below.

### 1. ABI format

As we already said, the ABI is a JSON-formatted text file. It describes the interface of the smart contract, including:
- Function names
- Input parameters (types and names)
- Output parameters (types)
- Event definitions
- Function types (e.g., view, pure, payable)

### 2. ABI during deployment

The ABI itself is not sent to or stored on the Ethereum blockchain during contract deployment. Only the bytecode of the contract is stored on-chain. The ABI remains off-chain.

### 3. Purpose of ABI

The ABI serves as a “contract” between the smart contract and any external entity that wants to interact with it. It’s crucial for:

- Encoding function calls correctly when interacting with the contract
- Decoding return data from function calls
- Interpreting event logs emitted by the contract

### 4. Using the ABI

- Developers and applications use the ABI to know how to format transaction data when calling your smart contract functions.
- Tools and libraries (like web3.js or ethers.js) use the ABI to provide a user-friendly interface for interacting with contracts.

### 5. Sharing the ABI

Since the ABI isn’t stored on-chain, it needs to be shared separately. Common methods include:

- Publishing it alongside the contract’s source code on platforms like Etherscan
- Including it in the project’s documentation or repository
- Sharing it directly with other developers or users who need to interact with the contract

### 6. ABI and contract verification

When verifying a contract on platforms like Etherscan, developers typically upload both the source code and the ABI. This allows others to easily interact with the verified contract through the platform’s interface.

---

## Smart contracts on Bittensor

When we say “smart contracts on Bittensor” it refers to the new EVM compability feature in the Bittensor subtensor blockchain. When this EVM feature is turned ON, it allows the subtensor blockchain to execute Ethereum-compatible smart contracts. **Note that all operations performed by this new subtensor EVM feature are executed solely on the subtensor blockchain, not on the Ethereum blockchain.** See the below diagram showing how smart contracts on subtensor work:

<center>
<ThemedImage
alt="Local blockchain vs public subtensor"
sources={{
    light: useBaseUrl('/img/docs/EVM-subtensor-block-diagram.svg'),
    dark: useBaseUrl('/img/docs/dark-EVM-subtensor-block-diagram.svg'),
  }}
style={{width: 450}}
/>
</center>

### Tutorials 

Next, see [EVM Tutorials](./index.md) to start learning how to use this feature.
