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
    dark: useBaseUrl('/img/docs/child-hotkey-fig1.svg'),
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
    dark: useBaseUrl('/img/docs/fig2-child-hotkey.svg'),
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

## Installing

Installation instructions

## Commands

Use the `btcli` command options described below to work with child hotkeys.

## Setting the child hotkeys

### Setting a single child hotkey

```bash
btcli stake set_children --netuid 4 --children 5HEXVAHY9gyavj5xnbov9Qoba4hPJYkkwwnq1MQFepLK7Gei --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y --proportions 0.5 --subtensor.chain_endpoint ws://localhost:9945 --wallet.name Alice
```

### Setting multiple child hotkeys

```bash
btcli stake set_children --netuid 4 --children 5Gx1CZ9jviC6V2KynBAcTpES4yK76riCagv5o5SFFZFYXj4s,5HEXVAHY9gyavj5xnbov9Qoba4hPJYkkwwnq1MQFepLK7Gei --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y --proportions 0.3,0.7  --subtensor.chain_endpoint ws://localhost:9946 --wallet.name Alice
```

## Getting the child hotkeys

```bash
btcli stake get_children --netuid 4 --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y --subtensor.chain_endpoint ws://localhost:9945
```

or

```bash
btcli stake get_children --subtensor.chain_endpoint ws://localhost:9945
```
and follow the prompts.

## Revoking the child hotkeys

```bash
btcli stake revoke_children --netuid 4 --hotkey 5DqJdDLU23m7yf6rZSmbLTshU7Bfn9eCTBkduhF4r9i73B9Y --subtensor.chain_endpoint ws://localhost:9946 --wallet.name Alice
```

or

```bash
btcli stake revoke_children  --subtensor.chain_endpoint ws://localhost:9945
```
and follow the prompts.
