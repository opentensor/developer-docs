---
title: "Dynamic Tao SDK Cheat Sheet"
---

This page provides a quick reference for the core functionalities for the Bittensor Python SDK that have changed for [Dynamic TAO](./index.md).


Updates to the `subtensor` and `async_subtensor` modules and the `DynamicInfo` class provide new ways to view information related to new Dynamic TAO features, such as alpha token prices and token reserves amounts.

## Updating your SDK

### option 1: use the release candidate

To update to the Dynamic TAO-enabled versions of the SDK, run:

```
pip install bittensor==8.5.1rc6
```

### option 2: install from source

1. Clone the Bittensor repository from GitHub: [`https://github.com/opentensor/bittensor`](https://github.com/opentensor/bittensor)
1. Check out the `rao` branch.
1. Run `pip install .`


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

### `subtensor.all_subnets`
```python
async all_subnets(
    block_number: Optional[int] = None
) -> List[DynamicInfo]

```

Description: Fetches information about all subnets at a certain block height (or current block if None).
Returns: A list of DynamicInfo objects (detailed below).

### `subtensor.subnet`
```python
async subnet(
    netuid: int, 
    block_number: Optional[int] = None
) -> DynamicInfo

```
Description: Fetches information about a single subnet identified by netuid.
Returns: A DynamicInfo object describing the subnet’s current state (see section Subnet DynamicInfo).

### `subtensor.metagraph`
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

### `subtensor.add_stake`

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

### `subtensor.unstake`
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

### `subtensor.get_stake`
```python
async def get_stake(
    hotkey_ss58: str, 
    coldkey_ss58: str, 
    netuid: int
) -> bittensor.Balance

```

Description: Retrieves the staked balance for a given (hotkey, coldkey) pair on a specific subnet. Returns a `bittensor.Balance` object with the staked amount.
Parameters:
- hotkey_ss58: Hotkey SS58 address.
- coldkey_ss58: Coldkey SS58 address (owner).
- netuid: Unique ID of the subnet.




### `subtensor.get_balance`
```python
async def get_balance(
    address: str, 
    block: Optional[int] = None
) -> bittensor.Balance

```

Description: Returns the current (or specified block’s) coldkey TAO balance for an address.

Parameters:
- address: SS58 address to check.
- block: Optional block number at which to fetch the balance. Uses the latest block if None.




### `subtensor.get_current_block`
```python
async def get_current_block() -> int

```
Description: Returns the current chain block number.
### `subtensor.wait_for_block`
```python
async def wait_for_block(
block: Optional[int] = None
)

```
Description: Waits for the next block to arrive or waits until a specified block number is reached if provided.

Update: we have added proper nonce protection allowing you to run gather operations on stake/unstake/transfers 
scatter_stake = await asyncio.gather(*[ sub.add_stake( hotkey, coldkey, netuid, amount ) for netuid in range(64) ] )


## Example: use simple dollar cost averaging (DCA) to stake TAO into several subnets over many blocks:

```python

import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(name="ExampleWalletName")
wallet.unlock_coldkey()

to_buy = [119, 277, 18, 5]
increment = 0.01
total_spend = 0
stake = {}

while total_spend < 3:
    for netuid in to_buy:
        subnet = sub.subnet(netuid)
        print(subnet.slippage(100))
        sub.add_stake( 
            wallet = wallet, 
            netuid = netuid, 
            hotkey = subnet.owner_hotkey, 
            tao_amount = increment, 
        )

        current_stake = sub.get_stake(
            coldkey_ss58 = wallet.coldkeypub.ss58_address,
            hotkey_ss58 = subnet.owner_hotkey,
            netuid = netuid,
        )
        stake[netuid] = current_stake
        total_spend += increment
        print ('netuid', netuid, 'price', subnet.price, 'stake', current_stake )
    sub.wait_for_block()
```