---
title: "Staking/Delegation"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking/delegation

TAO holders can **stake** or **delegate** any amount of liquidity to a validator. Delegation supports validators, as their total stake in the subnet determines their consensus power and the emissions they receive.

A TAO holder, i.e., a delegator, also called a **nominator**, stakes with a subnet validator, making this subnet validator a **delegate** of the nominator. This supports the delegate as the delegate's effective stake becomes larger, increasing the delegate's impact on the network.

The delegate (the subnet validator) then pools all such delegated stake, along with their own stake, and uses this total stake to perform validation tasks in one or more subnets. Daily staking rewards, in proportion to the total stake of the delegate, are credited to the delegate as a result of such validation tasks.

- After a percentage is deducted from the delegate, these staking rewards are given back to the delegate's nominators.

:::tip Validator take %
The default value of the delegate take is 18%. As a delegate, you can set your own delegate take % by using the `btcli root set_delegate_take` command. See [Setting your delegate take](#setting-your-delegate-take).
:::
- The above percentage of the staking reward is distributed among the delegate's nominators in proportion to the nominators' staked TAO amount with this delegate.

:::tip Minimum required stake for nominators
Minimum required stake for nominators is 0.1 TAO.
:::

## Example
Consider the example below:
- A delegate holds their own TAO of 800.
- Three nominators delegate their TAO to the delegate as follows: 
  - Nominator 1 delegates 100 TAO.
  - Nominator 2 delegates 70 TAO.
  - Nominator 3 delegates 30 TAO.
- The effective stake of the delegate is 1000 TAO (100+70+30 of the delegated TAO plus their own 800 TAO), consisting of 80% of the delegate's own and the remaining 20% from the nominators.
- Finally, the individual nominator contributions of the total delegated TAO are as follows:
  - Nominator 1 contributes 50% of total delegated TAO (i.e., 100/(100+70+30)).
  - Nominator 2 contributes 35% of the total delegated TAO.
  - Nominator 3 contributes 15% of the total delegated TAO.

<center>
<ThemedImage
alt="Delegate example"
sources={{
    light: useBaseUrl('/img/docs/delegate-example.svg'),
    dark: useBaseUrl('/img/docs/dark-delegate-example.svg'),
}}
style={{width: 700}}
/>
</center>

<br />

When the staking dividends are received, the dividends are shared in the following way (see the above picture):
- The delegate would keep 80% of the dividends, based on their 80% proportion of the total stake (0.8).
- In addition, the delegate would keep 18% of the dividends earned on the delegated stake (the delegated stake is 20%). This is the delegate's take %.
- As a result:
  - Total dividends to the delegate are: `0.8 + 0.2*0.18=0.836` of the received dividends.
  - Each nominator receives the following portions of the received dividends, based on their contribution percentages:
    - Nominator 1 receives: `(1-0.8)*(1-0.18)*50% = 0.082`.
    - Nominator 2 receives: `(1-0.8)*(1-0.18)*35% = 0.0574`. 
    - Nominator 3 receives: `(1-0.8)*(1-0.18)*15% = 0.0246`.
    

:::info A nominator is a delegating authority
A nominator is the same as a delegating authority. Typically, a nominator is an owner of TAO funds who wants to invest in the Bittensor network without performing any validating tasks.
:::

## Delegate examples

### Becoming a delegate

If you are a registered subnet validator, you can become a delegate. To become a delegate:
1. You must make your hotkey available for the nominators. 
2. You must provide and sign your delegate information.

The nominators will then delegate their TAO to this hotkey, i.e., the nominators will use your delegate hotkey as a wallet destination for their delegated TAO transfers.

#### Step 1: Nominate yourself as a delegate

Run the below command (for self-nominating as a delegate):

```bash
btcli root nominate --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey>
```
Example:
```bash
btcli root nominate --wallet.name test-coldkey --wallet.hotkey test-hotkey
```

#### Step 2: Provide your delegate information 

Next, provide your delegate information, such as your delegate name, URL, and description. This information will then be available in the list of active delegates, for example, when a nominator runs `btcli root list_delegates` to see available delegates.

To provide and sign this information, follow the instructions on this [Bittensor Delegates repo](https://github.com/opentensor/bittensor-delegates#2023-03-23---first-version).

### Setting your delegate take

As a delegate, you can set your delegate percentage by running the below command:

```bash
btcli root set_delegate_take --wallet.name <my_coldkey> --wallet.hotkey <my_hotkey> --take <floating point number between 0 and 1>
```
Example:
```bash
btcli root set_delegate_take --wallet.name test-coldkey --wallet.hotkey test-hotkey --take 0.1
```
where the value for the `--take` option is a floating point number between 0 and 1. In the above example, `--take 0.1` sets the delegate take to 10%.

## Nominator examples

### Viewing available delegates 

If you are looking for trusted delegate(s) to whom you can delegate your funds, start by seeing a list of already active delegates on the Bittensor network. Run the below command on your terminal:

```bash
btcli root list_delegates
```

You will get an output like this (click on the image to zoom):

[![List Delegates](/img/docs/list_delegates_screenshot.png 'Output of List Delegates')](/img/docs/list_delegates_screenshot.png)

See below for an explanation of the column headings in the above terminal output:

| Column                | Meaning                                                                                                                                                                                                                            |
| :------               |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| INDEX                 | Delegates with a larger total stake are higher on the list.                                                                                                                                                                        |
| DELEGATE              | The name of the delegate. Click on the name to visit the delegate website. It only shows if the delegate has registered.                                                                                                           |
| SS58                  | The [SS58 hotkey of the delegate](/getting-started/wallets#listing-all-the-local-wallets).                                                                                                                                          |
| NOMINATORS            | The number of nominators, i.e., delegators, who have delegated to this delegate. This is also the number of unique cold keys (i.e., number of nominators) nominated **to** this hotkey (i.e., to this delegate).                   |
| DELEGATE STAKE(τ)     | The amount of the delegate's own stake (not the TAO delegated from any nominators). This is the amount of stake that the delegate-owned coldkey has delegated to this delegate's hotkey (distinct from TAO delegated from others). |
| TOTAL STAKE(τ)        | The total amount of stake delegated to this delegator's hotkey.                                                                                                                                                                    |
| CHANGE/(4h)           | The percent change in the total stake delegated to this delegate within the past 4 hours.                                                                                                                                          |
| VPERMIT               | Shows the subnets for which the delegate holds the validator permits.                                                                                                                                                              |
| TAKE                  | Shows the delegate take percentage.                                                                                                                                                                                                |
| NOMINATOR/(24h)/kτ    | Stake reward distributed to this delegate's nominators within the past 24-hour period (per 1000 TAO).                                                                                                                              |
| DELEGATE/(24h)        | Stake reward cut taken by this delegate within the past 24 hours.                                                                                                                                                                  |
| Desc                  | A description of the delegate.                                                                                                                                                                                                     |

### Delegating tao

The below command will show a list of delegates sorted by their total stake. Select a delegate from this list to whom you can send your stake.
```bash 
btcli root delegate
```
Output:
```bash
INDEX DELEGATE SS58          NOMINATORS   DELEGATE STAKE(τ)    TOTAL STAKE(τ)    CHANGE/(4h)   VPERMIT     TAKE     NOMINATOR/(24h)/kτ    DELEGATE/(24h)   Desc
0              5GTMADbd...   0            τ0.000000000         τ0.000000000      NA            [0, 1]      18.0%    τ0.000                τ0.000

Enter delegate index: 0
Enter wallet name (default):
Stake all Tao from account: 'default'? [y/n]: y
Enter password to unlock key:
Do you want to delegate:
  amount: τ120,999.999999000
  to: 5GTMADb *** 39Gp
 default: 5CzJxoM8 *** oRD [y/n]: y
✅ Finalized
Balance:
  τ121,000.000000000 ➡ τ0.000001000
Stake:
  τ0.000000000 ➡ τ120,999.999999000
```

### Show your delegations 

To show all your previously made delegations:

:::tip
Use `--all` option to show delegations across all your wallets.
:::

```bash
btcli root my_delegates
```
Output:
```bash
Wallet    OWNER  SS58         Delegation       τ/24h    NOMS   OWNER STAKE(τ)     TOTAL STAKE(τ)    SUBNETS    VPERMIT      24h/kτ     Desc
owner            5GTMADbd...  τ120,999.9999    τ0.000   1      τ0.000000000       τ120,999.9999     [0, 1]     ['', '*']    0.0

Total delegated Tao: τ120,999.999999000
```


