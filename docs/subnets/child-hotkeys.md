---
title: "Child Hotkeys"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Child Hotkeys

This guide describes the **child hotkeys** feature and how to use it. With the child hotkeys, a subnet validator is no longer required to use the same delegate hotkey for every subnet they validate in. The subnet validator can use a separate **child hotkey** per subnet. The subnet validator does this by re-delegating a portion of their stake from their delegate hotkey to this separate child hotkey on a subnet. The originating delegate hotkey is called the **parent hotkey**. 

The owner of this child hotkey would then validate in the subnet on behalf of the parent hotkey. The child hotkey would receive a percentage `take` from the resulting dividends.



<center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/child-hotkey-fig1.svg'),
    dark: useBaseUrl('/img/docs/dark-child-hotkey-fig1.svg'),
}}
style={{width: 750}}
/>
</center>

<br />

See the above diagram. Without the child hotkeys, a subnet validator's delegate hotkey would have to sign all the validation operations in all the subnets. This exposes the delegate hotkey in all the subnets. An attacker can get hold of the delegate hotkey from any one subnet in order to take over the validation operations with this hotkey, thereby crippling this subnet validator in all their subnets across the entire Bittensor network. 

<center>
<ThemedImage
alt="Coldkey and hotkey pairings"
sources={{
    light: useBaseUrl('/img/docs/fig2-child-hotkey.svg'),
    dark: useBaseUrl('/img/docs/dark-fig2-child-hotkey.svg'),
}}
style={{width: 800}}
/>
</center>


See the above diagram. With the child hotkeys, if an attacker steals a child hotkey, then only those subnets are at risk where this child hotkey is used as the delegate hotkey.

## Benefits of child hotkeys 

- **Security for parent hotkeys**: Re-delegating stake to multiple child hotkeys enhances the security of the parent hotkey. Each child hotkey can validate on a specific subnet using a different machine. The child hotkey would sign the validation operations on behalf of the parent hotkey: There is no need to use the parent hotkey on any of these subnets. As a consequence, the exposure of the parent hotkey can be minimized. The parent hotkey can even be moved to a secure location until it is needed, for example, to revoke a child hotkey.
- **Validators can easily scale up**: As Bittensor scales up towards hundreds of subnets, it is not practical for a single delegate to validate in every single subnet. With child hotkeys, a validator can easily make this feasible by re-delegating and offloading the validating operations to multiple child hotkeys.
- **Increased bandwidth for a subnet owner**: A validator can also re-delegate to a subnet owner's hotkey. The subnet owner would then do the validation work on the subnet, in exchange for a percentage `take` from the resulting dividends. A subnet owner can increase their access bandwidth into their own subnet in this way.
- A child hotkey and a parent hotkey need not be owned by the same entity.
- A validator can re-delegate to a hotkey of any other validator on any subnet. After re-delegation, the hotkey that is the source of the stake is called **parent hotkey** and the hotkey that receives this re-delegated stake is called **child hotkey**. 
  :::tip "Child hotkey" and "parent hotkey" are terms of convenience
  The terms "child hotkey" and "parent hotkey" are only terms of convenience. There is nothing inherently different about a "child hotkey" that separates it from a "parent hotkey". Neither have any special attributes compared to a normal hotkey.
  :::

---

## Features

The child hotkey features are as follows:

- A hotkey must be registered on a subnet before it can be used as a parent hotkey. The hotkey can be registered on any subnet. 
- A parent hotkey can have multiple child hotkeys. Similarly, a child hotkey can have more than one parent hotkey.
- A child hotkey can exist as a registered hotkey in multiple netuids simultaneously.
- **IMPORTANT**: For a given `netuid`, say, `netuid 5`, a single parent hotkey can have at most five (`5`) child hotkeys. Moreover, the same parent hotkey on a different `netuid 11` can have another set of `5` child hotkeys. Alternately, on this `netuid 11` the same parent hotkey can also have the same (`5`) child hotkeys that are in the netuid `5`.  
- While setting the child hotkeys, the proportion field can have proportions that add to less than `1.0`. The proportion that was not assigned to the child hotkeys will remain with the parent hotkey. However, a proportion cannot be zero. A `0` proportion value will result in an error. Furthermore, in a given subnet, the sum of all proportions must not exceed `1.0`. 

