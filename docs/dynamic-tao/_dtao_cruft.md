
### Example

Consider the following subnets:

#### Case 1: Sum of alpha prices greater than 1

1. Gaming Subnet:
   - TAO reserve (τ_in): 10,000 TAO
   - Alpha reserve (α_in): 8,000 Alpha 
   - Alpha outstanding (α_out): 50,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{10000}{8000} = 1.25 $$

2. AI Subnet:
   - TAO reserve (τ_in): 15,000 TAO
   - Alpha reserve (α_in): 15,000 Alpha 
   - Alpha outstanding (α_out): 80,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{15000}{15000} = 1.0 $$
  
3. Storage Subnet:
   - TAO reserve (τ_in): 5,000 TAO
   - Alpha reserve (α_in): 10,000 Alpha 
   - Alpha outstanding (α_out): 30,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{5000}{10000} = 0.5 $$

Hence, sum of all alpha prices $$ = 1.25 + 1.0 + 0.5 = 2.75 \gt 1.0 $$

As a result, the emissions to the subnets are as follows:

1. Emissions to the Gaming Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

2. Emissions to the AI Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
  
3. Emissions to the Storage Subnet:
   - Emission into TAO reserve (τ_in): 0 TAO
   - Emission into alpha reserve (α_in): 1.0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha

#### Case 2: Sum of alpha prices less than 1

Let's change the state of the subnets to the below:

1. Gaming Subnet:
   - TAO reserve (τ_in): 10,000 TAO
   - Alpha reserve (α_in): **40,000** Alpha 
   - Alpha outstanding (α_out): 50,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{10000}{40000} = 0.25 $$

2. AI Subnet:
   - TAO reserve (τ_in): 15,000 TAO
   - Alpha reserve (α_in): **50,000** Alpha 
   - Alpha outstanding (α_out): 80,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{15000}{50000} = 0.3 $$
  
3. Storage Subnet:
   - TAO reserve (τ_in): 5,000 TAO
   - Alpha reserve (α_in): **25,000** Alpha 
   - Alpha outstanding (α_out): 30,000 Alpha
   - Hence alpha price = $$ R = \frac{\tau_{in}}{\alpha_{in}} = \frac{5000}{25000} = 0.2 $$

Hence, sum of all alpha prices $$ = 0.25 + 0.3 + 0.2 = 0.75 \lt 1.0 $$

As a result, the emissions to the subnets are as follows:

1. Total TAO reserves across all 3 subnets: 10,000 + 15,000 + 5,000 = 30,000 TAO
2. Emissions to the Gaming Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{10,000}{30,000} = 0.3333 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (10,000 + 0.3333) × 40,000 = 400,013,320

3. Emissions to the AI Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{15,000}{30,000} = 0.5 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (15,000 + 0.5) × 50,000 = 750,025,000
  
4. Emissions to the Storage Subnet:
   - Emission into TAO reserve (τ_in): $$\;  \frac{5,000}{30,000} = 0.1667 \text{ TAO}$$
   - Emission into alpha reserve (α_in): 0 Alpha 
   - Emission into alpha outstanding (α_out): 1.0 Alpha
   - New $k$ = (5,000 + 0.1667) × 25,000 = 125,004,175

- Note that all the TAO emissions in the block sum to 1.0 (0.3333 + 0.5 + 0.1667).
- Also note that the emissions change the constant product $k$ for each subnet. 


### Emission (alpha)

Represents the portion of the one $\alpha$ per block emission into a subnet that is received by this hotkey in this subnet, according to YC2 in the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

### Emission (TAO)

Shows how a fraction of the one τ per block emission is distributed among all the subnet pools. For each subnet, this fraction is first calculated by dividing the subnet's TAO Pool (τ_in) by the sum of all TAO Pool (τ_in) across all the subnets. This fraction is then added to the TAO Pool (τ_in) of the subnet. This can change every block.

:::caution Subnet zero does not receive any emissions
Subnet zero does not receive any emissions, either of TAO or $\alpha$. This is consistent with the fact that subnet zero does not have a pool associated with it.
:::

---


## Tempo

The tempo status of the subnet. Represented as $$\frac{k}{n}$$ where "k" is the number of blocks elapsed since the last tempo and "n" is the total number of blocks in the tempo. The number "n" is a subnet hyperparameter and does not change every block.

---


## Slippage
## Exchange Value

