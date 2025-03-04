---
title: "Subnet Creator's Guide to `BTCLI`"
---

# Subnet Creator's Guide to `BTCLI`

Subnet creators define and manage new subnets, specifying parameters like burn cost, hyperparameters, or other chain-level configurations. This role inherently requires a **coldkey** with sufficient balance/permissions to create or update subnets. 

This page discusses btcli stuff specifically for Subnet Creators. For general coverage of BTCLI and permissions stuff, see: [Bittensor CLI: Permissions Guide](../btcli-permissions)


**Subnet Creator Requirements:**
- to create a new subnet
- to sudo on your own subnet

**Commands most relevant to subnet creators:**
- **Subnet Creation / Configuration** (all require **coldkey** in a secure environment to sign on-chain transactions):
  - `btcli subnets create`
  - `btcli subnets hyperparameters`
  - `btcli subnets burn-cost` / `btcli subnets burn_cost`
  - `btcli subnets price`
  - `btcli subnets set` (some advanced usage might come in via `sudo` or governance commands)
  - Similarly, short forms like `btcli s create`, `btcli s burn-cost`, `btcli subnet create`, etc. 
- **Reads** (permissionless in many cases):
  - `btcli subnets list`, `btcli subnets show`, `btcli subnets metagraph`
  - The short forms `btcli s list`, `btcli s show`, `btcli subnet list`, and so on.  

The core difference is that *creating* or *altering* a subnet’s parameters requires a secure environment and a coldkey that has enough TAO and the appropriate on-chain privileges.