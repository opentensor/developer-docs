---
title: "Metagraph Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Metagraph Precompile

The metagraph precompile allows you to query information about neurons, their relationships, and network state in the Bittensor network. This precompile provides read-only access to the metagraph data through smart contracts at precompile address `2050`.

## Overview

The metagraph precompile is a powerful tool that enables smart contracts to interact with the Bittensor network's metagraph data. It provides access to various metrics and information about neurons including stakes, ranks, trust scores, consensus values, and more.

All functions in this precompile are view-only operations that don't modify state and consume minimal gas.

## Function Reference

### Network Information

#### `getUidCount(uint16 netuid) → uint16`

Returns the total number of UIDs (neurons) in a specific subnetwork.

**Parameters:**
- `netuid` (uint16): The subnetwork ID to query

**Returns:**
- `uint16`: Total count of neurons in the subnetwork


### Token and Consensus Metrics

#### `getStake(uint16 netuid, uint16 uid) → uint64`

Retrieves the total stake amount for a specific neuron.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint64`: Total stake amount for the neuron's hotkey

**Errors:**
- Reverts with `InvalidRange` if the UID doesn't exist in the network

**Example:**
```solidity
// Get stake for neuron with UID 5 in subnetwork 1
uint64 stake = IMetagraph(METAGRAPH_PRECOMPILE).getStake(1, 5);
```

#### `getEmission(uint16 netuid, uint16 uid) → uint64`

Gets the emission value for a specific neuron, representing its reward allocation.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint64`: Emission value for the neuron

**Example:**
```solidity
// Get emission for neuron with UID 10 in subnetwork 1
uint64 emission = IMetagraph(METAGRAPH_PRECOMPILE).getEmission(1, 10);
```

#### `getRank(uint16 netuid, uint16 uid) → uint16`

Returns the rank score of a neuron, indicating its performance relative to others.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Rank score of the neuron

**Example:**
```solidity
// Get rank for neuron with UID 3 in subnetwork 1
uint16 rank = IMetagraph(METAGRAPH_PRECOMPILE).getRank(1, 3);
```

#### `getTrust(uint16 netuid, uint16 uid) → uint16`

Retrieves the trust score of a neuron, representing how much other neurons trust its outputs.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Trust score of the neuron

**Example:**
```solidity
// Get trust score for neuron with UID 7 in subnetwork 1
uint16 trust = IMetagraph(METAGRAPH_PRECOMPILE).getTrust(1, 7);
```

#### `getConsensus(uint16 netuid, uint16 uid) → uint16`

Gets the consensus score of a neuron, indicating agreement with network consensus.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Consensus score of the neuron

**Example:**
```solidity
// Get consensus score for neuron with UID 12 in subnetwork 1
uint16 consensus = IMetagraph(METAGRAPH_PRECOMPILE).getConsensus(1, 12);
```

#### `getIncentive(uint16 netuid, uint16 uid) → uint16`

Returns the incentive score of a neuron, representing its contribution to the network.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Incentive score of the neuron

**Example:**
```solidity
// Get incentive score for neuron with UID 8 in subnetwork 1
uint16 incentive = IMetagraph(METAGRAPH_PRECOMPILE).getIncentive(1, 8);
```

#### `getDividends(uint16 netuid, uint16 uid) → uint16`

Retrieves the dividends score of a neuron, indicating its reward distribution.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Dividends score of the neuron

**Example:**
```solidity
// Get dividends score for neuron with UID 15 in subnetwork 1
uint16 dividends = IMetagraph(METAGRAPH_PRECOMPILE).getDividends(1, 15);
```

### Validator-Specific Functions

#### `getVtrust(uint16 netuid, uint16 uid) → uint16`

