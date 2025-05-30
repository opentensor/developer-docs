---
title: "Subnet Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Subnet Precompile

The subnet precompile allows you to interact with subnet operations on the Bittensor network through smart contracts. This precompile provides functionality for registering networks, managing network parameters, and querying network state.

## Precompile Address

The subnet precompile is available at address `0x803` (2051 in decimal).

## Available Functions

The subnet precompile provides comprehensive functionality for subnet management and configuration. All functions are categorized below:

### Network Registration

#### `registerNetwork`
Registers a new subnet without additional identity information.

**Parameters:**
- `hotkey` (bytes32): The hotkey (32 bytes) that will own the network

**Returns:**
- None (payable function)

**Description:**
Registers a new subnet on the Bittensor network. The caller becomes the subnet owner and can manage subnet parameters.

#### `registerNetworkWithIdentity`  
Registers a new subnet with detailed identity information.

**Parameters:**
- `hotkey` (bytes32): The hotkey that will own the network
- `subnetName` (string): Name of the subnet (max 256 chars)
- `githubRepo` (string): GitHub repository URL (max 1024 chars)
- `subnetContact` (string): Contact information (max 1024 chars)
- `subnetUrl` (string): Subnet website URL (max 1024 chars) 
- `discord` (string): Discord server invite (max 256 chars)
- `description` (string): Subnet description (max 1024 chars)
- `additional` (string): Additional information (max 1024 chars)

**Returns:**
- None (payable function)

**Description:**
Registers a new subnet with comprehensive identity metadata that helps users understand the subnet's purpose and how to interact with it.

### Rate Limiting

#### `getServingRateLimit`
Gets the serving rate limit for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The serving rate limit value

#### `setServingRateLimit`
Sets the serving rate limit for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `servingRateLimit` (uint64): The new serving rate limit value

**Returns:**
- None (payable function)

### Difficulty Management

#### `getMinDifficulty`
Gets the minimum difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The minimum difficulty value

#### `setMinDifficulty`
Sets the minimum difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `minDifficulty` (uint64): The new minimum difficulty value

**Returns:**
- None (payable function)

#### `getMaxDifficulty`
Gets the maximum difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The maximum difficulty value

#### `setMaxDifficulty`
Sets the maximum difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `maxDifficulty` (uint64): The new maximum difficulty value

**Returns:**
- None (payable function)

#### `getDifficulty`
Gets the current difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The current difficulty value

#### `setDifficulty`
Sets the current difficulty for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `difficulty` (uint64): The new difficulty value

**Returns:**
- None (payable function)

### Weight Management

#### `getWeightsVersionKey`
Gets the weights version key for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The weights version key value

#### `setWeightsVersionKey`
Sets the weights version key for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `weightsVersionKey` (uint64): The new weights version key value

**Returns:**
- None (payable function)

#### `getWeightsSetRateLimit`
Gets the weights set rate limit for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The weights set rate limit value

#### `setWeightsSetRateLimit` ⚠️ **DEPRECATED**
Sets the weights set rate limit for a subnet. **This function is deprecated. Subnet owners cannot set weight setting rate limits.**

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `weightsSetRateLimit` (uint64): The weights set rate limit value (ignored)

**Returns:**
- None (payable function)

**Description:**
This function still exists for backward compatibility but performs no operation and returns successfully.

#### `getMaxWeightLimit`
Gets the maximum weight limit for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The maximum weight limit value

#### `setMaxWeightLimit`
Sets the maximum weight limit for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `maxWeightLimit` (uint16): The new maximum weight limit value

**Returns:**
- None (payable function)

#### `getMinAllowedWeights`
Gets the minimum allowed weights for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The minimum allowed weights value

#### `setMinAllowedWeights`
Sets the minimum allowed weights for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `minAllowedWeights` (uint16): The new minimum allowed weights value

**Returns:**
- None (payable function)

### Consensus Parameters

#### `getAdjustmentAlpha`
Gets the adjustment alpha parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The adjustment alpha value

#### `setAdjustmentAlpha`
Sets the adjustment alpha parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `adjustmentAlpha` (uint64): The new adjustment alpha value

**Returns:**
- None (payable function)

#### `getKappa`
Gets the kappa parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The kappa value

#### `setKappa`
Sets the kappa parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `kappa` (uint16): The new kappa value

**Returns:**
- None (payable function)

#### `getRho`
Gets the rho parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The rho value

#### `setRho`
Sets the rho parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `rho` (uint16): The new rho value

**Returns:**
- None (payable function)