## Rate limits

The following rate limits apply for child hotkeys:

- A child hotkey's take rate can only be adjusted once per 30 days.
- One successful execution of `set_children` or `revoke_children` is allowed for every 720 blocks. 

## Minimum stake

The minimum stake you can redelegate to a child hotkey is as follows:
- **Testnet**: 100 testnet TAO.
- **Mainnet**: 1000 TAO.
  
---

## Installing

This feature is available in Bittensor 7.4.0 and later versions. See [Install Bittensor](../getting-started/installation.md).

## Child hotkey commands

Use the `btcli` command options described below to work with child hotkeys.

## Setting a child hotkey

This command assigns a proportion of the parent hotkey's stake weight to the child hotkeys. Specific proportion for each child hotkey can be set. The parent hotkey must be registered on at least one `netuid`. This `netuid` need not be the same `netuid` used in this command. Only the stake TAO of the parent hotkey can be assigned to the child hotkeys.

### Usage

```bash
btcli stake set_children --netuid <netuid> --children <a list of SS58 child hotkeys>  --proportions <a list of decimal numbers> --hotkey <parent hotkey> --wallet.name <coldkey>
```

### Parameters

- `--netuid:` Integer. Should be a single integer value representing a current subnet's `netuid`. 
  - Must be greater than `0` (`netuid 0` is not allowed). 
  - Integer values greater than the value of current subnet limit, i.e., greater than the value of `subtensorModule.subnetLimit()`, will be rejected with an error message and the command will stop. 
  - All child hotkeys used in this command must be already registered on this `netuid`.
- `--children`: SS58. A comma-separated ordered list of SS58 hotkeys for child hotkeys. 
  - There should be a maximum of five, 5, SS58 hotkeys in this comma-separated list. If there are more than five hotkeys, the command will issue an error message and stop.
  - The number of list elements should match the number of elements passed in the `--proportions` parameter. If the number of list elements do not match, the command will issue an error and stop. 
  - All hotkeys used here must be already registered on the `netuid` used in this command.

- `--proportions`: Floating. A comma-separated ordered list of floating values. Each proportion value of the parent hotkey's stake weight will be assigned to the corresponding child hotkey in the `--children` parameter. 
  - Each floating value should be a number greater than zero and equal to or less than `1.0`. 
  - If a value is zero, the corresponding child hotkey will be revoked. 
  - If a value is greater than `1.0`, the command will issue an error message and stop. 
  - All the proportions for a given `netuid` must sum to less than or equal to `1.0`. If the proportions sum to greater than `1.0`, the command will issue an error message and stop. 
