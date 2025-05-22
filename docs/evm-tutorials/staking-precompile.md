---
title: "Staking Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking Precompile

The staking precompile allows you to interact with staking operations on the Bittensor network through smart contracts. This precompile provides functionality for adding and removing stakes, moving stakes between hotkeys, and querying stake information.

## Precompile Address

The staking precompile is available at address `0x805` (2053 in decimal).

## Available Functions

### Stake Management

#### `addStake(bytes32 hotkey, uint256 amount, uint256 netuid)`
Add stake to a hotkey in a specific subnet. This is a payable function that requires TAO to be sent with the transaction.

```solidity
function addStake(bytes32 hotkey, uint256 amount, uint256 netuid) external payable;
```

#### `removeStake(bytes32 hotkey, uint256 amount, uint256 netuid)`
Remove stake from a hotkey in a specific subnet.

```solidity
function removeStake(bytes32 hotkey, uint256 amount, uint256 netuid) external;
```

#### `moveStake(bytes32 origin_hotkey, bytes32 destination_hotkey, uint256 origin_netuid, uint256 destination_netuid, uint256 amount)`
Move stake from one hotkey to another, potentially across different subnets.

```solidity
function moveStake(
    bytes32 origin_hotkey,
    bytes32 destination_hotkey,
    uint256 origin_netuid,
    uint256 destination_netuid,
    uint256 amount
) external;
```

#### `transferStake(bytes32 destination_coldkey, bytes32 hotkey, uint256 origin_netuid, uint256 destination_netuid, uint256 amount)`
Transfer stake from one coldkey to another, potentially across different subnets.

```solidity
function transferStake(
    bytes32 destination_coldkey,
    bytes32 hotkey,
    uint256 origin_netuid,
    uint256 destination_netuid,
    uint256 amount
) external;
```

### Stake Queries

#### `getTotalColdkeyStake(bytes32 coldkey) returns (uint256)`
Get the total stake for a coldkey across all subnets.

```solidity
function getTotalColdkeyStake(bytes32 coldkey) external view returns (uint256);
```

#### `getTotalHotkeyStake(bytes32 hotkey) returns (uint256)`
Get the total stake for a hotkey across all subnets.

```solidity
function getTotalHotkeyStake(bytes32 hotkey) external view returns (uint256);
```

#### `getStake(bytes32 hotkey, bytes32 coldkey, uint256 netuid) returns (uint256)`
Get the stake between a specific hotkey and coldkey in a subnet.

```solidity
function getStake(bytes32 hotkey, bytes32 coldkey, uint256 netuid) external view returns (uint256);
```

#### `getTotalAlphaStaked(bytes32 hotkey, uint256 netuid) returns (uint256)`
Get the total amount of TAO staked by a hotkey in a specific subnet.

```solidity
function getTotalAlphaStaked(bytes32 hotkey, uint256 netuid) external view returns (uint256);
```

#### `getAlphaStakedValidators(bytes32 hotkey, uint256 netuid) returns (bytes32[])`
Get a list of validator addresses that have staked to a specific hotkey in a subnet.

```solidity
function getAlphaStakedValidators(bytes32 hotkey, uint256 netuid) external view returns (bytes32[]);
```

### Proxy Management

#### `addProxy(bytes32 delegate)`
Add a proxy delegate for staking operations.

```solidity
function addProxy(bytes32 delegate) external;
```

#### `removeProxy(bytes32 delegate)`
Remove a proxy delegate.

```solidity
function removeProxy(bytes32 delegate) external;
```

## Example Usage

Here's an example of how to use the staking precompile in a smart contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStakingPrecompile {
    function addStake(bytes32 hotkey, uint256 amount, uint256 netuid) external payable;
    function removeStake(bytes32 hotkey, uint256 amount, uint256 netuid) external;
    function getTotalColdkeyStake(bytes32 coldkey) external view returns (uint256);
    function getTotalHotkeyStake(bytes32 hotkey) external view returns (uint256);
    function getStake(bytes32 hotkey, bytes32 coldkey, uint256 netuid) external view returns (uint256);
    function getTotalAlphaStaked(bytes32 hotkey, uint256 netuid) external view returns (uint256);
    function getAlphaStakedValidators(bytes32 hotkey, uint256 netuid) external view returns (bytes32[]);
}

contract StakingManager {
    address constant STAKING_PRECOMPILE = 0x805;
    IStakingPrecompile staking = IStakingPrecompile(STAKING_PRECOMPILE);

    function addStakeToHotkey(bytes32 hotkey, uint256 amount, uint256 netuid) external payable {
        staking.addStake{value: msg.value}(hotkey, amount, netuid);
    }

    function getStakeInfo(bytes32 hotkey, bytes32 coldkey, uint256 netuid) external view returns (
        uint256 totalColdkeyStake,
        uint256 totalHotkeyStake,
        uint256 specificStake,
        uint256 totalAlphaStaked,
        bytes32[] memory validators
    ) {
        totalColdkeyStake = staking.getTotalColdkeyStake(coldkey);
        totalHotkeyStake = staking.getTotalHotkeyStake(hotkey);
        specificStake = staking.getStake(hotkey, coldkey, netuid);
        totalAlphaStaked = staking.getTotalAlphaStaked(hotkey, netuid);
        validators = staking.getAlphaStakedValidators(hotkey, netuid);
    }
}
```

## Important Notes

1. The `addStake` function is payable and requires TAO to be sent with the transaction.
2. All amounts are in RAO (1 TAO = 1e18 RAO).
3. The `netuid` parameter identifies the specific subnet for the operation.
4. Proxy operations require appropriate permissions.
5. Moving and transferring stakes may have additional restrictions based on network parameters.
6. Some functions may require specific permissions or conditions to be met.

## Next Steps

- Learn about [subnet management](/evm-tutorials/subnet-precompile)
- Understand [neuron operations](/evm-tutorials/neuron-precompile)
- Explore [metagraph interactions](/evm-tutorials/metagraph-precompile)

