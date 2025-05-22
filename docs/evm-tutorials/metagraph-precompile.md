---
title: "Metagraph Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Metagraph Precompile

The metagraph precompile allows you to query information about neurons, their relationships, and network state in the Bittensor network. This precompile provides read-only access to the metagraph data through smart contracts.

## Precompile Address

The metagraph precompile is available at address `0x802` (2050 in decimal).

## Available Functions

### Network Statistics

#### `getUidCount(uint16 netuid) returns (uint16)`
Get the total number of UIDs (neurons) in a subnet.

```solidity
function getUidCount(uint16 netuid) external view returns (uint16);
```

### Neuron Information

#### `getStake(uint16 netuid, uint16 uid) returns (uint64)`
Get the total stake of a neuron in a subnet.

```solidity
function getStake(uint16 netuid, uint16 uid) external view returns (uint64);
```

#### `getRank(uint16 netuid, uint16 uid) returns (uint16)`
Get the rank of a neuron in a subnet.

```solidity
function getRank(uint16 netuid, uint16 uid) external view returns (uint16);
```

#### `getTrust(uint16 netuid, uint16 uid) returns (uint16)`
Get the trust score of a neuron in a subnet.

```solidity
function getTrust(uint16 netuid, uint16 uid) external view returns (uint16);
```

#### `getConsensus(uint16 netuid, uint16 uid) returns (uint16)`
Get the consensus score of a neuron in a subnet.

```solidity
function getConsensus(uint16 netuid, uint16 uid) external view returns (uint16);
```

#### `getIncentive(uint16 netuid, uint16 uid) returns (uint16)`
Get the incentive score of a neuron in a subnet.

```solidity
function getIncentive(uint16 netuid, uint16 uid) external view returns (uint16);
```

#### `getDividends(uint16 netuid, uint16 uid) returns (uint16)`
Get the dividends of a neuron in a subnet.

```solidity
function getDividends(uint16 netuid, uint16 uid) external view returns (uint16);
```

#### `getEmission(uint16 netuid, uint16 uid) returns (uint64)`
Get the emission of a neuron in a subnet.

```solidity
function getEmission(uint16 netuid, uint16 uid) external view returns (uint64);
```

#### `getVtrust(uint16 netuid, uint16 uid) returns (uint16)`
Get the validator trust score of a neuron in a subnet.

```solidity
function getVtrust(uint16 netuid, uint16 uid) external view returns (uint16);
```

### Neuron Status

#### `getValidatorStatus(uint16 netuid, uint16 uid) returns (bool)`
Check if a neuron is a validator in a subnet.

```solidity
function getValidatorStatus(uint16 netuid, uint16 uid) external view returns (bool);
```

#### `getLastUpdate(uint16 netuid, uint16 uid) returns (uint64)`
Get the timestamp of the last update for a neuron in a subnet.

```solidity
function getLastUpdate(uint16 netuid, uint16 uid) external view returns (uint64);
```

#### `getIsActive(uint16 netuid, uint16 uid) returns (bool)`
Check if a neuron is active in a subnet.

```solidity
function getIsActive(uint16 netuid, uint16 uid) external view returns (bool);
```

### Neuron Keys

#### `getHotkey(uint16 netuid, uint16 uid) returns (bytes32)`
Get the hotkey of a neuron in a subnet.

```solidity
function getHotkey(uint16 netuid, uint16 uid) external view returns (bytes32);
```

#### `getColdkey(uint16 netuid, uint16 uid) returns (bytes32)`
Get the coldkey of a neuron in a subnet.

```solidity
function getColdkey(uint16 netuid, uint16 uid) external view returns (bytes32);
```

### Axon Information

#### `getAxon(uint16 netuid, uint16 uid) returns (AxonInfo)`
Get the axon information of a neuron in a subnet.

```solidity
struct AxonInfo {
    uint64 block;
    uint32 version;
    uint128 ip;
    uint16 port;
    uint8 ip_type;
    uint8 protocol;
}

function getAxon(uint16 netuid, uint16 uid) external view returns (AxonInfo);
```

## Example Usage

Here's an example of how to use the metagraph precompile in a smart contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMetagraphPrecompile {
    struct AxonInfo {
        uint64 block;
        uint32 version;
        uint128 ip;
        uint16 port;
        uint8 ip_type;
        uint8 protocol;
    }

    function getUidCount(uint16 netuid) external view returns (uint16);
    function getStake(uint16 netuid, uint16 uid) external view returns (uint64);
    function getRank(uint16 netuid, uint16 uid) external view returns (uint16);
    function getHotkey(uint16 netuid, uint16 uid) external view returns (bytes32);
    function getAxon(uint16 netuid, uint16 uid) external view returns (AxonInfo);
}

contract MetagraphQuerier {
    address constant METAGRAPH_PRECOMPILE = 0x802;
    IMetagraphPrecompile metagraph = IMetagraphPrecompile(METAGRAPH_PRECOMPILE);

    function getNeuronInfo(uint16 netuid, uint16 uid) external view returns (
        uint64 stake,
        uint16 rank,
        bytes32 hotkey,
        IMetagraphPrecompile.AxonInfo memory axon
    ) {
        stake = metagraph.getStake(netuid, uid);
        rank = metagraph.getRank(netuid, uid);
        hotkey = metagraph.getHotkey(netuid, uid);
        axon = metagraph.getAxon(netuid, uid);
    }

    function getNetworkStats(uint16 netuid) external view returns (uint16 totalNeurons) {
        totalNeurons = metagraph.getUidCount(netuid);
    }
}
```

## Important Notes

1. All functions in the metagraph precompile are view functions and do not modify state.
2. The precompile provides read-only access to the metagraph data.
3. All queries are specific to a subnet identified by its `netuid`.
4. The `uid` parameter must be valid for the specified subnet.
5. Some functions may return default values or revert if the neuron is not found.

## Next Steps

- Learn about [staking operations](/evm-tutorials/staking-precompile)
- Understand [subnet management](/evm-tutorials/subnet-precompile)
- Explore [neuron operations](/evm-tutorials/neuron-precompile) 