#### `getAlphaSigmoidSteepness`
Gets the alpha sigmoid steepness parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The alpha sigmoid steepness value

#### `setAlphaSigmoidSteepness`
Sets the alpha sigmoid steepness parameter for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `steepness` (uint16): The new alpha sigmoid steepness value

**Returns:**
- None (payable function)

#### `getAlphaValues`
Gets the alpha low and high values for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The alpha low value
- `uint16`: The alpha high value

#### `setAlphaValues`
Sets the alpha low and high values for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `alphaLow` (uint16): The new alpha low value
- `alphaHigh` (uint16): The new alpha high value

**Returns:**
- None (payable function)

### Network Activity

#### `getImmunityPeriod`
Gets the immunity period for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The immunity period value

#### `setImmunityPeriod`
Sets the immunity period for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `immunityPeriod` (uint16): The new immunity period value

**Returns:**
- None (payable function)

#### `getActivityCutoff`
Gets the activity cutoff for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint16`: The activity cutoff value

#### `setActivityCutoff`
Sets the activity cutoff for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `activityCutoff` (uint16): The new activity cutoff value

**Returns:**
- None (payable function)

### Registration Control

#### `getNetworkRegistrationAllowed`
Gets whether network registration is allowed for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `bool`: Whether network registration is allowed

#### `setNetworkRegistrationAllowed`
Sets whether network registration is allowed for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `registrationAllowed` (bool): Whether to allow network registration

**Returns:**
- None (payable function)

#### `getNetworkPowRegistrationAllowed`
Gets whether PoW registration is allowed for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `bool`: Whether PoW registration is allowed

#### `setNetworkPowRegistrationAllowed`
Sets whether PoW registration is allowed for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `registrationAllowed` (bool): Whether to allow PoW registration

**Returns:**
- None (payable function)

### Burn Management

#### `getMinBurn`
Gets the minimum burn amount for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The minimum burn amount

#### `setMinBurn` ⚠️ **DEPRECATED**
Sets the minimum burn amount for a subnet. **This function is deprecated. Subnet owners cannot set the minimum burn anymore.**

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `minBurn` (uint64): The minimum burn amount (ignored)

**Returns:**
- None (payable function)

**Description:**
This function still exists for backward compatibility but performs no operation and returns successfully.

#### `getMaxBurn`
Gets the maximum burn amount for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The maximum burn amount

#### `setMaxBurn` ⚠️ **DEPRECATED**
Sets the maximum burn amount for a subnet. **This function is deprecated. Subnet owners cannot set the maximum burn anymore.**

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `maxBurn` (uint64): The maximum burn amount (ignored)

**Returns:**
- None (payable function)

**Description:**
This function still exists for backward compatibility but performs no operation and returns successfully.

### Bonds and Moving Averages

#### `getBondsMovingAverage`
Gets the bonds moving average for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The bonds moving average value

#### `setBondsMovingAverage`
Sets the bonds moving average for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `bondsMovingAverage` (uint64): The new bonds moving average value

**Returns:**
- None (payable function)

### Feature Toggles

#### `getCommitRevealWeightsEnabled`
Gets whether commit-reveal weights are enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `bool`: Whether commit-reveal weights are enabled

#### `setCommitRevealWeightsEnabled`
Sets whether commit-reveal weights are enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `enabled` (bool): Whether to enable commit-reveal weights

**Returns:**
- None (payable function)

#### `getCommitRevealWeightsInterval`
Gets the commit-reveal weights interval for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `uint64`: The commit-reveal weights interval value

#### `setCommitRevealWeightsInterval`
Sets the commit-reveal weights interval for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `interval` (uint64): The new commit-reveal weights interval value

**Returns:**
- None (payable function)

#### `getLiquidAlphaEnabled`
Gets whether liquid alpha is enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `bool`: Whether liquid alpha is enabled

#### `setLiquidAlphaEnabled`
Sets whether liquid alpha is enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `enabled` (bool): Whether to enable liquid alpha

**Returns:**
- None (payable function)

#### `getYuma3Enabled`
Gets whether Yuma3 consensus is enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID

**Returns:**
- `bool`: Whether Yuma3 consensus is enabled

#### `setYuma3Enabled`
Sets whether Yuma3 consensus is enabled for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `enabled` (bool): Whether to enable Yuma3 consensus

**Returns:**
- None (payable function)

### Transfer Control

#### `toggleTransfers`
Toggles transfers on/off for a subnet.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `toggle` (bool): Whether to enable or disable transfers

**Returns:**
- None (payable function)

## Example Scripts

### Javascript
```js
const { ethers, assert } = require("ethers");
const { ApiPromise, WsProvider, Keyring } = require("@polkadot/api");
const { convertH160ToSS58 } = require("./address-mapping.js");
const { decodeAddress } = require("@polkadot/util-crypto");

