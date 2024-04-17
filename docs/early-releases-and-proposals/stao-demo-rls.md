---
title: "STAO"
---

# STAO

This document describes the demonstration version of a **new Bittensor feature proposal** called subnet-specific TAO, or STAO. Using the steps described in this document you can test this STAO feature proposal. This feature proposal is available in the `stao` branch of the Bittensor GitHub repo.

## Before you proceed

Make sure that you are on Bittensor Version 6.9.3 to test this STAO feature.

## Description

With STAO you can stake your TAO into a subnet of your choice. Prior to STAO it was only possible to stake to specific validator(s)&mdash;selecting your preferred subnet to stake into **was not possible**. 

:::danger strictly for demonstration only
The STAO feature proposal is currently strictly for demonstration only. Do not use this in any of your production environments. This documentation is intended to be used only for testing the STAO feature proposal by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

## STAO benefits

The STAO feature allows TAO holders to get more bandwidth into any individual Bittensor subnets by staking specifically into these subnets. The STAO feature introduces the following enhancements into the Bittensor ecosystem:

- **More democratized decision-making**: For TAO holders, the STAO feature provides more democratized decision-making ability to decide on which commmodity systems (i.e., subnets) can receive more emission.
- **Flexible access control**: The STAO feature provides the TAO holders an ability to increase or decrease the access control they have for individual digital commodities. By staking into a subnet, their control over the subnet's digital commodity is increased.
- **Validator selection**: With STAO feature, a TAO holder has the ability to directly select specific validator(s) to delegate to, for any subnet. This could be done, for example, to give these specific delegates additional access to resources in the subnet, so they can monetize these resources.

## STAO proposal paper

