---
title: "Guide to Dynamic TAO"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Guide to Dynamic TAO

Dynamic TAO is a sophisticated mechanism for both a TAO holder and a validator to manage their stake, influence, and governance across multiple subnets in the Bittensor network. More important, the dynamic TAO:

- Eliminates the role of the centralized root network. 
- Enables a TAO holder to participate in a subnet of their choice.
- Creates a new measure of a subnet's performance via the subnet-specific dynamic TAO token (dTAO). A dTAO token is exchangeable with TAO.
- Incorporates the consensus power of a validator into their dTAO token stake holdings. 
- Uses a subnet's dTAO to determine emissions to the subnet. 

The dynamic TAO elegantly solves the problem of managing influence across different subnet economies while maintaining mathematical consistency and economic incentives.

## Subnet pool

The heart of the dynamic TAO mechanism is a **subnet pool**, with the following properties:

- Associated with each subnet is a subnet pool. 
- A subnet pool consists of two token reserves, a TAO token reserve and a subnet-specific dTAO token reserve.
- Each subnet has its own dTAO token. For example, dTAO α is the token for subnet α, dTAO β is the token for subnet β, and so on.
- All token exchanges between TAO and dTAO occur through the subnet pool. The subnet pool's reserve ratio determines the exchange rate.

<center>
<ThemedImage
alt="Subnet Pool"
sources={{
    light: useBaseUrl('/img/docs/dynamic-tao/subnet-pools.svg'),
    dark: useBaseUrl('/img/docs/dynamic-tao/subnet-pools.svg'),
  }}
style={{width: 450}}
/>
</center>

<br />

## TAO reserve (τ_in) and alpha reserve (α_in)

The TAO side of a subnet pool's reserves are denoted by τ_in, or **TAO reserve**, and are expressed in units of TAO. Similarly, the  dTAO side of the pool reserves are denoted by α_in, or **alpha reserves**. The terms α_in and **alpha reserves** are general terms and refer to the pool reserves of all subnets, including that of subnet α.

---

## Rate (τ_in/α_in)

We use the term **rate** to refer to the exchange rate between TAO and a subnet dTAO token. The exchange rate of a dTAO token is calculated as a ratio of the subnet's pool reserves, i.e., TAO reserve(τ_in) / alpha reserves (α_in). This can change every block when staking or unstaking or emissions occur on this subnet.

---




## Stake (α)                    

Stake this hotkey holds in the subnet, expressed in subnet's dynamic TAO currency. This can change whenever staking or unstaking occurs on this hotkey in this subnet.

## STAKE (α_out)
 
Total stake in the subnet, expressed in the subnet's dynamic TAO currency. This is the sum of all the stakes present in all the hotkeys in this subnet. This can change every block.

## TAO Reserves (τ_in)

Units of TAO in the TAO reserves for this subnet. Attached to every subnet is a subnet pool, containing a TAO reserve and the alpha reserve. See also [Alpha Reserves (α_in)](#alpha-reserves-α_in) description. This can change every block when staking or unstaking or emissions occur on this subnet.

## Alpha Reserves (α_in)

Units of subnet dTAO token in the dTAO pool reserves for this subnet. This reserve, together with [TAO Reserves(τ_in)](#tao-reserves-τ_in), form the subnet pool for every subnet. This can change every block when staking or unstaking or emissions occur on this subnet.

 ## RATE (τ_in/α_in)
 
 Exchange rate between TAO and subnet dTAO token. Calculated as (TAO Reserves(τ_in) / Alpha Reserves (α_in)). This can change every block when staking or unstaking or emissions occur on this subnet.

 ## Alpha out (α_out)            
 
 Total stake in the subnet, expressed in subnet's dynamic TAO currency. This is the sum of all the stakes present in all the hotkeys in this subnet. This can change every block.

 ## TAO Equiv (τ_in x α/α_out)
 
 TAO-equivalent value of the hotkeys stake α (i.e., Stake(α)). Calculated as (TAO Reserves(τ_in) x (Stake(α) / ALPHA Out(α_out))). This value is weighted with (1-γ), where γ is the local weight coefficient, and used in determining the overall stake weight of the hotkey in this subnet. Also see the "Local weight coeff (γ)" column of "btcli subnet list" command output. This can change every block.

 ## Exchange Value (α x τ/α)
 
 This is the potential τ you will receive, without considering slippage, if you unstake from this hotkey now on this subnet. See Swap(α → τ) column description. Note: The TAO Equiv(τ_in x α/α_out) indicates validator stake weight while this Exchange Value shows τ you will receive if you unstake now. This can change every block.

 ## Swap (α → τ)                 
 
 This is the actual τ you will receive, after factoring in the slippage charge, if you unstake from this hotkey now on this subnet. The slippage is calculated as 1 - (Swap(α → τ)/Exchange Value(α x τ/α)), and is displayed in brackets. This can change every block.

 ## Emission (α/block)
 
 Shows the portion of the one α per block emission into this subnet that is received by this hotkey, according to YC2 in this subnet. This can change every block.

 ## Emission (τ)
 
 Shows how the one τ per block emission is distributed among all the subnet pools. For each subnet, this fraction is first calculated by dividing the subnet's TAO Pool (τ_in) by the sum of all TAO Pool (τ_in) across all the subnets. This fraction is then added to the TAO Pool (τ_in) of the subnet. This can change every block.



 ## RATE (τ_in/α_in)
 
 Exchange rate between TAO and subnet dTAO token. Calculated as (TAO Pool (τ_in) / Alpha Pool (α_in)). This can change every block.

 ## Tempo (k/n)
 
 The tempo status of the subnet. Represented as (k/n) where "k" is the number of blocks elapsed since the last tempo and "n" is the total number of blocks in the tempo. The number "n" is a subnet hyperparameter and does not change every block.

 ## Local weight coeff (γ)
 
 A multiplication factor between 0 and 1, applied to the relative proportion of a validator's stake in this subnet. Applied as (γ) × (a validator's α stake in this subnet) / (Total α stake in this subnet, i.e., Stake (α_out)). This γ-weighted relative proportion is used, in addition to other factors, in determining the overall stake weight of a validator in this subnet. This is a subnet parameter.