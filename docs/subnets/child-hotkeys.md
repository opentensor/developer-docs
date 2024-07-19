---
title: "Child Hotkeys"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Child Hotkeys

This guide describes the **child hotkeys** feature and how to use it. With the child hotkeys, a subnet validator is no longer required to use the same hotkey for every subnet they validate in. The subnet validator can use a separate **child hotkey** per subnet. The subnet validator does this by re-delegating a portion of their stake from their hotkey to this separate child hotkey on a subnet. The originating hotkey is called the **parent hotkey**. 

The owner of this child hotkey would then validate in the subnet, in exchange for a percentage `take` from the resulting dividends, and would pass on the remaining dividends to the parent hotkey owner.

## Security for subnet validators

Re-delegating stake to multiple child hotkeys enhances the security of the parent hotkey's stake. 

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

See the above diagram. Without the child hotkeys, a subnet validator's delegate hotkey would be a single point of failure. An attacker only needs to get hold of a delegate hotkey from any one subnet in order to drain all the stake from this hotkey, thereby crippling this subnet validator in all their subnets across the entire Bittensor network. 

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


See the above diagram. With the child hotkeys, if an attacker steals a child hotkey, then only that fraction of the re-delegated stake is at risk. Furthermore, only those subnets are at risk where this child hotkey is used as the delegate hotkey.

## Child hotkey owners

A child hotkey and a parent hotkey need not be owned by the same entity. The following applies:

- A validator can re-delegate to a hotkey of any other validator on a subnet. After re-delegation, the hotkey that is the source of the stake is called **parent hotkey** and the hotkey that receives this re-delegated stake is called **child hotkey**. 
  :::tip "Child hotkey" and "parent hotkey" are terms of convenience
  The terms "child hotkey" and "parent hotkey" are only terms of convenience. There is nothing inherently different about a "child hotkey" that separates it from a "parent hotkey". Neither have any special attributes compared to a normal hotkey.
  :::

- A validator can also re-delegate to a subnet owner's hotkey. The subnet owner would then do the validation work on the subnet, in exchange for a percentage `take` from the resulting dividends. 
  :::tip Increased bandwidth for the subnet owner
  A subnet owner can increase their access bandwidth into their own subnet in this way.
  :::

## Example

Show Mira board example of how the emissions flow, showing dividends and take %s with one child hotkey and one parent hotkey in a subnet. 

## Installing

Installation instructions

## Using

Document all supported child hotkey command options for `btcli`. 
