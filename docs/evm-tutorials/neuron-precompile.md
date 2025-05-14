---
title: "Neuron Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Neuron Precompile

The neuron precompile allows you to interact with neuron operations on the Bittensor network through smart contracts. This precompile provides functionality for setting weights, registering neurons, and serving axons.

## Precompile Address

The neuron precompile is available at address `0x804` (2052 in decimal).

## Available Functions

### Weight Management

#### `setWeights(uint16 netuid, uint16[] dests, uint16[] weights, uint64 version_key)`
Set weights for multiple destination neurons in a subnet. This is a payable function.

```solidity
function setWeights(
    uint16 netuid,
    uint16[] dests,
    uint16[] weights,
    uint64 version_key
) external payable;
```

#### `commitWeights(uint16 netuid, bytes32 commit_hash)`
Commit weights for a subnet using a hash. This is a payable function.

```solidity
function commitWeights(uint16 netuid, bytes32 commit_hash) external payable;
```

#### `revealWeights(uint16 netuid, uint16[] uids, uint16[] values, uint16[] salt, uint64 version_key)`
Reveal previously committed weights for a subnet. This is a payable function.

```solidity
function revealWeights(
    uint16 netuid,
    uint16[] uids,
    uint16[] values,
    uint16[] salt,
    uint64 version_key
) external payable;
```

### Neuron Registration

#### `burnedRegister(uint16 netuid, bytes32 hotkey)`
Register a new neuron in a subnet by burning TAO. This is a payable function.

```solidity
function burnedRegister(uint16 netuid, bytes32 hotkey) external payable;
```

### Axon Serving

#### `serveAxon(uint16 netuid, uint32 version, uint128 ip, uint16 port, uint8 ip_type, uint8 protocol, uint8 placeholder1, uint8 placeholder2)`
Serve an axon for a neuron in a subnet. This is a payable function.

```solidity
function serveAxon(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ip_type,
    uint8 protocol,
    uint8 placeholder1,
    uint8 placeholder2
) external payable;
```

#### `serveAxonTls(uint16 netuid, uint32 version, uint128 ip, uint16 port, uint8 ip_type, uint8 protocol, uint8 placeholder1, uint8 placeholder2, bytes certificate)`
Serve a TLS-enabled axon for a neuron in a subnet. This is a payable function.

```solidity
function serveAxonTls(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ip_type,
    uint8 protocol,
    uint8 placeholder1,
    uint8 placeholder2,
    bytes certificate
) external payable;
```

#### `servePrometheus(uint16 netuid, uint32 version, uint128 ip, uint16 port, uint8 ip_type)`
Serve a Prometheus endpoint for a neuron in a subnet. This is a payable function.

```solidity
function servePrometheus(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ip_type
) external payable;
```

## Example Usage

Here's an example of how to use the neuron precompile in a smart contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INeuronPrecompile {
    function setWeights(
        uint16 netuid,
        uint16[] calldata dests,
        uint16[] calldata weights,
        uint64 version_key
    ) external payable;
    
    function burnedRegister(uint16 netuid, bytes32 hotkey) external payable;
    
    function serveAxon(
        uint16 netuid,
        uint32 version,
        uint128 ip,
        uint16 port,
        uint8 ip_type,
        uint8 protocol,
        uint8 placeholder1,
        uint8 placeholder2
    ) external payable;
}

contract NeuronManager {
    address constant NEURON_PRECOMPILE = 0x804;
    INeuronPrecompile neuron = INeuronPrecompile(NEURON_PRECOMPILE);

    function setNeuronWeights(
        uint16 netuid,
        uint16[] calldata dests,
        uint16[] calldata weights,
        uint64 version_key
    ) external payable {
        neuron.setWeights{value: msg.value}(netuid, dests, weights, version_key);
    }

    function registerNeuron(uint16 netuid, bytes32 hotkey) external payable {
        neuron.burnedRegister{value: msg.value}(netuid, hotkey);
    }

    function serveNeuronAxon(
        uint16 netuid,
        uint32 version,
        uint128 ip,
        uint16 port,
        uint8 ip_type,
        uint8 protocol
    ) external payable {
        neuron.serveAxon{value: msg.value}(
            netuid,
            version,
            ip,
            port,
            ip_type,
            protocol,
            0, // placeholder1
            0  // placeholder2
        );
    }
}
```

## Important Notes

1. Most functions in the neuron precompile are payable and require TAO to be sent with the transaction.
2. The `setWeights` function requires the `dests` and `weights` arrays to be of equal length.
3. The `revealWeights` function requires the `uids`, `values`, and `salt` arrays to be of equal length.
4. All operations are specific to a subnet identified by its `netuid`.
5. The `version_key` parameter is used to track different versions of weights.
6. The `ip_type` parameter in axon serving functions determines the type of IP address (IPv4 or IPv6).
7. The `protocol` parameter in axon serving functions determines the communication protocol.

## Next Steps

- Learn about [staking operations](/evm-tutorials/staking-precompile)
- Understand [subnet management](/evm-tutorials/subnet-precompile)
- Explore [metagraph interactions](/evm-tutorials/metagraph-precompile) 