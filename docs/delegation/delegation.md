---
title: "Delegation"
---

# Delegation

TAO holders can delegate any amount of their stake to a subnet validator through a process called **delegation**. Delegation on Bittensor network works like this:

- A TAO holder, i.e., a delegator, also called a **nominator**, stakes with a subnet validator, making this subnet validator a **delegate** of the nominator.  
- The delegate (the subnet validator) then pools all such delegated stake, along with their own stake, and uses this total stake to perform validation tasks in one or more subnets. Daily staking rewards, in proportion to the total stake of the delegate, are credited to the delegate as a result of such validation tasks.
- After deducting a percentage for the delegate, these staking rewards are given back to the delegate's nominators. 
:::tip Currently this delegate percentage is 18%. 
:::
- The above (100-18)% of the staking reward is distributed among the delegate's nominators in proportion to the nominators' staked TAO amount with this delegate.

:::tip A nominator is a delegating authority
A nominator is the same as a delegating authority. Typically a nominator is an owner of TAO funds, looking to invest in Bittensor network without doing any validating tasks.
:::

## Becoming a delegate

If you are a registered subnet validator you can become a delegate. To become an active delegate, you must make your hotkey available for the nominators. The nominators will then delegate their TAO to this hotkey, i.e., the nominators will use your delegate hotkey as a wallet destination for their delegated TAO transfers.

Run the below command:

```bash
btcli root nominate
    --wallet.name YOUR_WALLET_NAME
    --wallet.hotkye YOUR_HOTKEY_NAME
```

## Viewing available delegates 

If you are looking for trusted delegate(s) to delegate your funds to, start by seeing a list of delegates who are already active on the Bittensor network. Run the below command on your terminal:  

```bash
btcli root list_delegates
```

You will get an output like this:

![List Delegates](/img/list_delegates.png 'Output of List Delegates')

See below for an explanation of the column headings in the above terminal output:

| Column | Meaning                                                 |
| :------ | ------------------------------------------------------------|
| INDEX   | Delegates with larger total stake are higher in the list. |
| DELEGATE | The name of the delegate. Click on the name to visit the delegate website. Only shows if the delegate has registered. |
| SS58    | The [SS58 hotkey of the delegate](../get-started/wallets.md#list-all-the-local-wallets).                       |
| NOMINATORS    | The number of nominators, i.e., delegators, who have delegated to this delegate. This is also the number of unique cold keys (i.e., number of nominators) who have nominated **to** this hotkey (i.e., to this delegate).                       |
| DELEGATE STAKE(τ)    | The amount of delegate's own stake (not the TAO delegated from any nominators). This is the the amount of stake that the delegate-owned coldkey has delegated to this delegate's hotkey (distinct from TAO delegated from others).                       |
| TOTAL STAKE(τ)    | The total amount of stake delegated to this delegator's hotkey.                       |
| CHANGE/(4h)     | The percent change in the total stake delegated to this delegate within the past 4 hours.                       |
| SUBNETS    | A list of subnet numbers this delegate (i.e., this subnet validator) is registered in. See the VPERMIT column description.                      |
| VPERMIT    | A `*` shows that this delegate has the validator permit for the corresponding subnet in the SUBNETS list.                      |
| NOMINATOR/(24h)/kτ    | Stake reward distributed to this delegate's nominators within the past 24 hour period (per 1000 TAO). |
| DELEGATE/(24h)    | Stake reward cut taken by this delegate within the past 24 hour period.                        |
| Desc    | A description of the delegate.                     |


## Delegating tao

The below command will show a list of delegates sorted by their total stake. Select a delegate from this list to send your stake to.
```bash 
btcli root delegate
```

## Show your delegations 

To show all your previously made delegations:

:::tip
Use `--all` option to show delegations across all your wallets.
:::

```bash
btcli root my_delegates
```


<!-- 
### Signing delegates 

Next, make your delegate information available in the list of active delegates, for example, when a nominator runs `btcli root list_delegates` to see available delegates. You can do so by signing your 

Signing your delegate name, URL and description makes it show when others run btcli list_delegates. To do this you need to submit a pull request to the bittensor-delegates repo.


1. Generating your details
```bash dark title=bittensor/scripts/validator_info_signature/generate.py link=https://github.com/opentensor/bittensor/scripts/validator_info_signature/generate.py
$ python3 generate.py
The mnemonic of your validator's Hotkey ( see file: ~/.bittensor/wallets/<coldkey>/hotkeys/<validator> ): ...
Your validator's descriptive name (i.e. Opentensor Foundation): ...
Your validator url (i.e. www.opentensor.org ): ...
A short description for your validator ( i.e. Build, maintain and advance Bittensor): ...
```

1. Verify a validator info signature.
```bash dark title=bittensor/scripts/validator_info_signature/verify.py link=https://github.com/opentensor/bittensor/scripts/validator_info_signature/verify.py
$ python3 verify.py
Validator information: sdasdasd
Validator signature: asdasdas
```

1. Submit a PR.
Visit this [bittensor repo](https://github.com/opentensor/bittensor) from here click `pull requests'. ...
-->

