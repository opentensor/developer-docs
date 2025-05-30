---
title: "Neuron Precompile"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Neuron Precompile


This precompile enables full management of neurons (miner and validator nodes) through smart contracts, from registration to weight setting to service configuration. 

See [Understanding Neurons](../learn/neurons.md).


:::info
Payable functions require tokens for execution
:::


## Precompile Address

The neuron precompile is available at address `0x804` (2052 in decimal).

## Available Functions

The neuron precompile provides the following core functions for neuron management:

### Weight Management

#### `setWeights`
Set weights (rankings) for miners on the subnet. See [Requirements for validation](../validators/#requirements-for-validation)

**Function Signature:**
```solidity
function setWeights(
    uint16 netuid,
    uint16[] memory dests,
    uint16[] memory weights,
    uint64 versionKey
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is registered
- `dests` (uint16[]): Array of destination neuron UIDs to assign weights to
- `weights` (uint16[]): Array of weight values corresponding to each destination UID
- `versionKey` (uint64): Version key for weight compatibility and validation

**Description:**
This function allows a neuron to set weights on other neurons in the same subnet. The weights represent how much value or trust this neuron assigns to others, which is crucial for the Bittensor consensus mechanism.

#### `commitWeights`
Commits weights using a hash commitment scheme for privacy and security.

**Function Signature:**
```solidity
function commitWeights(
    uint16 netuid,
    bytes32 commitHash
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is registered
- `commitHash` (bytes32): Hash commitment of the weights to be revealed later

**Description:**
This function implements a commit-reveal scheme for setting weights. The neuron first commits a hash of their weights, then later reveals the actual weights. This prevents front-running and manipulation of the weight-setting process.

#### `revealWeights`
Reveals previously committed weights by providing the original data that produces the committed hash.

**Function Signature:**
```solidity
function revealWeights(
    uint16 netuid,
    uint16[] memory uids,
    uint16[] memory values,
    uint16[] memory salt,
    uint64 versionKey
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is registered
- `uids` (uint16[]): Array of neuron UIDs that weights are being set for
- `values` (uint16[]): Array of weight values for each corresponding UID
- `salt` (uint16[]): Salt values used in the original hash commitment
- `versionKey` (uint64): Version key for weight compatibility

**Description:**
This function completes the commit-reveal process by revealing the actual weights that were previously committed. The provided data must hash to the previously committed hash for the transaction to succeed.

### Neuron Registration

Neuron registration is the process of joining a subnet and becoming part of the neural network structure described in [Understanding Neurons](../learn/neurons.md).

#### `burnedRegister`
Registers a neuron in a subnet by burning TAO tokens.

**Function Signature:**
```solidity
function burnedRegister(
    uint16 netuid,
    bytes32 hotkey
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID to register the neuron in
- `hotkey` (bytes32): The hotkey public key (32 bytes) of the neuron to register

**Description:**
This function registers a new neuron in the specified subnet by burning a certain amount of TAO tokens. The amount burned depends on the current network conditions and subnet parameters. The hotkey represents the neuron's identity on the network.

### Axon Services

#### `serveAxon`
Configures and serves an axon endpoint for the neuron.

**Function Signature:**
```solidity
function serveAxon(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ipType,
    uint8 protocol,
    uint8 placeholder1,
    uint8 placeholder2
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is serving
- `version` (uint32): Version of the axon service
- `ip` (uint128): IP address of the axon service (supports both IPv4 and IPv6)
- `port` (uint16): Port number where the axon is listening
- `ipType` (uint8): Type of IP address (4 for IPv4, 6 for IPv6)
- `protocol` (uint8): Network protocol identifier
- `placeholder1` (uint8): Reserved for future use
- `placeholder2` (uint8): Reserved for future use

**Description:**
This function allows a neuron to announce its axon service endpoint to the network. An axon is the service interface that other neurons can connect to for communication and inference requests using the dendrite-axon protocol.

#### `serveAxonTls`
Configures and serves an axon endpoint with TLS/SSL security.

**Function Signature:**
```solidity
function serveAxonTls(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ipType,
    uint8 protocol,
    uint8 placeholder1,
    uint8 placeholder2,
    bytes memory certificate
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is serving
- `version` (uint32): Version of the axon service
- `ip` (uint128): IP address of the axon service
- `port` (uint16): Port number where the axon is listening
- `ipType` (uint8): Type of IP address (4 for IPv4, 6 for IPv6)
- `protocol` (uint8): Network protocol identifier
- `placeholder1` (uint8): Reserved for future use
- `placeholder2` (uint8): Reserved for future use
- `certificate` (bytes): TLS/SSL certificate data for secure connections

**Description:**
Similar to `serveAxon`, but includes TLS certificate information for secure encrypted communication. This is recommended for production environments where data privacy and security are important.

#### `servePrometheus`
Configures a Prometheus metrics endpoint for the neuron.

**Function Signature:**
```solidity
function servePrometheus(
    uint16 netuid,
    uint32 version,
    uint128 ip,
    uint16 port,
    uint8 ipType
) external payable
```

**Parameters:**
- `netuid` (uint16): The subnet ID where the neuron is serving
- `version` (uint32): Version of the Prometheus service
- `ip` (uint128): IP address where Prometheus metrics are served
- `port` (uint16): Port number for the Prometheus endpoint
- `ipType` (uint8): Type of IP address (4 for IPv4, 6 for IPv6)

**Description:**
This function allows a neuron to expose a Prometheus metrics endpoint for monitoring and observability. Prometheus metrics can include performance data, request counts, and other operational metrics.

## Usage Examples

### Setting Weights Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INeuron {
    function setWeights(
        uint16 netuid,
        uint16[] memory dests,
        uint16[] memory weights,
        uint64 versionKey
    ) external payable;
}

contract WeightSetter {
    address constant NEURON_PRECOMPILE = 0x0000000000000000000000000000000000000804;
    
    function setMyWeights() external {
        uint16 netuid = 1; // Subnet ID
        uint16[] memory dests = new uint16[](3);
        dests[0] = 0; // UID 0
        dests[1] = 1; // UID 1
        dests[2] = 2; // UID 2
        
        uint16[] memory weights = new uint16[](3);
        weights[0] = 100; // Weight for UID 0
        weights[1] = 200; // Weight for UID 1
        weights[2] = 150; // Weight for UID 2
        
        uint64 versionKey = 1;
        
        INeuron(NEURON_PRECOMPILE).setWeights(netuid, dests, weights, versionKey);
    }
}
```

### Registering a Neuron Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INeuron {
    function burnedRegister(uint16 netuid, bytes32 hotkey) external payable;
}

contract NeuronRegistrar {
    address constant NEURON_PRECOMPILE = 0x0000000000000000000000000000000000000804;
    
    function registerNeuron(uint16 subnetId, bytes32 hotkeyPubkey) external payable {
        INeuron(NEURON_PRECOMPILE).burnedRegister{value: msg.value}(subnetId, hotkeyPubkey);
    }
}
```

### Serving an Axon Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INeuron {
    function serveAxon(
        uint16 netuid,
        uint32 version,
        uint128 ip,
        uint16 port,
        uint8 ipType,
        uint8 protocol,
        uint8 placeholder1,
        uint8 placeholder2
    ) external payable;
}

contract AxonService {
    address constant NEURON_PRECOMPILE = 0x0000000000000000000000000000000000000804;
    
    function startAxonService() external {
        uint16 netuid = 1;
        uint32 version = 1;
        uint128 ip = uint128(0x7f000001); // 127.0.0.1 in hex
        uint16 port = 8080;
        uint8 ipType = 4; // IPv4
        uint8 protocol = 1;
        uint8 placeholder1 = 0;
        uint8 placeholder2 = 0;
        
        INeuron(NEURON_PRECOMPILE).serveAxon(
            netuid, version, ip, port, ipType, protocol, placeholder1, placeholder2
        );
    }
}
```
