---
title: "Staking in Bittensor"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Staking in Bittensor

TAO holders can **stake** any amount of the liquidity they hold to a validator. Also known as **delegation**, staking supports validators, because their total stake in the subnet, including stake delegated to them by others, determines their consensus power and their share of emissions. After the validator/delegate extracts their **take** the remaining emissions are credited back to the stakers/delegators in proportion to their stake with that validator.

something here about different ways to stake...

tao holders with individual keys may want to do this with hardweare wallets...
See also:
- [Staking with Polkadot JS](./staking-polkadot-js.md).
- See also [Validators: Acquiring stake](../validators/index.md#acquiring-stake).


:::tip tips
Validators/delegates can configure their take. The default value is 18%. See [Setting your delegate take](#setting-your-delegate-take).

Minimum required stake for nominators is 0.1 TAO.
:::


## Example

Suppose a validator holds 800 TAO of their own.

Then three nominators stake to the validator as follows: 
  - Nominator 1: 100 TAO.
  - Nominator 2: 70 TAO.
  - Nominator 3: 30 TAO.

The validator's effective stake is the total sum of their own and all delegated stake.

   $$
   \text{delegated stake} = 100\tau + 70\tau + 30\tau = 200\tau
   $$
   $$
   \text{total stake} = \text{self-stake} + \text{delegated stake} = 800\tau + 200\tau = 1000 \tau
   $$

Emissions to stakers are proportional to their contribution to delegated stake:

    $$
    \text{emission for staker x from validator V} = 
      \frac
      { stake_x }
      { \sum_{i \in \text{V's stakers}} \bigl(stake_i) }
    $$
- Nominator 1 represents 50% of total delegated TAO:

    $$
    \text{emission for staker x from validator V} = 
      \frac
      { 100\tau }
      { 100\tau + 70\tau + 30\tau } = 50\%
    $$ 
- Nominator 2 contributes 35% of the total delegated TAO.
      $$
      \text{emission for staker x from validator V} = 
        \frac
        { 70\tau }
        { 100\tau + 70\tau + 30\tau } = 35\%
      $$ 
- Nominator 3 contributes 15% of the total delegated TAO.
      $$
      \text{emission for staker x from validator V} = 
        \frac
        { 30\tau }
        { 100\tau + 70\tau + 30\tau } = 15\%
      $$ 

The delegate validator would keep 80% of the emissions, based on their 80% proportion of the total stake (0.8). In addition, the validator would keep their take of 18% of the emissions earned on the delegated stake.

As a result:
  - Total emissions to the delegate are: $0.8 + 0.2*0.18= .836 = 83.6\%$ of the received emissions.
  - Each nominator receives the following portions of the validator's total emissions, based on their contribution percentages:
    - Nominator 1 emissions: $(1-0.8)*(1-0.18)*.5 = .082 = 8.2\%$
    - Nominator 2 emissions: $(1-0.8)*(1-0.18)*.35 = .0574 = 5.74\%$
    - Nominator 3 emissions: $(1-0.8)*(1-0.18)*.15 = .0246 = 2.46\%$
    

:::info A nominator is a delegating authority
A nominator is the same as a delegating authority. Typically, a nominator is an owner of TAO funds who wants to invest in the Bittensor network without performing any validating tasks.
:::

## Staking operations

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
| NOMINATOR/(24h)/kτ    | Stake allocated to this delegate's nominators within the past 24-hour period (per 1000 TAO).                                                                                                                              |
| DELEGATE/(24h)        | Stake cut taken by this delegate within the past 24 hours.                                                                                                                                                                  |
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

## Delegate operations

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
