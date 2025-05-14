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

### Network Registration

#### `registerNetwork(bytes32 hotkey)`
Register a new network with a hotkey. This is a payable function that requires TAO to be sent with the transaction.

```solidity
function registerNetwork(bytes32 hotkey) external payable;
```

#### `registerNetwork(bytes32 hotkey, string subnet_name, string github_repo, string subnet_contact, string subnet_url, string discord, string description, string additional)`
Register a new network with a hotkey and identity information. This is a payable function that requires TAO to be sent with the transaction.

```solidity
function registerNetwork(
    bytes32 hotkey,
    string subnet_name,
    string github_repo,
    string subnet_contact,
    string subnet_url,
    string discord,
    string description,
    string additional
) external payable;
```

### Network Parameters

The subnet precompile provides getter and setter functions for various network parameters:

#### Rate Limits
- `getServingRateLimit(uint16 netuid) returns (uint64)`
- `setServingRateLimit(uint16 netuid, uint64 serving_rate_limit)`

#### Difficulty Settings
- `getMinDifficulty(uint16 netuid) returns (uint64)`
- `setMinDifficulty(uint16 netuid, uint64 min_difficulty)`
- `getMaxDifficulty(uint16 netuid) returns (uint64)`
- `setMaxDifficulty(uint16 netuid, uint64 max_difficulty)`
- `getDifficulty(uint16 netuid) returns (uint64)`
- `setDifficulty(uint16 netuid, uint64 difficulty)`

#### Weights Management
- `getWeightsVersionKey(uint16 netuid) returns (uint64)`
- `setWeightsVersionKey(uint16 netuid, uint64 weights_version_key)`
- `getWeightsSetRateLimit(uint16 netuid) returns (uint64)`
- `setWeightsSetRateLimit(uint16 netuid, uint64 weights_set_rate_limit)`
- `getMaxWeightLimit(uint16 netuid) returns (uint16)`
- `setMaxWeightLimit(uint16 netuid, uint16 max_weight_limit)`
- `getMinAllowedWeights(uint16 netuid) returns (uint16)`
- `setMinAllowedWeights(uint16 netuid, uint16 min_allowed_weights)`

#### Network Settings
- `getImmunityPeriod(uint16 netuid) returns (uint16)`
- `setImmunityPeriod(uint16 netuid, uint16 immunity_period)`
- `getKappa(uint16 netuid) returns (uint16)`
- `setKappa(uint16 netuid, uint16 kappa)`
- `getRho(uint16 netuid) returns (uint16)`
- `setRho(uint16 netuid, uint16 rho)`
- `getActivityCutoff(uint16 netuid) returns (uint16)`
- `setActivityCutoff(uint16 netuid, uint16 activity_cutoff)`

#### Registration Settings
- `getNetworkRegistrationAllowed(uint16 netuid) returns (bool)`
- `setNetworkRegistrationAllowed(uint16 netuid, bool registration_allowed)`
- `getNetworkPowRegistrationAllowed(uint16 netuid) returns (bool)`
- `setNetworkPowRegistrationAllowed(uint16 netuid, bool registration_allowed)`

#### Burn Settings
- `getMinBurn(uint16 netuid) returns (uint64)`
- `setMinBurn(uint16 netuid, uint64 min_burn)`
- `getMaxBurn(uint16 netuid) returns (uint64)`
- `setMaxBurn(uint16 netuid, uint64 max_burn)`

#### Bonds and Alpha Settings
- `getBondsMovingAverage(uint16 netuid) returns (uint64)`
- `setBondsMovingAverage(uint16 netuid, uint64 bonds_moving_average)`
- `getAlphaValues(uint16 netuid) returns (uint16, uint16)`
- `setAlphaValues(uint16 netuid, uint16 alpha_low, uint16 alpha_high)`

#### Commit-Reveal Settings
- `getCommitRevealWeightsEnabled(uint16 netuid) returns (bool)`
- `setCommitRevealWeightsEnabled(uint16 netuid, bool enabled)`
- `getCommitRevealWeightsInterval(uint16 netuid) returns (uint64)`
- `setCommitRevealWeightsInterval(uint16 netuid, uint64 interval)`

#### Liquid Alpha Settings
- `getLiquidAlphaEnabled(uint16 netuid) returns (bool)`
- `setLiquidAlphaEnabled(uint16 netuid, bool enabled)`

#### Transfer Settings
- `toggleTransfers(uint16 netuid, bool toggle)`

## Example Usage

Here's an example of how to use the subnet precompile in a smart contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISubnetPrecompile {
    function registerNetwork(bytes32 hotkey) external payable;
    function getDifficulty(uint16 netuid) external view returns (uint64);
    function setDifficulty(uint16 netuid, uint64 difficulty) external;
}

contract SubnetManager {
    address constant SUBNET_PRECOMPILE = 0x803;
    ISubnetPrecompile subnet = ISubnetPrecompile(SUBNET_PRECOMPILE);

    function registerNewNetwork(bytes32 hotkey) external payable {
        subnet.registerNetwork{value: msg.value}(hotkey);
    }

    function getNetworkDifficulty(uint16 netuid) external view returns (uint64) {
        return subnet.getDifficulty(netuid);
    }

    function updateNetworkDifficulty(uint16 netuid, uint64 newDifficulty) external {
        subnet.setDifficulty(netuid, newDifficulty);
    }
}
```

## Important Notes

1. Most setter functions require admin privileges to execute.
2. The `registerNetwork` functions are payable and require TAO to be sent with the transaction.
3. All network parameters are specific to a subnet identified by its `netuid`.
4. Some functions may be restricted based on network permissions and governance settings.

## Next Steps

- Learn about [staking operations](/evm-tutorials/staking-precompile)
- Understand [neuron management](/evm-tutorials/neuron-precompile)
- Explore [metagraph interactions](/evm-tutorials/metagraph-precompile) 