---
title: "Understanding pricing and anticipating slippage"
---

# Understanding pricing and anticipating slippage

Each Bittensor subnet operates as a *constant product AMM*, meaning that it will accept trades that conserve the product of the quantities of the two tokens in reserve, TAO and alpha. To calulate the price in one token of batch of the other token that a buyer wishes to acquire&mdash;alpha if they are staking, or TAO if they are unstaking&mdash;the algorithm assumes that the transaction does not change this product, so the product of TAO and alpha is the same before and after.

When staking, the product K of TAO in reserve and alpha in reserve is the same before and after the transaction, so the initial product must be equal to the product after the cost in TAO is added to the reserve, and the stake is removed from the reserve and placed in the staked hotkey:

$$
\tau_{\mathrm{in}} \,\alpha_{\mathrm{in}} = k
$$
$$
(\tau_{\mathrm{in}} + \text{cost}) \bigl(\alpha_{\mathrm{in}} - \text{stake}\bigr) = k
$$
$$
(\tau_{\mathrm{in}} + \text{cost}) \bigl(\alpha_{\mathrm{in}} - \text{stake}\bigr) 
  = \tau_{\mathrm{in}} \,\alpha_{\mathrm{in}}
$$


This means that if we choose to stake in a certain amount of TAO (if we specify the cost), then the yielded stake (the quantity of alpha to be removed from reserve and granted to the staked hotkey) is:

$$
\text{Stake} = \alpha_{\text{in}} - \frac{\tau_{\text{in}} \alpha_{\text{in}}} {\tau_{\text{in}} + \text{cost}}

$$

For example, suppose that a subnet has 100 alpha in reserve and 10 TAO, and we want to stake in 5 TAO.

The price at this moment is 10 TAO / 100 alpha, or 10 alpha per TAO, so if we stake 5 TAO, we would expect 50 alpha, without taking slippage into account.

With slippage, the yielded alpha stake will be:

$$
\text{Stake} = 100 - \frac{ 10 * 100} {10 + 5}

$$

or 33.333 alpha sent to the hotkey. So in this case, the slippage is the difference between the ideal expectation of 50 and the actual swap value of 33.33333:
$$
16.667 = 50 - 33.333
$$

This slippage is 50% of the actual swap value, which is extremely high, because we chose small values for the available liquidity. In general, slippage is high when available liquidity is limited compared to the magnitude of the transaction, since the transaction itself is changing the price significantly.

:::tip
`btcli` shows the slippage of staking and unstaking operations, so you don't need to calculate it yourself. See [Stake into a node](#stake-into-a-node).
:::