This is the potential instantaneous TAO you will receive, without considering slippage, if you [unstake](#unstaking) at this instant from this hotkey on this subnet. See [Swap](#swap) description. This can change every block.

:::tip Compare with TAO Equiv 
Whereas the [TAO Equiv](#local-weight-or-tao-equiv) indicates a validator's local stake weight, this Exchange Value shows TAO you will receive if you unstake now. 
:::

## Swap

This is the actual τ you will receive, after subtracting in the slippage charge, if you unstake from this hotkey now on this subnet. The slippage is calculated as:

$$
\text{Slippage} = 1 - \frac{\text{Swap(α → τ)}}{\text{Exchange Value}(α \times τ/α)}
$$

This can change every block.

---

:::danger The Emissions section is preliminary
The below Emissions section is still not settled yet. Proceed with caution.
:::



### Constant product k 

The subnet pool algorithm is set up to always maintain a **constant product** $k$ of the two reserves. That is, 

$$
k = \text{(TAO reserves)}\times\text{(α reserves)}
$$

Anytime either of the reserves **increases**, for example as a result of a random external action such as some stake TAO entering the pool, the subnet pool algorithm automatically recalculates, using the new reserves, how much the other reserve should **decrease** in order to maintain the same constant product $$k$$. 

:::tip Staking and unstaking do not change the constant product
Staking and unstaking operations do not change the constant product $k$, but result in **slippage** due to the fact that these are exchange (i.e., swap) operations. On the contrary, emissions into a subnet pool do change the constant product $k$ but do not result in slippage, due to the fact that these are not swap operations. See [Slippage](#slippage). Also see [Emissions](#emissions).
:::

### Slippage

When we stake we exchange TAO for the alpha token in the pool. The following occurs while we stake:
1. Prior to the staking operation, we know the expected price of the alpha token. This expected price is the reserve ratio, as described in [Rate](#rate-τ_inα_in), prior to the staking operation. 
2. However, the very action of our staking changes the token reserve ratio, because we are adding TAO to the TAO reserves. 
3. Mathematically the pool is required to maintain the constant product $k$. As a result, the pool algorithm automatically adjusts the alpha token reserves to keep the constant product $k$ unchanged. This results in a change in the reserve ratio.
4. This means that the actual price at which our staking operation is executed is different from our original expected price of the alpha token. This difference between the original expected alpha token price and the actual actual token price at which staking operation is performed is called **slippage**.

### Example

As described in the [Staking](#staking) section, a staking event results in the staked TAO being added to the τ_in reserves of the subnet pool. The subnet pool algorithm calculates the number of units by which the $\alpha_{in}$ reserves should decrease. These units are then taken out of the $\alpha_{in}$ reserves and sent to the validator’s hotkey in the subnet. See an example below.

The below example shows how staking 5 TAO works. 

Let us assume the following initial state of TAO and $\alpha$ reserves in a subnet:
- TAO reserves: 10 TAO tokens
- $\alpha$ reserves: 100 $\alpha$ tokens

Hence, the constant product 𝑘 = 10 × 100 =1000.

**Without slippage**

- Expected price of $$\alpha$$ token:

$$
= \frac{\text{TAO reserves}}{\text{α reserves}} = \frac{10}{100} = \text{0.1 TAO per α}
$$

- Hence, the expected number of α tokens:

$$
\text{} = \frac{\text{TAO staked}}{\text{Expected α price}} = \frac{5}{0.1} = \text{50 α tokens} 
$$

**With slippage**

- **Initial relative price** of $\alpha$ is = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/($\alpha$ token reserves) = 10/100 = 0.1 TAO.
- Stake 5 TAO: This adds 5 TAO into the TAO reserves of the pool. Hence, the new TAO reserve = 10 + 5 = 15 TAO tokens.
- Using the new TAO reserve of 15, the subnet pool algorithm calculates what should be the new $\alpha$ reserves, in order to maintain k at 1000. 
- Calculating: 
$$
\begin{split}
& 15 \times\text{new α reserves} = 1000\\ 
\implies & \text{new α reserves} = 1000/15 = 66.667 \text{ α}.
\end{split}
$$

- Hence, the $\alpha$ that is **taken out of** the $α_{in}$ reserve and sent to the validator’s hotkey is: 
$$
\text{Stake in α tokens} = 100 − 66.67 = 33.33 \text{ α}
$$

Hence, when you stake 5 TAO, your stake is $$33.33 \text{ α}$$, taking into account the slippage. As a result:

- Slippage in terms of $$\alpha$$ tokens:

$$
\begin{split}
\text{Slippage} & = \text{Expected α tokens} - \text{Actual α tokens obtained}\\
& = 50-33.33 = 16.6667 α
\end{split}
$$

- The percentage of slippage:

$$
\begin{split}
\text{Percentage slippage} & = \frac{\text{Slippage α tokens}}{\text{Expected α tokens}}\times 100\% \\
& = \frac{16.6667}{50}\times 100\% \\
& = 33.333\% 
\end{split}
$$

### Effect of slippage

- TAO reserves: 15 tokens
- $\alpha$ reserves: 66.67 $\alpha$ tokens
- Constant product 𝑘 = 15 × 66.67 = 1000 (unchanged)
- **New relative price** of $\alpha$ after the staking event = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/($\alpha$ token reserves) = 15/66.67 = 0.225 TAO.
- **Price impact due to slippage**: As a result of the slippage, staking 5 TAO into subnet $\alpha$ changed the relative price of $\alpha$ token: it **increased** from 0.1 TAO to 0.225 TAO. All else being equal, slippage leads to an increase in $\alpha$ token's relative price when we stake.




The below example shows how unstaking 20 $\alpha$ works. Let’s continue with the state of the TAO and $\alpha$ reserves after the [above staking operation](#example-1):

- TAO reserves: 15 tokens
- $\alpha$ reserves: 66.67 $\alpha$ tokens
- Constant product 𝑘 = 15 × 66.67 = 1000

**Without slippage**

:::tip Don't know what slippage is?
See [Slippage](#slippage) if you are not familiar with it. 
:::

- Expected price of $$\alpha$$ token before unstaking:

$$
= \frac{\text{TAO reserves}}{\text{α reserves}} = \frac{15}{66.667} = \text{0.225 TAO per α}
$$

- Hence, the expected number of TAO tokens:

$$
\begin{split}
\text{} & = \text{α unstaked}\times{\text{Expected α price}}\\
& = 20\times0.225 \\
&= \text{4.5 TAO tokens} 
\end{split}
$$


**With slippage**

- Relative price $\alpha$ is = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/($\alpha$ token reserves) = 15/66.67 = 0.225 TAO (same as the relative price after the above staking operation)
- Unstake 20 $\alpha$: This adds 20 $\alpha$ to the $\alpha$ side of the pool. New $\alpha$ reserves = 66.67 + 20 = 86.67 $\alpha$ tokens.
- Using the new $\alpha$ reserve of 86.67, the subnet pool algorithm calculates what should be the new TAO reserve in order to maintain $k$ at 1000. 
- Calculating: 

$$  
\begin{split}
& 86.67 \times\text{new TAO reserves} = 1000\\
\implies & \text{new TAO reserves} = 1000/86.67 = 11.54 \text{ TAO}
\end{split}
$$

- Hence, the TAO that is taken out of the TAO reserves of the pool and sent to the TAO holder’s coldkey is: 15 − 11.54 = 3.46 TAO.
$$
\text{Unstaked TAO tokens} = 15 − 11.54 = 3.46 \text{ TAO}
$$

Hence, when you unstake 20 $$\text{α}$$, your unstaked TAO is $$3.46 \text{ TAO}$$, taking into account the slippage. As a result:

- Slippage in terms of TAO tokens:

$$
\begin{split}
\text{Slippage} & = \text{Expected TAO tokens} - \text{Actual TAO tokens obtained}\\
& = 4.5-3.46 = 1.04\text{ TAO}
\end{split}
$$

- The percentage of slippage:

$$
\begin{split}
\text{Percentage slippage} & = \frac{\text{Slippage TAO tokens}}{\text{Expected TAO tokens}}\times 100\% \\
& = \frac{1.04}{4.5}\times 100\% \\
& = 23.1\% 
\end{split}
$$

### Effect of slippage

- TAO reserves: 11.54 TAO tokens
- $\alpha$ reserves: 86.67 $\alpha$ tokens
- Constant product 𝑘 = 11.54 × 66.67 = 1000 (unchanged)
- **New relative price** of $\alpha$ after the unstaking event = reserve ratio of subnet pool $\alpha$ = (TAO token reserves of pool $\alpha$)/($\alpha$ token reserves) = 11.54/86.67 = 0.133 TAO per $\alpha$.
- **Price impact due to slippage**: As a result of slippage, unstaking 20  $\alpha$ changed the $\alpha$ price: it **decreased** from 0.225 TAO to 0.113 TAO. All else being equal, unstaking from a subnet leads to a decrease in its $\alpha$ token's relative price. 

---


### Constant product vs. relative price

The constant product $k$ is a critical concept to understand how the relative price of an alpha token works. See the following: 
  - A subnet pool algorithm operates purely on the basis of maintaining the constant product $k$. The pool algorithm does not have any built-in mechanism to either target or maintain specific prices for the alpha tokens of a subnet. 
  - The relative price of an alpha token is only **indirectly** determined by the ratio of the token reserves. Furthermore, controlling these relative prices is **not the goal of the pool algorithm**. 
  - Hence, the relative price of a token **is a result, not a target,** of the token exchange activity.