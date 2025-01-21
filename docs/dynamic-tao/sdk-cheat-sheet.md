---
title: "Dynamic Tao SDK Cheat Sheet"
---

This page provides a quick reference for the core functionalities for the Bittensor Python SDK that have changed for [Dynamic TAO](./index.md).


Updates to the `async_subtensor` module and the `DynamicInfo` class provide new ways to view information related to new Dynamic TAO features, such as alpha token prices and token reserves amounts.

## Updating your SDK

### option 1: use the rc...
### option 2: install from source...



## The `DynamicInfo` object

The state of a subnet, with all of the new attributes, is encapsulated in a `DynamicInfo` object. This is what is returned by the `subnet` and `all_subnets` methods.

```
@dataclass
class DynamicInfo:
    netuid: int
    owner_hotkey: str
    owner_coldkey: str
    subnet_name: str
    symbol: str
    tempo: int
    last_step: int
    blocks_since_last_step: int
    emission: Balance
    alpha_in: Balance
    alpha_out: Balance
    tao_in: Balance
    price: Balance
    k: float
    is_dynamic: bool
    alpha_out_emission: Balance
    alpha_in_emission: Balance
    tao_in_emission: Balance
    pending_alpha_emission: Balance
    pending_root_emission: Balance
    network_registered_at: int
    subnet_identity: Optional[SubnetIdentity]

```
## Viewing subnets
Subnets evolve substantially in Dynamic TAO! Each subnet has its own currency, known as its alpha token, and an internal economy comprising a currency reserve of TAO, a reserve of its own alpha token, and a ledger of staked balances, to keep track of all of its stakers&mdash;those who have put TAO into its reserve in exchange for alpha.

### `async_subtensor.all_subnets`
```python
async all_subnets(
    block_number: Optional[int] = None
) -> List[DynamicInfo]

```

Description: Fetches information about all subnets at a certain block height (or current block if None).
Returns: A list of DynamicInfo objects (detailed below).

### `async_subtensor.subnet`
```python
async subnet(
    netuid: int, 
    block_number: Optional[int] = None
) -> DynamicInfo

```
Description: Fetches information about a single subnet identified by netuid.
Returns: A DynamicInfo object describing the subnet’s current state (see section Subnet DynamicInfo).

### `async_subtensor.metagraph`
```python
async metagraph(
    netuid: int, 
    block: Optional[int] = None
) -> bittensor.Metagraph
```
Description: Returns the metagraph for a specified subnet netuid. The metagraph includes detailed data on the neurons in the subnet.

## Calculating exchange rates
### `DynamicInfo.tao_to_alpha`
```python
tao_to_alpha(self, tao: Balance) -> Balance
```
Description: Returns an 'ideal' estimate of how much Alpha a staker would receive at the current price, *ignoring slippage*.
Parameters:
    `tao`: Amount of TAO to stake.
### `alpha_to_tao`
```python
alpha_to_tao(self, alpha: Balance) -> Balance
```
Description: Returns an 'ideal' estimate of how much TAO would be yielded by unstaking at the current price, *ignoring slippage*.
Parameters:
    `alpha`: Amount of Alpha to unstake.

### `DynamicInfo.tao_to_alpha_with_slippage`
```python
tao_to_alpha(self, tao: Balance) -> Balance

```
Returns an estimate of how much Alpha would a staker receive if they stake their tao using the current pool state.
Parameters:
    `tao`: Amount of TAO to stake.
Returns:
    Tuple of balances where the first part is the amount of Alpha received, and the
    second part (slippage) is the difference between the estimated amount and ideal
    amount as if there was no slippage
### `DynamicInfo.alpha_to_tao_with_slippage`

Returns an estimate of how much TAO would a staker receive if they unstake their alpha using the current pool state.
Parameters:
    `alpha`: Amount of Alpha to unstake.
Returns:
    Tuple of balances where the first part is the amount of TAO received, and the
    second part (slippage) is the difference between the estimated amount and ideal
    amount as if there was no slippage

## Staking and unstaking

### `async_subtensor.add_stake`

```python
async add_stake(
    wallet, 
    hotkey: str, 
    netuid: int, 
    tao_amount: Union[float, bittensor.Balance, int]
)
```
Description: Adds (stakes) an amount of TAO (tao_amount) to a specific subnet (netuid) under the provided hotkey.

Parameters:
- wallet: Your Bittensor wallet object.
- hotkey: The SS58 address (hotkey) to be staked.
- netuid: Unique ID of the subnet on which you want to stake.
- tao_amount: Amount to stake, can be a float, integer, or bittensor.Balance object.

### `async_subtensor.unstake`
```python
async unstake(
    wallet, 
    hotkey: str, 
    netuid: int, 
    amount: Union[float, bittensor.Balance, int]
)

```

Description: Unstakes amount of TAO from the specified hotkey on a given netuid.
Parameters:
- wallet: Your Bittensor wallet object.
- hotkey: The SS58 address (hotkey) from which you want to remove stake.
- netuid: Unique ID of the subnet.
- amount: Amount to unstake.

### `async_subtensor.get_stake`
```python
async def get_stake(
    hotkey_ss58: str, 
    coldkey_ss58: str, 
    netuid: int
) -> bittensor.Balance

```

Description: Retrieves the staked balance for a given (hotkey, coldkey) pair on a specific subnet.
Parameters:
    hotkey_ss58: Hotkey SS58 address.
    coldkey_ss58: Coldkey SS58 address (owner).
    netuid: Unique ID of the subnet.
Returns: bittensor.Balance object with the staked amount.


### `async_subtensor.get_balance`
```python
async def get_balance(
    address: str, 
    block: Optional[int] = None
) -> bittensor.Balance

```

Description: Returns the current (or specified block’s) coldkey TAO balance for an address.
Parameters:
    address: SS58 address to check.
    block: Optional block number at which to fetch the balance. Uses the latest block if None.




### `async_subtensor.get_current_block`
```python
async def get_current_block() -> int

```
    Description: Returns the current chain block number.
### `async_subtensor.wait_for_block`
```python
async def wait_for_block(
    block: Optional[int] = None
)

```
Description: Waits for the next block to arrive or waits until a specified block number is reached if provided.


## Examples
example calling multiple staking operation

Update: we have added proper nonce protection allowing you to run gather operations on stake/unstake/transfers 
scatter_stake = await asyncio.gather(*[ sub.add_stake( hotkey, coldkey, netuid, amount ) for netuid in range(64) ] )


example DCA'ing into multiple subnets
```
# DCA 1000 TAO into these subnets over many blocks
to_buy = [1, 277, 18, 5]
increment = 0.01
total_spend = 0
stake = {}
while total_spend < 1000:
    for netuid in to_buy:
        subnet = await sub.subnet(netuid)
        await sub.add_stake( 
            wallet = wallet, 
            netuid = netuid, 
            hotkey = subnet.owner_hotkey, 
            tao_amount = increment, 
        )
        current_stake = await sub.get_stake(
            coldkey_ss58 = wallet.coldkeypub.ss58_address,
            hotkey_ss58 = subnet.owner_hotkey,
            netuid = netuid,
        )
        stake[netuid] = current_stake
        total_spend += increment
    print ('netuid', netuid, 'price', subnet.price, 'stake', current_stake )
    await sub.wait_for_block()




```