// PROTECT YOUR PRIVATE KEYS WELL, NEVER COMMIT THEM TO GITHUB OR SHARE WITH ANYONE
const { ethPrivateKey, subSeed, rpcUrl, wsUrl } = require("./config.js");
const amount1TAO = BigInt("1000000000");
// Connect to the Subtensor node
const provider = new ethers.JsonRpcProvider(rpcUrl);

function sendTransaction(api, call, signer) {
  return new Promise((resolve, reject) => {
    let unsubscribed = false;

    const unsubscribe = call
      .signAndSend(signer, ({ status, events, dispatchError }) => {
        const safelyUnsubscribe = () => {
          if (!unsubscribed) {
            unsubscribed = true;
            unsubscribe
              .then(() => {})
              .catch((error) => console.error("Failed to unsubscribe:", error));
          }
        };

        // Check for transaction errors
        if (dispatchError) {
          let errout = dispatchError.toString();
          if (dispatchError.isModule) {
            // for module errors, we have the section indexed, lookup
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            const { docs, name, section } = decoded;
            errout = `${name}: ${docs}`;
          }
          safelyUnsubscribe();
          reject(Error(errout));
        }
        // Log and resolve when the transaction is included in a block
        if (status.isInBlock) {
          safelyUnsubscribe();
          resolve(status.asInBlock);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// for set
const subnet_contract_abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "netuid",
        type: "uint16",
      },
    ],
    name: "getHyperParameter",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "subnetName",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "githubRepo",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "subnetContact",
        type: "bytes",
      },
    ],
    name: "registerNetwork",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "netuid",
        type: "uint16",
      },
      {
        internalType: "uint64",
        name: "value",
        type: "uint64",
      },
    ],
    name: "setHyperParameter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// compile with evm version 0.8.3
