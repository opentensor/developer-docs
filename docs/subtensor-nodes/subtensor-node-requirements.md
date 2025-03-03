---
title: "Subtensor Node Requirements"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Subtensor Node Requirements

To run a public subtensor, make sure that your computer satisfies the following system requirements: 

- Currently only x86_64 Linux architecture and macOS arm64 (Apple Silicon) are supported. 
- Subtensor requires 4 CPU cores and 16GB RAM to run. More resources may be required based on utilization.

## Linux x86_64

Requirements:

- Linux kernel 2.6.32+.
- glibc 2.11+.

## macOS arm64 (Apple Silicon)

Requirements:

- macOS 11+ (Big Sur+) for Apple Silicon (M1, M2, and later) with arm64 architecture support.

## Storage requirements

- **Lite node**: 128 GB is sufficient.
- **Archive node**: Minimum 2 TB for the current size of the chain, as of block # 5029000 on 28 Feb 2025.


## Network requirements and port settings

After you install the subtensor as per the below instructions, make sure that you open network ports on your subtensor node. This will allow other peer subtensor nodes to connect to your subtensor node. 

- Your subtensor node must have access to the public internet.
- Your subtensor node runs in an IPv4 network.

### Port settings

Make sure that your subtensor node listens on the following ports:

- `9944` - Websocket. This port is used by Bittensor. This port only accepts connections from ``localhost``. Make sure this port is firewalled **off** from the public internet domain.
- `9933` - RPC. This port should be opened but it is not used.
- `30333` - p2p socket. This port should accept connections from other subtensor nodes on the internet. Make sure your firewall **allows** incoming traffic to this port.
- We assume that your default outgoing traffic policy is `ACCEPT`. If not, make sure that outbound traffic on port 30333 is allowed.