- `--hotkey`: SS58. A single SS58 of the parent hotkey. This must be a delegate hotkey that is already registered in with any `netuid`. This `netuid` need not be the same `netuid` used in this command.
  - If this parent hotkey has zero stake, then the command will issue an error message and stop.
  - Note that this `--hotkey` parameter expects parent hotkey whereas the `--hotkey` parameter of the [Setting child hotkey take](#parameters-1) expects child hotkey.
- `--wallet.name`: String or SS58. Name of the wallet or the SS58 of the coldkey. This coldkey must be matched with the parent hotkey SS58 of the `--hotkey`. If the coldkey and the parent hotkey do not match, the command will issue an error message and stop.

### Examples

#### Setting a single child hotkey

```bash
btcli stake set_children \
  --netuid 4 \
  --children 5HEXVAHY9gyavj5xnbov9Qoba4hPJYkkwwnq1MQFepLK7Gei \
  --proportions 0.5 \
  --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y \
  --wallet.name Alice
```

#### Setting multiple child hotkeys

```bash
btcli stake set_children \
  --netuid 4 \
  --children 5Gx1CZ9jviC6V2KynBAcTpES4yK76riCagv5o5SFFZFYXj4s,5HEXVAHY9gyavj5xnbov9Qoba4hPJYkkwwnq1MQFepLK7Gei \
  --proportions 0.3,0.7 \
  --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y \
  --wallet.name Alice
```

## Adding a new child hotkey

If a parent hotkey has, for example, three child hotkeys: child hotkey A, child hotkey B and child hotkey C, then to add a fourth child hotkey D, you must run `set_children` command again with the parent hotkey and all four child hotkeys A, B, C and D. 

## Changing the proportions

If a parent hotkey has, for example, three child hotkeys: 
  - child hotkey A with `0.2` proportion.
  - child hotkey B with `0.5` proportion.
  - child hotkey C with `0.1` proportion.

Then to change the proportion of, for example, the child hotkey B from `0.5` to `0.3`, you must run `set_children` command again with the parent hotkey and all three child hotkeys A, B, and C set to `0.2`, `0.3` and `0.1` proportions. 


## Getting the child hotkeys

This command displays all the child hotkeys for a given parent hotkey.

### Usage

```bash
btcli stake get_children --netuid <netuid> --hotkey <parent hotkey> --all
```

### Example

```bash
btcli stake get_children \
  --netuid 4 \
  --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y \
  --wallet.name Alice \
  --all
```

or

```bash
btcli stake get_children
```
and follow the prompts.

## Revoking the child hotkeys

This command revokes **all** the child hotkeys for a given parent hotkey. 

:::danger Revoking a specific child hotkey is not allowed
Currently it is not possible to revoke a specific child hotkey. However, if a parent hotkey has, for example, three child hotkeys: child hotkey A, child hotkey B and child hotkey C, then setting the parent hotkey again with only child hotkeys A and B will result in revoking the child hotkey C.
:::

### Usage


```bash
btcli stake revoke_children \
  --netuid <netuid> \
  --hotkey <parent hotkey> \
  --wallet.name <coldkey>
```

### Example

```bash
btcli stake revoke_children \
  --netuid 4 \
  --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y \
  --wallet.name Alice
```

or

```bash
btcli stake revoke_children
```
and follow the prompts.

## Setting child hotkey take

This command sets the take percentage of the child hotkey for a given `netuid`. The `take` can be between `0` (0%) and `0.18` (18%). 

A child hotkey's `take` is subnet-specific, i.e., a child hotkey can have one `take` in one `netuid` and a different `take` in another `netuid`. 

The child hotkey take rate is an attribute of the child hotkey and this take rate applies to all the parent hotkeys for which this hotkey is the child hotkey. 

The child hotkey can also set its delegate take separately from the child hotkey take. That is, a child hotkey can carry two separate take rates: the child hotkey take rate and the delegate take rate. For the delegate take rate, see [Set delegate take](../btcli.md#set-delegate-take).

### Usage

```bash
btcli stake set_childkey_take \
  --netuid <netuid> \
  --hotkey <child hotkey> \
  --take <decimal number> \
  --wallet.name <coldkey>
```

### Parameters

- `--hotkey`: SS58. A single SS58 of the child hotkey. Note that this `--hotkey` parameter expects child hotkey whereas the `--hotkey` parameter of the [Setting a child hotkey](#parameters) expects parent hotkey.
- `--take`: Floating. A value between `0` (0%) and `0.18` (18%). Default value is `0`.
- `--netuid`: Integer. The `netuid` in which this child hotkey's `take` is applicable. Note that a child hotkey's `take` is subnet-specific, i.e., a child hotkey can have one `take` in one `netuid` and a different `take` in another `netuid`. 

### Example

```bash
btcli stake set_childkey_take \
  --netuid 4 \
  --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y \
  --take 0.09 \
  --wallet.name Alice
```

## Getting child hotkey take

This command displays the take percentage of a given child hotkey and `netuid`.

### Usage

```bash
btcli stake get_childkey_take \
  --netuid <netuid> \
  --hotkey <child hotkey> \
  --wallet.name <coldkey>
```


### Example

```bash
btcli stake get_childkey_take \
  --netuid 4 \
  --hotkey 5Gx1CZ9jviC6V2KynBAcTpES4yK76riCagv5o5SFFZFYXj4s \
  --wallet.name Bob
```
