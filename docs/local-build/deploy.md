---
title: "Build and Deploy the Blockchain"
---

# Deploy a Local Bittensor Blockchain Instance

This will will guide the user through deploying a local instance of Subtensor, Bittensor's L1 blockchain. This is useful in general Bittensor develoment, as it gives you more freedom over chain state than when working against mainnet or even testnet. For example, it is much easier to create subnets without having to wait for registration availability.

Each local chain is provisioned with an `alice` account with one million $\tau$.

In the following tutorial, we will also provision several wallets to serve as subnet creator, miner, and validator.

## Prerequisites

- Update your mac or linux workstation using your package manager
- Install [Bittensor SDK](../getting-started/installation) and [BTCLI](../getting-started/install-btcli)


## Build your local Subtensor
### Install Rust/Cargo

To run locally, Substrate requires an up-to-date install of Cargo and Rust

Install from Rust's website:
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
Update your shell's source to include Cargo's path:

```shell
source "$HOME/.cargo/env"
```

### Clone and tweak the Subtensor source

We well clone the source and make a small modification to the state configuration with which the chain is deployed.

Normally, the creation of new subnets is limited to one per day. This is inconvenient for local subnet development, so we will limit this restriction.



1. Fetch the subtensor codebase to your local machine.

  ```bash
  git clone https://github.com/opentensor/subtensor.git
  ```

1. Open the source file `subtensor/runtime/src/lib.rs` in the your editor of choice, and find where the variable `SubtensorInitialNetworkRateLimit` is set. It is normally configured to 7200, which is the number of blocks per day written to the chain, i.e. the seconds in a day divided by 12, since a Subtensor block is written every twelve seconds.

In otherwords, this setting limits the number of new subnets that can be created to one per day. Let's change the value to 1 (block), so we can create a new subnet every 12 seconds if we want to.


### Setup Rust

This step ensures that you have the nightly toolchain and the WebAssembly (wasm) compilation target. Note that this step will run the Subtensor chain on your terminal directly, hence we advise that you run this as a background process using PM2 or other software.

Update to the nightly version of Rust:

```bash
./subtensor/scripts/init.sh
```

### Build

These steps initialize your local subtensor chain in development mode. These commands will set up and run a local subtensor.

Build the binary with the faucet feature enabled:

```bash
cd subtensor
cargo build -p node-subtensor --profile release
```

### Run

Next, run the localnet script and turn off the attempt to build the binary (as we have already done this above):

```bash
BUILD_BINARY=0 ./scripts/localnet.sh 
```

:::info troubleshooting
If you see errors to the effect that the release cannot be found in `targets/fast-blocks`, you may need to move the build artifacts from `targets/release` to `targets/fast-blocks/release`.
:::


## Validate

Ensure your local chain is working by checking the list of subnets.

Note the use of the `--chain_endpoint` flag to target the local chain, rather than, say, test network

```shell
 btcli subnet list --subtensor.chain_endpoint ws://127.0.0.1:9945
 btcli subnet list --network test
```

```console
                                                           Subnets
                                                         Network: custom


        ┃        ┃ Price       ┃ Market Cap  ┃              ┃                        ┃               ┃              ┃
 Netuid ┃ Name   ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)         ┃ Stake (α_out) ┃ Supply (α)   ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root │ 1.0000 τ/Τ  │ τ 0.00      │ τ 0.0000     │ -, -                   │ Τ 0.00        │ 0.00 Τ /21M  │ -/-
   1    │ α apex │ 1.0000 τ/α  │ τ 11.00     │ τ 0.0000     │ τ 10.00, 10.00 α       │ 1.00 α        │ 11.00 α /21M │ 77/100
────────┼────────┼─────────────┼─────────────┼──────────────┼────────────────────────┼───────────────┼──────────────┼─────────────
   2    │        │ τ 1.0       │             │ τ 0.0        │ τ 10.00/175.00 (5.71%) │               │              │

```


```shell
```

```console

                                                                        Subnets
                                                                     Network: test


        ┃                        ┃ Price        ┃ Market Cap  ┃              ┃                          ┃               ┃                 ┃
 Netuid ┃ Name                   ┃ (τ_in/α_in)  ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)           ┃ Stake (α_out) ┃ Supply (α)      ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ root                 │ 1.0000 τ/Τ   │ τ 5.01m     │ τ 0.0000     │ -, -                     │ Τ 3.10m       │ 5.01m Τ /21M    │ -/-
  277   │ इ muv                  │ 0.4008 τ/इ   │ τ 536.06k   │ τ 0.4154     │ τ 199.85k, 498.63k इ     │ 838.83k इ     │ 1.34m इ /21M    │ 39/99
   3    │ γ templar              │ 0.1534 τ/γ   │ τ 219.03k   │ τ 0.1690     │ τ 110.74k, 722.13k γ     │ 706.14k γ     │ 1.43m γ /21M    │ 65/99
  119   │ Ⲃ vida                 │ 0.0748 τ/Ⲃ   │ τ 94.83k    │ τ 0.1321     │ τ 44.77k, 598.65k Ⲃ      │ 669.45k Ⲃ     │ 1.27m Ⲃ /21M    │ 81/99
   1    │ α apex                 │ 0.0587 τ/α   │ τ 70.03k    │ τ 0.0405     │ τ 30.27k, 515.71k α      │ 677.20k α     │ 1.19m α /21M    │ 63/99
   13   │ ν dataverse            │ 0.0467 τ/ν   │ τ 63.12k    │ τ 0.0645     │ τ 26.93k, 576.17k ν      │ 774.11k ν     │ 1.35m ν /21M    │ 75/99
  255   │ ዉ ethiopic_wu          │ 0.0181 τ/ዉ   │ τ 21.94k    │ τ 0.0133     │ τ 10.72k, 592.40k ዉ      │ 619.73k ዉ     │ 1.21m ዉ /21M    │ 17/99

...
```