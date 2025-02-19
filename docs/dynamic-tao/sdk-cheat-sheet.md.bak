---
title: "Dynamic TAO SDK Cheat Sheet"
---

This page provides a quick reference for the core functionalities for the Bittensor Python SDK that have changed for [Dynamic TAO](./index.md), and some example scripts to demonstrate functionality such as [viewing exchange rates](#example-viewing-exchange-rates) and [staking and unstaking](#example-staking-and-unstaking) into subnets.


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


## Using the SDK for sync or async requests

The Bittensor `subtensor` and `async_subtensor` modules offer the synchronous and asynchronous options for the same functionality.

Import bittensor and alias the correct module, for example, the following configuration for async calls to the Bittensor test network:

    ```python
    import bittensor as bt
    sub = bt.AsyncSubtensor(network="test")
    ```

Or the following configuration for synchronous calls to Bittensor mainnet ('finney'):

    ```python
    import bittensor as bt
    sub = bt.Subtensor(network="finney")
    ```


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

### `all_subnets`
```python
all_subnets(
    block_number: Optional[int] = None
) -> List[DynamicInfo]

```

Description: Fetches information about all subnets at a certain block height (or current block if None).
Returns: A list of DynamicInfo objects (detailed below).

### `get_netuids`
```python
get_netuids(self, block: Optional[int] = None) -> list[int]

```
Retrieves a list of all subnets currently active within the Bittensor network. This function provides an overview of the various subnets and their identifiers.

Parameters:
    - block (Optional[int]): The blockchain block number for the query.

Returns:
- `list`[int]: A list of network UIDs representing each active subnet.



### `subnet`
```python
subnet(
    netuid: int, 
    block_number: Optional[int] = None
) -> DynamicInfo

```
Description: Fetches information about a single subnet identified by netuid.
Returns: A DynamicInfo object describing the subnet’s current state (see section Subnet DynamicInfo).

### `metagraph`
```python
metagraph(
    netuid: int, 
    block: Optional[int] = None
) -> bittensor.Metagraph
```
Description: Returns the metagraph for a specified subnet netuid. The metagraph includes detailed data on the neurons in the subnet.

## Calculating exchange rates
### `tao_to_alpha`
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

### `tao_to_alpha_with_slippage`
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

### `alpha_to_tao_with_slippage`

Returns an estimate of how much TAO would a staker receive if they unstake their alpha using the current pool state.
Parameters:
    `alpha`: Amount of Alpha to unstake.
Returns:
    Tuple of balances where the first part is the amount of TAO received, and the
    second part (slippage) is the difference between the estimated amount and ideal
    amount as if there was no slippage

## Managing stake

### `get_stake`
```python
get_stake(
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



### `add_stake`

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

### `unstake`
```python
unstake(
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


### `get_balance`
```python
get_balance(
    address: str, 
    block: Optional[int] = None
) -> bittensor.Balance

```

Description: Returns the current (or specified block’s) coldkey TAO balance for an address.

Parameters:
- address: SS58 address to check.
- block: Optional block number at which to fetch the balance. Uses the latest block if None.




### `get_current_block`
```python
get_current_block() -> int

```
Description: Returns the current chain block number.
### `wait_for_block`
```python
wait_for_block(
block: Optional[int] = None
)

```
Description: Waits for the next block to arrive or waits until a specified block number is reached if provided.

Update: we have added proper nonce protection allowing you to run gather operations on stake/unstake/transfers 
scatter_stake = await asyncio.gather(*[ sub.add_stake( hotkey, coldkey, netuid, amount ) for netuid in range(64) ] )


## Example: Viewing exchange rates

The following script displays exchange rates for a subnet alpha token, with and without slippage.

```
import bittensor as bt

sub = bt.Subtensor(network="test")
subnet = sub.subnet(netuid=1)

print("alpha_to_tao_with_slippage", subnet.alpha_to_tao_with_slippage(100))
print("alpha_to_tao_with_slippage percentage", subnet.alpha_to_tao_with_slippage(100, percentage=True))

print("tao_to_alpha_with_slippage", subnet.tao_to_alpha_with_slippage(100))
print("tao_to_alpha_with_slippage percentage", subnet.tao_to_alpha_with_slippage(100, percentage=True))

print("tao_to_alpha", subnet.tao_to_alpha(100))
print("alpha_to_tao", subnet.alpha_to_tao(100))
```

## Example: staking and unstaking

The following script incrementally stakes 3 TAO into several subnets over many blocks:

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
        print("slippage for subnet " + str(netuid))
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
```console
Enter your password:
Decrypting...

slippage for subnet 119
5.484198655671355
netuid 119 price τ0.027592398 stake Ⲃ1.449590749
slippage for subnet 277
22.54931028877199
netuid 277 price τ0.014734147 stake इ2.714201361
slippage for subnet 18
48.319842544421064
netuid 18 price τ0.001067641 stake σ28.105321031
slippage for subnet 5
36.69607695087895
netuid 5 price τ0.001784484 stake ε11.208213619

...

```



The below script will reverse the effects of the above, by incrementally unstaking alpha tokens from the list of subnets to yield TAO.

```

import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(name="ExampleWalletName")
wallet.unlock_coldkey()

to_sell = [119, 277, 18, 5]
increment = 0.01
total_sell = 0
stake = {}

while total_sell < 3:
    for netuid in to_sell:
        subnet = sub.subnet(netuid)
        print("slippage for subnet " + str(netuid))
        print(subnet.slippage(100))

        sub.remove_stake( 
            wallet = wallet, 
            netuid = netuid, 
            hotkey = subnet.owner_hotkey, 
            amount = increment, 
        )
        current_stake = sub.get_stake(
            coldkey_ss58 = wallet.coldkeypub.ss58_address,
            hotkey_ss58 = subnet.owner_hotkey,
            netuid = netuid,
        )
        stake[netuid] = current_stake
        total_sell += increment
        print ('netuid', netuid, 'price', subnet.price, 'stake', current_stake )
    sub.wait_for_block()
```
```console
Enter your password:
Decrypting...

slippage for subnet 119
5.480567515602973
netuid 119 price τ0.027590441 stake Ⲃ2.899319570
slippage for subnet 277
22.534224516416796
netuid 277 price τ0.014730536 stake इ5.429337492
slippage for subnet 18
48.29992457746112
netuid 18 price τ0.001068362 stake σ65.558512653
slippage for subnet 5
36.680744412524845
netuid 5 price τ0.001785179 stake ε33.619312896

...

```




## Register on a subnet

The following script registers a hotkey on a subnet. This is necessary for staking, mining or validating.

```python
import bittensor as bt
logging = bt.logging
logging.set_info()
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="ExampleWalletName",
    hotkey="ExampleHotkey",
)
wallet.unlock_coldkey()
reg = sub.burned_register(wallet=wallet, netuid=3)
```


## View your wallet

The `btcli` currently offers a nicer overview of the wallet than the SDK. This displays the registrations to subnets by hotkeys controlled by the wallet:




```shell
 Wallet

                                                                         ExampleWalletName : 5G4mxrN8msvc4jjwp7xoBrtAejTfAMLCMTFGCivY5inmySbq
                                                                                                  Network: test
Subnet: 250: unknown ኤ

  COLDKEY          HOTKEY           UID      ACTIVE     STAKE(ኤ)         RANK        TRUST    CONSENSUS    INCENTIVE    DIVIDENDS   EMISSION(…       VTRUST   VPE…   UPDAT…   AXON                HOTKEY_SS58
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ExampleWalletName     ExampleHotkey       8         False       706.38         0.00         0.00         0.00         0.00         0.00   4945923.0…         0.00    *      57118   none                5GEXJdUXxL
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                    1                   706.38 ኤ       0.0000       0.0000       0.0000       0.0000       0.0000     ρ4945923       0.0000

Subnet: 3: gamma γ

  COLDKEY          HOTKEY           UID      ACTIVE     STAKE(γ)         RANK        TRUST    CONSENSUS    INCENTIVE    DIVIDENDS   EMISSION(…       VTRUST   VPE…   UPDAT…   AXON                HOTKEY_SS58
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ExampleWalletName     ExampleHotkey       10        False         0.00         0.00         0.00         0.00         0.00         0.00       0.0000         0.00          32210…   none                5GEXJdUXxL
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                    1                     0.00 γ       0.0000       0.0000       0.0000       0.0000       0.0000           ρ0       0.0000

Subnet: 119: vidac Ⲃ

  COLDKEY          HOTKEY           UID      ACTIVE     STAKE(Ⲃ)         RANK        TRUST    CONSENSUS    INCENTIVE    DIVIDENDS   EMISSION(…       VTRUST   VPE…   UPDAT…   AXON                HOTKEY_SS58
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ExampleWalletName     ExampleHotkey       103       False       268.38         0.01         1.00         0.01         0.01         0.00   3470929.0…         0.00           57625   none                5GEXJdUXxL
 ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                    1                   268.38 Ⲃ       0.0094       1.0000       0.0093       0.0094       0.0000     ρ3470929       0.0000

```