Gets the validator trust score for a neuron, specific to validator operations.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint16`: Validator trust score

**Example:**
```solidity
// Get validator trust for neuron with UID 2 in subnetwork 1
uint16 vtrust = IMetagraph(METAGRAPH_PRECOMPILE).getVtrust(1, 2);
```

#### `getValidatorStatus(uint16 netuid, uint16 uid) → bool`

Checks if a neuron has validator permit status.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `bool`: True if the neuron has validator permissions, false otherwise

**Example:**
```solidity
// Check if neuron with UID 1 is a validator in subnetwork 1
bool isValidator = IMetagraph(METAGRAPH_PRECOMPILE).getValidatorStatus(1, 1);
```

### Neuron State Information

#### `getLastUpdate(uint16 netuid, uint16 uid) → uint64`

Returns the block number of the last update for a neuron.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `uint64`: Block number of the last update

**Example:**
```solidity
// Get last update block for neuron with UID 6 in subnetwork 1
uint64 lastUpdate = IMetagraph(METAGRAPH_PRECOMPILE).getLastUpdate(1, 6);
```

#### `getIsActive(uint16 netuid, uint16 uid) → bool`

Checks if a neuron is currently active in the network.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `bool`: True if the neuron is active, false otherwise

**Example:**
```solidity
// Check if neuron with UID 9 is active in subnetwork 1
bool isActive = IMetagraph(METAGRAPH_PRECOMPILE).getIsActive(1, 9);
```

### Network Connection Information

#### `getAxon(uint16 netuid, uint16 uid) → AxonInfo`

Retrieves the axon information for a neuron, including network connection details.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `AxonInfo`: Struct containing axon connection information

**AxonInfo Structure:**
```solidity
struct AxonInfo {
    uint64 block;      // Block number when axon was registered
    uint32 version;    // Protocol version
    uint128 ip;        // IP address (IPv4 or IPv6)
    uint16 port;       // Port number
    uint8 ip_type;     // IP type (4 for IPv4, 6 for IPv6)
    uint8 protocol;    // Protocol type
}
```

**Errors:**
- Reverts with "hotkey not found" if the neuron doesn't exist

**Example:**
```solidity
// Get axon info for neuron with UID 4 in subnetwork 1
IMetagraph.AxonInfo memory axon = IMetagraph(METAGRAPH_PRECOMPILE).getAxon(1, 4);
uint128 ip = axon.ip;
uint16 port = axon.port;
```

### Key Management

#### `getHotkey(uint16 netuid, uint16 uid) → bytes32`

Returns the hotkey (public key) associated with a neuron.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `bytes32`: The hotkey as a 32-byte hash

**Errors:**
- Reverts with `InvalidRange` if the UID doesn't exist

**Example:**
```solidity
// Get hotkey for neuron with UID 11 in subnetwork 1
bytes32 hotkey = IMetagraph(METAGRAPH_PRECOMPILE).getHotkey(1, 11);
```

#### `getColdkey(uint16 netuid, uint16 uid) → bytes32`

Returns the coldkey (owner key) associated with a neuron's hotkey.

**Parameters:**
- `netuid` (uint16): The subnetwork ID
- `uid` (uint16): The unique identifier of the neuron

**Returns:**
- `bytes32`: The coldkey as a 32-byte hash

**Errors:**
- Reverts with `InvalidRange` if the UID doesn't exist

**Example:**
```solidity
// Get coldkey for neuron with UID 13 in subnetwork 1
bytes32 coldkey = IMetagraph(METAGRAPH_PRECOMPILE).getColdkey(1, 13);
```



## Usage Examples

### Basic Neuron Information Query

```solidity
contract NeuronAnalyzer {
    IMetagraph constant METAGRAPH = IMetagraph(0x0000000000000000000000000000000000000802);
    
    function analyzeNeuron(uint16 netuid, uint16 uid) external view returns (
        uint64 stake,
        uint16 rank,
        uint16 trust,
        bool isActive,
        bool isValidator
    ) {
        stake = METAGRAPH.getStake(netuid, uid);
        rank = METAGRAPH.getRank(netuid, uid);
        trust = METAGRAPH.getTrust(netuid, uid);
        isActive = METAGRAPH.getIsActive(netuid, uid);
        isValidator = METAGRAPH.getValidatorStatus(netuid, uid);
    }
}
```

### Network Statistics

```solidity
contract NetworkStats {
    IMetagraph constant METAGRAPH = IMetagraph(0x0000000000000000000000000000000000000802);
    
    function getNetworkOverview(uint16 netuid) external view returns (
        uint16 totalNeurons,
        uint64 totalStake,
        uint16 activeNeurons
    ) {
        totalNeurons = METAGRAPH.getUidCount(netuid);
        
        for (uint16 i = 0; i < totalNeurons; i++) {
            totalStake += METAGRAPH.getStake(netuid, i);
            if (METAGRAPH.getIsActive(netuid, i)) {
                activeNeurons++;
            }
        }
    }
}
```

### Validator Tracking

```solidity
contract ValidatorTracker {
    IMetagraph constant METAGRAPH = IMetagraph(0x0000000000000000000000000000000000000802);
    
    function getValidators(uint16 netuid) external view returns (uint16[] memory) {
        uint16 totalNeurons = METAGRAPH.getUidCount(netuid);
        uint16[] memory validators = new uint16[](totalNeurons);
        uint16 validatorCount = 0;
        
        for (uint16 i = 0; i < totalNeurons; i++) {
            if (METAGRAPH.getValidatorStatus(netuid, i)) {
                validators[validatorCount] = i;
                validatorCount++;
            }
        }
        
        // Resize array to actual validator count
        assembly {
            mstore(validators, validatorCount)
        }
        
        return validators;
    }
}
```

## Error Handling

The metagraph precompile can throw the following errors:

- **InvalidRange**: Thrown when querying a UID that doesn't exist in the specified network
- **"hotkey not found"**: Thrown when trying to get axon information for a non-existent neuron