See [STAO proposal paper](#)(PDF) here. 

## Testing STAO proposal with GitHub branch

This section is a step-by-step guide for how to test this demo version of STAO feature proposal using the `stao` branch of the Bittensor repo. 

### Summary of steps

For this demo test, we will proceed as described below:

1. Fund a wallet with test tokens from the dev chain faucet.
2. Register the wallet with Subnet 1 with `netuid` of `1` in the dev chain. You can stake into any subnet&mdash;the Subnet 1 is used here only for demonstration purposes.
3. Run the subnet-specific staking commands using `btcli` in the dev chain.

We will use the below setup:

- A dev chain: `wss://dev.chain.opentensor.ai:443`.
- Subnet 1 with `netuid` of `1`.

:::danger strictly for demonstration only
The STAO feature is currently strictly for demonstration only. Do not use this in any of your production environments. This documentation is intended to be used only for testing the demo STAO feature by the Bittensor community. **Before you proceed**, read this Medium paper: [DTAO: Commodity Analysis](https://medium.com/@unconst/dtao-security-analysis-611bab34baef).
:::

Follow the below steps:

### Step 1: Install Bittensor

1. Clone the Bittensor repo:

    ```bash
    git clone https://github.com/opentensor/bittensor.git
    ```
3. Switch to `stao` branch:

    ```bash
    git checkout stao
    ```

4. Install with `python3`

    ```bash
    python3 -m pip install -e bittensor/
    ```

  **NOTE:** Verify that you are on Bittensor 6.9.3 by running `btcli --help`.

### Step 2: Using Wallet

You can use your existing Bittensor wallet for testing this demo STAO feature.

### Step 3: Obtain test tokens

Run the below command to fund your wallet with test tokens from the faucet. 

```bash title="NOTE: Replace YOUR-WALLET with your wallet name"
btcli wallet faucet --wallet.name YOUR-WALLET --subtensor.chain_endpoint wss://dev.chain.opentensor.ai:443
```

For example, to fund a wallet named `rkstao1-coldkey` you would run the below command:

```bash
btcli wallet faucet --wallet.name rkstao1-coldkey --subtensor.chain_endpoint ws://138.2.239.223:9946
```

### Step 4: Register your keys

Register your wallet with `netuid 1`. Subnet 1 is used here for illustration. You can use any subnet by using its `netuid` in the below command:

```bash title="NOTE: Use the wallet you funded above"
btcli subnet register --netuid 1 --wallet.name rkstao1-coldkey --wallet.hotkey rkstao1-hotkey --subtensor.chain_endpoint ws://138.2.239.223:9946
```

You will get a response like below. Answer both the questions with `y`:

```bash
Bittensor Version: Current 6.9.3/Latest 6.10.1
Please update to the latest version at your earliest convenience. Run the following command to upgrade:

python -m pip install --upgrade bittensor
Your balance is: τ3,000,000,000.000000000
The cost to register by recycle is τ0.170369269
# highlight-next-line
Do you want to continue? [y/n] (n): y
Enter password to unlock key:
# highlight-next-line
Recycle τ0.170369269 to register on subnet:1? [y/n]: y
📡 Checking Balance...
Balance:
  τ3,000,000,000.000000000 ➡ τ2,999,999,999.829630852
✅ Registered
```

### Add stake to a hotkey in a subnet

The below `btcli` command adds stake to a specified hotkey account on a specific subnet.

```bash
btcli substake add --amount <TAO amount to stake> --wallet.name <wallet to get TAO from> --hotkey <ss58_address of the stake destination>
```

**Example**:

The below command takes 3300 TAO from the wallet `rkstao1-coldkey` and stakes it to the hotkey `rkstao-hotkey` in the `netuid` of `1`, i.e., Subnet 1:

```bash
btcli substake add --subtensor.chain_endpoint ws://138.2.239.223:9946 --netuid 1 --wallet.name rkstao1-coldkey
Enter hotkey name or ss58_address to stake to (default): rkstao1-hotkey
Stake all Tao from account: 'rkstao1-coldkey'? [y/n]: n
Enter Tao amount to stake: 3300
Bittensor Version: Current 6.9.3/Latest 6.10.1
Please update to the latest version at your earliest convenience. Run the following command to upgrade:

python -m pip install --upgrade bittensor
Do you want to stake to the following hotkey on netuid 1:
 - from   rkstao1-coldkey:5GqAHVYFacifDF3rxraXgsKQWRXx9SaDf1yfqEdDBbc5vqau
 - to     rkstao1-hotkey:5GCT8XgM4ePCUqWQbhP3s3DKfruy1XXz9RwfyzJxU1nRNThB
 - amount 3300.0 τ
 [y/n]: y
Enter password to unlock key:
✅ Finalized
Balance:
  τ2,999,999,999.666705608 ➡ τ2,999,996,699.666706562
Stake:
  τ0.000000000 ➡ τ3,299.999999000
```

:::tip You can use the SS58 of the hotkey also
In the above command, instead of the hotkey name such as `rkstao1-hotkey` you can also specify the SS58 address, such as `5C86aJ2uQawR6P6veaJQXNK9HaWh6NMbUhTiLs65kq4ZW3NH` 
:::

### Remove stake from a hotkey in a subnet

The below command and its terminal log shows how to remove substake using `btcli substake` command:

```bash
btcli substake remove --subtensor.chain_endpoint ws://138.2.239.223:9946
Enter netuid (0): 1
Enter wallet name (default): rkstao1-coldkey
Enter hotkey name or ss58_address to unstake from (default): rkstao1-hotkey
Unstake all τao
  from account: 'rkstao1-coldkey'
  and hotkey  : 'rkstao1-hotkey'
  from subnet : '1'
 [y/n]: n
Enter Tao amount to unstake: 3200
Bittensor Version: Current 6.9.3/Latest 6.10.1
Please update to the latest version at your earliest convenience. Run the following command to upgrade:

python -m pip install --upgrade bittensor
Enter password to unlock key:
Do you want to unstake:
  amount: τ3,199.999999000
  from  : rkstao1-hotkey
  netuid: 1
 [y/n]: y
✅ Finalized
Balance:
  τ2,999,996,699.666706562 ➡ τ2,999,999,899.666705608
Unstaked:
  τ4,603.826825364 ➡ τ1,408.746853820
```