const subnet_contract_bytecode =
  "0x608060405234801561001057600080fd5b50604051610e6d380380610e6d8339818101604052810190610032919061015c565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561006d57600080fd5b61007c8161008360201b60201c565b50506101ce565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050610156816101b7565b92915050565b60006020828403121561016e57600080fd5b600061017c84828501610147565b91505092915050565b600061019082610197565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101c081610185565b81146101cb57600080fd5b50565b610c90806101dd6000396000f3fe6080604052600436106100555760003560e01c8063290212c11461005a578063715018a614610076578063786fede51461008d57806378b63cb6146100ca5780638da5cb5b146100e6578063f2fde38b14610111575b600080fd5b610074600480360381019061006f919061077b565b61013a565b005b34801561008257600080fd5b5061008b610279565b005b34801561009957600080fd5b506100b460048036038101906100af9190610812565b61028d565b6040516100c19190610a3c565b60405180910390f35b6100e460048036038101906100df919061083b565b6103df565b005b3480156100f257600080fd5b506100fb61051a565b6040516101089190610971565b60405180910390f35b34801561011d57600080fd5b5061013860048036038101906101339190610752565b610543565b005b610142610591565b60006108039050600061080373ffffffffffffffffffffffffffffffffffffffff163463290212c160e01b8787876040516024016101829392919061098c565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101ec919061095a565b60006040518083038185875af1925050503d8060008114610229576040519150601f19603f3d011682016040523d82523d6000602084013e61022e565b606091505b5050905080610272576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610269906109d8565b60405180910390fd5b5050505050565b610281610591565b61028b60006105d2565b565b600080610803905060008061080373ffffffffffffffffffffffffffffffffffffffff16637444dadc60e01b866040516024016102ca91906109f8565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610334919061095a565b6000604051808303816000865af19150503d8060008114610371576040519150601f19603f3d011682016040523d82523d6000602084013e610376565b606091505b5091509150816103bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b2906109d8565b60405180910390fd5b6000818060200190518101906103d19190610877565b9050809450505050919050565b6103e7610591565b60006108039050600061080373ffffffffffffffffffffffffffffffffffffffff1663b38e0bbe60e01b8585604051602401610424929190610a13565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161048e919061095a565b6000604051808303816000865af19150503d80600081146104cb576040519150601f19603f3d011682016040523d82523d6000602084013e6104d0565b606091505b5050905080610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050b906109d8565b60405180910390fd5b50505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61054b610591565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561058557600080fd5b61058e816105d2565b50565b3373ffffffffffffffffffffffffffffffffffffffff166105b061051a56b73ffffffffffffffffffffffffffffffffffffffff16146105d057600080fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006106a96106a484610a7c565b610a57565b9050828152602081018484840111156106c157600080fd5b6106cc848285610b39565b509392505050565b6000813590506106e381610c15565b92915050565b600082601f8301126106fa57600080fd5b813561070a848260208601610696565b91505092915050565b60008135905061072281610c2c565b92915050565b60008135905061073781610c43565b92915050565b60008151905061074c81610c43565b92915050565b60006020828403121561076457600080fd5b6000610772848285016106d4565b91505092915050565b60008060006060848603121561079057600080fd5b600084013567ffffffffffffffff8111156107aa57600080fd5b6107b6868287016106e9565b935050602084013567ffffffffffffffff8111156107d357600080fd5b6107df868287016106e9565b925050604084013567ffffffffffffffff8111156107fc57600080fd5b610808868287016106e9565b9150509250925092565b60006020828403121561082457600080fd5b600061083284828501610713565b91505092915050565b6000806040838503121561084e57600080fd5b600061085c85828601610713565b925050602061086d85828601610728565b9150509250929050565b60006020828403121561088957600080fd5b60006108978482850161073d565b91505092915050565b6108a981610ae5565b82525050565b60006108ba82610aad565b6108c48185610ab8565b93506108d4818560208601610b48565b6108dd81610bdb565b840191505092915050565b60006108f382610aad565b6108fd8185610ac9565b935061090d818560208601610b48565b80840191505092915050565b6000610926601283610ad4565b915061093182610bec565b602082019050919050565b61094581610af7565b82525050565b61095481610b25565b82525050565b600061096682846108e8565b915081905092915050565b600060208201905061098660008301846108a0565b92915050565b600060608201905081810360008301526109a681866108af565b905081810360208301526109ba81856108af565b905081810360408301526109ce81846108af565b9050949350505050565b60006020820190506109f181610919565b9050919050565b6000602082019050610a0d600083018461093c565b92915050565b6000604082019050610a28600083018561093c565b610a35602083018461094b565b9392505050565b6000602082019050610a51600083018461094b565b92915050565b6000610a61610a72565b9050610a6d8282610b7b565b919050565b6000604051905090565b600067ffffffffffffffff821115610a9757610a96610bac565b5b610aa082610bdb565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610af082610b05565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610b66578082015181840152602081019050610b4b565b83811115610b75576000848401525b50505050565b610b8482610bdb565b810181811067ffffffffffffffff82111715610ba357610ba2610bac565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f5375626e65742063616c6c206661696c65640000000000000000000000000000600082015250565b610c1e81610ae5565b8114610c2957600080fd5b50565b610c3581610af7565b8114610c4057600080fd5b50565b610c4c81610b25565b8114610c5757600080fd5b5056fea26469706673582212200e657685be0d4a155c28ec7471273753d1c625c562f268b2efdf0a8b2c7e4dbe64736f6c63430008030033";

// Create a signer
const privateKey = ethPrivateKey; // DO NOT HARDCODE YOUR PRIVATE KEY IN PRODUCTION
const signer = new ethers.Wallet(privateKey, provider);

