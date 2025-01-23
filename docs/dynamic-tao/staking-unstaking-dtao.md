---
title: "Staking and Unstaking in Dynamic TAO"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking and Unstaking in Dynamic TAO

This page refers to the nature of staking and unstaking operations in the [Dynamic TAO model](./index.md), which is a planned evoluation of the Bittensor network.

Staking is always local to a subnet. Each subnet has a reserve of TAO and a reserve of its currency, referred to in general as its alpha ($\alpha$) currency. Stake is held in $\alpha$ token denominations.

As a TAO holder you will stake to a validator’s hotkey (as previously), but now you select a subnet to stake to them within.

**When you stake:**

1. First, your TAO stake goes into the subnet's TAO reserve of its AMM (automated market maker) pool.
1. Then, the subnet AMM pool algorithm uses the exchange rate and calculates the equivalent units of $\alpha$, for the TAO that was just added to the TAO reserve side. This amount of $\alpha$ is taken out of the alpha reserve of the pool and is sent to the validator’s hotkey. 
1. The validator’s hotkey holds the $\alpha$. The sum of stake among all hotkeys is referred as **$\alpha$ outstanding** for that subnet. 

**When you unstake:**

1. When you issue an unstake command, `btcli stake remove`, and specify the units of $\alpha$ token you want to unstake, this $\alpha$ is first taken out of the validator’s hotkey and added to the $\alpha$ reserves of the subnet pool. 
2. The subnet AMM pool algorithm then applies the latest exchange rate and calculates the equivalent TAO units for the $\alpha$ token units that were just added to the $\alpha$ reserves of the pool. 
3. These equivalent TAO units are then taken out of the TAO reserves of the subnet pool and are sent to the TAO holder’s coldkey.

:::tip Stake is always expressed in alpha units
In Dynamic TAO, except for the stake held in [subnet zero](#subnet-zero), the stake held by a hotkey in a subnet is always expressed in the subnet-specific $\alpha$ units and not TAO units.
:::

:::tip Prereq
To follow along, install the Dynamic TAO-enabled release candidate of the Bittensor command line interface `btcli`, by running:
```shell
pip install bittensor-cli==8.2.0rc10
```
:::

## View subnet currency reserves


To see the list of subnets and their currencies, run:

```shell
btcli subnet list
```

You should see something like the following output. Notice that next to the subnets Netuid and Name is the subnet's token `Price (τ_in/α_in)`, which, as indicated, is a ratio of the TAO in reserve `τ_in` to alpha in reserve `α_in`.


```console

                                                                Subnets
                                                             Network: test


        ┃            ┃ Price       ┃ Market Cap  ┃              ┃                        ┃               ┃                ┃
 Netuid ┃ Name       ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ P (τ_in, α_in)         ┃ Stake (α_out) ┃ Supply (α)     ┃ Tempo (k/n)
━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━
   0    │ τ tau      │ 1.0000 τ/Τ  │ τ 5.01m     │ τ 0.0000     │ -, -                   │ Τ 2.92m       │ 5.01m Τ /21M   │ -/-
  119   │ Ⲃ vidac    │ 0.2462 τ/Ⲃ  │ τ 14.43k    │ τ 0.0526     │ τ 873.55, 3.55k Ⲃ      │ 55.07k Ⲃ      │ 58.61k Ⲃ /21M  │ 23/99
  250   │ ኤ unknown  │ 0.0586 τ/ኤ  │ τ 3.43k     │ τ 0.0258     │ τ 427.54, 7.30k ኤ      │ 51.32k ኤ      │ 58.61k ኤ /21M  │ 54/99
  277   │ इ muv      │ 0.0588 τ/इ  │ τ 3.27k     │ τ 0.0066     │ τ 109.83, 1.87k इ      │ 53.67k इ      │ 55.54k इ /21M  │ 81/99
  255   │ ዉ unknown  │ 0.0446 τ/ዉ  │ τ 2.62k     │ τ 0.0488     │ τ 810.66, 18.16k ዉ     │ 40.46k ዉ      │ 58.61k ዉ /21M  │ 59/99
   1    │ α alpha    │ 0.0290 τ/α  │ τ 1.70k     │ τ 0.0337     │ τ 559.80, 19.32k α     │ 39.27k α      │ 58.59k α /21M  │ 5/99
  117   │ Ⲁ alfa     │ 0.0258 τ/Ⲁ  │ τ 1.51k     │ τ 0.0273     │ τ 452.36, 17.55k Ⲁ     │ 41.06k Ⲁ      │ 58.61k Ⲁ /21M  │ 21/99
  ...
```

## View a subnet's nodes

```shell
btcli subnet show --netuid 119
```

```
Netuid: 119
Using the specified network test from config

                                                   Subnet 119: vidac
                                                     Network: test

 UID ┃ Stake (Ⲃ) ┃ Alpha (Ⲃ) ┃  Tao (τ) ┃ Dividends ┃ Incentive ┃ Emissions (Ⲃ) ┃ Hotkey ┃ Coldkey ┃ Identity
━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━
 101 │   5.03k Ⲃ │   5.03k Ⲃ │   τ 0.00 │  0.00492  │  0.0098   │   0.58163 Ⲃ   │ 5FRxKz │ 5FRxKz  │ Owner119 (*Owner)
 80  │  18.72k Ⲃ │  18.72k Ⲃ │   τ 0.00 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5CtaFa │ 5H13H4  │ ~
 45  │  16.87k Ⲃ │   9.57k Ⲃ │  τ 7.30k │  0.30140  │  0.0000   │  35.62095 Ⲃ   │ 5FCPTn │ 5D2d3Y  │ ~
 21  │   9.46k Ⲃ │   9.46k Ⲃ │   τ 1.81 │  0.17008  │  0.0065   │  20.10072 Ⲃ   │ 5CFZ9x │ 5H13H4  │ ~
 22  │  777.12 Ⲃ │  775.31 Ⲃ │   τ 1.81 │  0.01837  │  0.0096   │   2.17105 Ⲃ   │ 5HbYLL │ 5H13H4  │ ~
 97  │  682.43 Ⲃ │  558.57 Ⲃ │ τ 123.86 │  0.01674  │  0.0096   │   1.97877 Ⲃ   │ 5CorGT │ 5Cqiai  │ ~
 81  │  362.15 Ⲃ │  360.35 Ⲃ │   τ 1.80 │  0.01112  │  0.0097   │   1.31442 Ⲃ   │ 5HBK4F │ 5H13H4  │ ~
 26  │  120.37 Ⲃ │  111.06 Ⲃ │   τ 9.31 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5Ct14B │ 5GEeMQ  │ ~
 94  │  118.54 Ⲃ │  111.06 Ⲃ │   τ 7.48 │  0.00492  │  0.0098   │   0.58163 Ⲃ   │ 5D2nW1 │ 5D9to6  │ ~
  4  │  118.48 Ⲃ │  111.06 Ⲃ │   τ 7.42 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5CDZVv │ 5Ff9GG  │ ~
 32  │  116.68 Ⲃ │  111.06 Ⲃ │   τ 5.62 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5EARqJ │ 5CtBA6  │ ~
 33  │  116.09 Ⲃ │  111.06 Ⲃ │   τ 5.03 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5CeoYQ │ 5GKVqx  │ ~
 39  │  114.02 Ⲃ │  111.06 Ⲃ │   τ 2.96 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5DekuZ │ 5GHSq9  │ ~
  6  │  111.87 Ⲃ │  111.06 Ⲃ │   τ 0.81 │  0.00492  │  0.0098   │   0.58162 Ⲃ   │ 5EUyUT │ 5G9RAF  │ ~
```


## Stake into a node

Use `btcli stake add` to stake to a validator on a subnet. You'll be prompted to choose a subnet and validator, as well as specify an amount of TAO to stake into the validator's hotkey as alpha.

```shell
 btcli stake add
```

```console
Enter the netuid to use. Leave blank for all netuids: 117
Enter the wallet name (PracticeKey!):
Enter the wallet hotkey name or ss58 address to stake to (or Press Enter to view delegates):
Using the specified network test from config


                                                      Subnet 117: alfa
                                                       Network: test

 # ┃ UID ┃ Stake (Ⲁ) ┃ Alpha (Ⲁ) ┃ Tao (τ) ┃ Dividends ┃ Incentive ┃ Emissions (Ⲁ) ┃ Hotkey ┃ Coldkey ┃ Identity
━━━╇━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━
 1 │  4  │   5.16k Ⲁ │   5.16k Ⲁ │  τ 0.00 │  0.00000  │  0.0000   │   0.00000 Ⲁ   │ 5G9pfx │ 5G9pfx  │ (*Owner controlled)
 2 │  0  │    0.20 Ⲁ │    0.00 Ⲁ │  τ 0.20 │  0.00000  │  0.0000   │   0.00000 Ⲁ   │ 5GCTbn │ 5G9pfx  │ (*Owner controlled)
 3 │  2  │  39.32k Ⲁ │  32.02k Ⲁ │ τ 7.30k │  1.00000  │  0.0000   │  73.85240 Ⲁ   │ 5FCPTn │ 5D2d3Y  │ ~
 4 │  5  │   4.44k Ⲁ │   4.44k Ⲁ │  τ 0.00 │  0.00000  │  0.0000   │   0.00000 Ⲁ   │ 5CtaFa │ 5H13H4  │ ~
 5 │  3  │    0.00 Ⲁ │    0.00 Ⲁ │  τ 0.00 │  0.00000  │  0.0000   │   0.00000 Ⲁ   │ 5GTzwV │ 5Gxcfw  │ ~
 6 │  1  │    0.00 Ⲁ │    0.00 Ⲁ │  τ 0.00 │  0.00000  │  0.0000   │   0.00000 Ⲁ   │ 5C8Hop │ 5EyVeu  │ ~
───┼─────┼───────────┼───────────┼─────────┼───────────┼───────────┼───────────────┼────────┼─────────┼─────────────────────
   │     │  48.92k Ⲁ │  41.62k Ⲁ │ 7.30k Ⲁ │   1.000   │           │   73.8524 Ⲁ   │        │         │


```


## View your current stakes

Use `btcli stake list` to view your currently held stakes. For each validator you have staked, you'll see how much stake you currently hold on each subnet.

Stake is held in alpha, but note that value at the current price is also displayed, along with the computed **Swap** value and slippage rate of the current holdings.

```console
                       Hotkey: 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK
                                            Network: test

                             See below for an explanation of the columns

        ┃           ┃     Value ┃           ┃    Price    ┃                  ┃            ┃  Emission
 Netuid ┃ Name      ┃ (α x τ/α) ┃ Stake (α) ┃ (τ_in/α_in) ┃    Swap (α -> τ) ┃ Registered ┃ (α/block)
━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━
 250    │ ኤ unknown │   τ 18.38 │ 602.14 ኤ  │ 0.0305 τ/ኤ  │ τ 17.96 (2.287%) │        YES │  0.0000 ኤ
 119    │ Ⲃ vidac   │   τ 13.72 │  98.73 Ⲃ  │ 0.1390 τ/Ⲃ  │ τ 13.61 (0.815%) │        YES │  0.0000 Ⲃ
────────┼───────────┼───────────┼───────────┼─────────────┼──────────────────┼────────────┼───────────
 2      │           │   τ 32.10 │           │             │          τ 31.57 │            │

Press Enter to continue to the next hotkey...
```