async function createSubnetGetSetParameter() {
  try {
    // Substrate ss58 address that will receive the transfer
    const wsProvider = new WsProvider(wsUrl);
    const api = await ApiPromise.create({ provider: wsProvider });
    const keyring = new Keyring({ type: "sr25519" });
    const account = keyring.addFromUri(subSeed); // Your Substrate address private key/seed

    // Destination address can be replaced with any ss58 address here:
    const destinationAddress = account.address;

    // Get the substrate address public key
    const pubk = decodeAddress(destinationAddress);
    const hex = Array.from(pubk, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");

    const signer = new ethers.Wallet(ethPrivateKey, provider);

    const ss58mirror = convertH160ToSS58(signer.address);
    let txSudoSetBalance = api.tx.sudo.sudo(
      api.tx.balances.forceSetBalance(ss58mirror, BigInt(1e18).toString())
    );
    await sendTransaction(api, txSudoSetBalance, account);

    const txSudoSetWhitelist = api.tx.sudo.sudo(
      api.tx.evm.setWhitelist([signer.address])
    );

    await sendTransaction(api, txSudoSetWhitelist, account);

    const contractFactory = new ethers.ContractFactory(
      subnet_contract_abi,
      subnet_contract_bytecode,
      signer
    );

    const subnet_contract = await contractFactory.deploy(signer.address);
    await subnet_contract.waitForDeployment();

    console.log("deployed contract address: ", subnet_contract.target);

    txSudoSetBalance = api.tx.sudo.sudo(
      api.tx.balances.forceSetBalance(
        convertH160ToSS58(subnet_contract.target),
        BigInt(1e16).toString()
      )
    );
    await sendTransaction(api, txSudoSetBalance, account);

    let totalNetwork = Number(await api.query.subtensorModule.totalNetworks());
    console.log("total networks is ", totalNetwork);

    // there are predefined network 0 and 3.
    let netuid;
    if (totalNetwork > 3) {
      netuid = totalNetwork;
    } else {
      netuid = totalNetwork - 1;
    }

    const encoder = new TextEncoder();

    let tx = await subnet_contract.registerNetwork(
      encoder.encode("name"),
      encoder.encode("repo"),
      encoder.encode("contact")
    );
    await tx.wait();

    // the network owner is the deployed contract, not the signer
    const networkOwner = (
      await api.query.subtensorModule.subnetOwner(netuid)
    ).toHuman();
    console.log("networkOwner is ", networkOwner);

    // Note: This example uses setHyperParameter which calls setServingRateLimit
    // Some other functions like setMinBurn, setMaxBurn, setWeightsSetRateLimit are deprecated
    tx = await subnet_contract.setHyperParameter(netuid, 255);
    await tx.wait();

    // get parameter from chain
    let parameter = Number(
      await api.query.subtensorModule.servingRateLimit(netuid)
    );

    assert(parameter == 255);

    // get paramter from contract
    parameter = await subnet_contract.getHyperParameter(netuid);

    // check total networks after registration
    console.log(
      "total networks is ",
      (await api.query.subtensorModule.totalNetworks()).toHuman()
    );

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(0);
  }
}

async function main() {
  await createSubnetGetSetParameter();
}

main().catch(console.error);

```
### Solidity
```sol
// SPDX-License-Identifier: GPL-3.0
//
// This example demonstrates calling of ISubnet precompile
// from another smart contract

pragma solidity ^0.8.3;
import "@openzeppelin/contracts/access/Ownable.sol";

address constant ISUBTENSOR_SUBNET_ADDRESS = 0x0000000000000000000000000000000000000803;

interface ISubnet {
    /// Registers a new network without specifying details.
    // function registerNetwork() external payable;
    /// Registers a new network with specified subnet name, GitHub repository, and contact information.
    function registerNetwork(
        bytes memory subnetName,
        bytes memory githubRepo,
        bytes memory subnetContact
    ) external payable;

    function getServingRateLimit(uint16 netuid) external view returns (uint64);

    function setServingRateLimit(
        uint16 netuid,
        uint64 servingRateLimit
    ) external payable;
}

contract Subnet is Ownable {
    constructor(address initialOwner) Ownable(initialOwner) {}

    function registerNetwork(
        bytes memory subnetName,
        bytes memory githubRepo,
        bytes memory subnetContact
    ) external payable onlyOwner {
        ISubnet subnetPrecompile = ISubnet(ISUBTENSOR_SUBNET_ADDRESS);
        (bool success, ) = ISUBTENSOR_SUBNET_ADDRESS.call{value: msg.value}(
            abi.encodeWithSelector(
                subnetPrecompile.registerNetwork.selector,
                subnetName,
                githubRepo,
                subnetContact
            )
        );
        require(success, "Subnet call failed");
    }

    function setHyperParameter(
        uint16 netuid,
        uint64 value
    ) external payable onlyOwner {
        ISubnet subnetPrecompile = ISubnet(ISUBTENSOR_SUBNET_ADDRESS);
        (bool success, ) = ISUBTENSOR_SUBNET_ADDRESS.call(
            abi.encodeWithSelector(
                subnetPrecompile.setServingRateLimit.selector,
                netuid,
                value
            )
        );
        require(success, "Subnet call failed");
    }

    function getHyperParameter(uint16 netuid) public returns (uint64) {
        ISubnet subnetPrecompile = ISubnet(ISUBTENSOR_SUBNET_ADDRESS);
        (bool success, bytes memory data) = ISUBTENSOR_SUBNET_ADDRESS.call(
            abi.encodeWithSelector(
                subnetPrecompile.getServingRateLimit.selector,
                netuid
            )
        );
        require(success, "Subnet call failed");

        uint64 value = abi.decode(data, (uint64));
        return value;
    }
}

```
