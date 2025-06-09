---
title: "Managing stake with Bittensor Python SDK"
---

# Managing Stake with Bittensor Python SDK

This pages demonstrates usage of the Bittensor SDK for Python for managing stake.

TAO holders can **stake** any amount of the liquidity they hold to a validator. Also known as **delegation**, staking supports validators, because their total stake in the subnet, including stake delegated to them by others, determines their consensus power and their share of emissions. After the validator/delegate extracts their **take** the remaining emissions are credited back to the stakers/delegators in proportion to their stake with that validator.

See also:

- [Staking/delegation overview](./delegation)
- [Understanding pricing and anticipating slippage](../dynamic-tao/staking-unstaking-dtao)

:::tip
Minimum transaction amount for stake/unstake/move/transfer: 500,000 RAO or 0.0005 TAO.
:::

## Check your TAO balance

To stake, you'll first need some TAO. Inquire in [Discord](https://discord.com/channels/799672011265015819/1107738550373454028/threads/1331693251589312553) to obtain TAO on Bittensor test network. Alternatively, you can transfer some testnet TAO to your wallet address using the [BTCLI Live Coding Playground](../btcli/btcli-playground.md#transfer).

:::danger
The funds in a crypto wallet are only as secure as your private key and/or seed phrase, and the devices that have access to these.

Test network tokens have no real value. Before managing liquidity on Bittensor mainnet, carefully consider all aspects of secrets management and endpoint security!
:::

```python
import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="PracticeKey!",
    hotkey="stakinkey1",
)
wallet.unlock_coldkey()
balance = sub.get_balance(wallet.coldkey.ss58_address)
print(balance)
```

## View exchange rates

The following script displays exchange rates for a subnet alpha token, with and without slippage.

```python
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

## Register on a subnet

You can register your hotkey on a subnet using the `burned_register` method. This is necessary for staking, mining or validating.

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

## View your registered subnets

```python
import bittensor as bt
sub = bt.Subtensor(network="test")
wallet = bt.wallet(
    name="ExampleWalletName",
    hotkey="ExampleHotkey",
)
wallet.unlock_coldkey()
netuids = sub.get_netuids_for_hotkey(wallet.hotkey.ss58_address)
print(netuids)
```

## Asynchronously stake to top subnets/validators

The following script incrementally stakes a user-defined amount of TAO in each of the user-defined number of the top subnets.

Note that it uses asynchronous calls to the Bittensor blockchain via the `async_subtensor` module, employing the `await asyncio.gather(*tasks)` pattern.

`AsyncSubtensor` methods like `add_stake()`, `unstake()`, `metagraph()`, and `move_stake()` are designed as asynchronous methods, meaning that, unlike their `Subtensor` module equivalents, they return coroutine objects that must be awaizted within an event loop.

See [Working with Concurrency](/subnets/asyncio).

```python
import os, sys, asyncio
import bittensor as bt
import time
from bittensor import tao

# Load environmental variables
wallet_name=os.environ.get('WALLET')
total_to_stake=os.environ.get('TOTAL_TAO_TO_STAKE')
num_subnets= os.environ.get('NUM_SUBNETS_TO_STAKE_IN')
validators_per_subnet = os.environ.get('NUM_VALIDATORS_PER_SUBNET')

# Validate inputs
if wallet_name is None:
    sys.exit("❌ WALLET not specified. Usage: `WALLET=my-wallet TOTAL_TAO_TO_STAKE=1 NUM_SUBNETS_TO_STAKE_IN=3 NUM_VALIDATORS_PER_SUBNET=3 python script.py`")

if total_to_stake is None:
    print("⚠️ TOTAL_TAO_TO_STAKE not specified. Defaulting to 1 TAO.")
    total_to_stake = 1.0
else:
    try:
        total_to_stake = float(total_to_stake)
    except:
        sys.exit("❌ Invalid TOTAL_TAO_TO_STAKE amount.")

if num_subnets is None:
    num_subnets = 3
else:
    try:
        num_subnets = int(num_subnets)
    except:
        sys.exit("❌ Invalid NUM_SUBNETS_TO_STAKE_IN.")

if validators_per_subnet is None:
    validators_per_subnet = 3
else:
    try:
        validators_per_subnet = int(validators_per_subnet)
    except:
        sys.exit("❌ Invalid NUM_VALIDATORS_PER_SUBNET.")

print(f"\n🔓 Using wallet: {wallet_name}")
print(f"📊 Dividing {total_to_stake} TAO across top {validators_per_subnet} validators in each of top {num_subnets} subnets.")

wallet = bt.wallet(wallet_name)

# Initialize the subtensor connection within a block scope to ensure it is garbage collected
async def stake_batch(subtensor, netuid, top_validators, amount_to_stake):
    for hk in top_validators:
        print(f"💰 Staking {amount_to_stake} to {hk} on subnet {netuid}...")
    try:
        results = await asyncio.gather(*[ subtensor.add_stake(wallet=wallet, netuid=netuid, hotkey_ss58=hk, amount=amount_to_stake) for hk in top_validators ] )
        print(results)
    except Exception as e:
        print(f"❌ Failed to stake to {hk} on subnet {netuid}: {e}")

async def find_top_three_valis(subtensor,subnet):
    netuid = subnet.netuid
    print(f"\n🔍 Subnet {netuid} had {subnet.tao_in_emission} emissions!")
    print(f"\n🔍 Fetching metagraph for subnet {netuid}...")

    start_time = time.time()
    metagraph = await subtensor.metagraph(netuid)

    print(f"✅ Retrieved metagraph for subnet {netuid} in {time.time() - start_time:.2f} seconds.")
    # Extract validators and their stake amounts
    hk_stake_pairs = [(metagraph.hotkeys[index], metagraph.stake[index]) for index in range(len(metagraph.stake))]

    # Sort validators by stake in descending order
    top_validators = sorted(hk_stake_pairs, key=lambda x: x[1], reverse=True)[0:3]

    # Print the top 3 validators for this subnet
    print(f"\n🏆 Top 3 Validators for Subnet {netuid}:")
    for rank, (index, stake) in enumerate(top_validators, start=1):
        print(f"  {rank}. Validator index {index} - Stake: {stake}")

    return {
        "netuid": netuid,
        "metagraph": metagraph,
        "validators": top_validators
    }

async def main():
    async with bt.async_subtensor(network='test') as subtensor:

        print("Fetching information on top subnets by TAO emissions")

        # get subnets and sort by tao emissions
        sorted_subnets = sorted(list(await subtensor.all_subnets()), key=lambda subnet: subnet.tao_in_emission, reverse=True)
        top_subnets = sorted_subnets[0:3]
        amount_to_stake = bt.Balance.from_tao(total_to_stake/9)

        # find the top 3 validators in each subnet
        top_vali_dicts = await asyncio.gather(*[find_top_three_valis(subtensor, subnet) for subnet in top_subnets])
        top_validators_per_subnet = {}
        for d in top_vali_dicts:
            netuid = d['netuid']
            for v in d['validators']:
                hk = v[0]
                if netuid in top_validators_per_subnet:
                    top_validators_per_subnet[netuid].append(hk)
                else:
                    top_validators_per_subnet[netuid] = [hk]

        # Stake to each top 3 validators in each top 3 subnets
        start_time = time.time()
        await asyncio.gather(*[stake_batch(subtensor, netuid,top_validators, amount_to_stake) for netuid, top_validators in top_validators_per_subnet.items()])
        print(f"Staking completed in {time.time() - start_time:.2f}s")

asyncio.run(main())
```

```console
🔍 Using wallet: PracticeKey!
Staking total not specified, dividing 1 TAO across top 3 validators in each of top 3 subnets by default.
 Usage: `TOTAL_TAO_TO STAKE=1 WALLET=my-wallet-name ./stakerscript.py`
Fetching information on top subnets by TAO emissions

🔍 Subnet 277 had τ0.415595173 emissions!

🔍 Fetching metagraph for subnet 277...

🔍 Subnet 3 had τ0.170148635 emissions!

🔍 Fetching metagraph for subnet 3...

🔍 Subnet 119 had τ0.137442127 emissions!

🔍 Fetching metagraph for subnet 119...
✅ Retrieved metagraph for subnet 277 in 1.60 seconds.

🏆 Top 3 Validators for Subnet 277:
  1. Validator index 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT - Stake: 550446.75
  2. Validator index 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo - Stake: 123175.8515625
  3. Validator index 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK - Stake: 54379.609375
✅ Retrieved metagraph for subnet 119 in 1.97 seconds.

🏆 Top 3 Validators for Subnet 119:
  1. Validator index 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT - Stake: 231810.8125
  2. Validator index 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ - Stake: 118400.6328125
  3. Validator index 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 - Stake: 30794.974609375
✅ Retrieved metagraph for subnet 3 in 2.00 seconds.

🏆 Top 3 Validators for Subnet 3:
  1. Validator index 5EHammhTy9rV9FhDdYeFY98YTMvU8Vz9Zv2FuFQQQyMTptc6 - Stake: 285393.71875
  2. Validator index 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb - Stake: 190750.453125
  3. Validator index 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT - Stake: 57048.80859375
💰 Staking τ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 277...
💰 Staking τ0.111111111 to 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on subnet 277...
💰 Staking τ0.111111111 to 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnet 277...
Enter your password:
Decrypting...
[True, True, True]
💰 Staking 0.111111111इ to 5EHammhTy9rV9FhDdYeFY98YTMvU8Vz9Zv2FuFQQQyMTptc6 on subnet 3...
💰 Staking 0.111111111इ to 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb on subnet 3...
💰 Staking 0.111111111इ to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 3...
[True, True, True]
💰 Staking 0.111111111γ to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 119...
💰 Staking 0.111111111γ to 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnet 119...
💰 Staking 0.111111111γ to 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 on subnet 119...
[True, True, True]
```

## Asynchronously unstake from low-emissions validators

The script below will unstake from the delegations (stakes) to validators on particular subnets that have yielded the least emissions in the last tempo.

```python
import os, sys, asyncio, time
import bittensor as bt
import bittensor_wallet
from bittensor import tao

async def perform_unstake(subtensor, stake, amount):
    try:
        print(f"⏳ Attempting to unstake {amount} from {stake.hotkey_ss58} on subnet {stake.netuid}")
        start = time.time()
        result = await subtensor.unstake(
            wallet, hotkey_ss58=stake.hotkey_ss58, netuid=stake.netuid, amount=amount
        )
        elapsed = time.time() - start
        if result:
            print(f"✅ Successfully unstaked {amount} from {stake.hotkey_ss58} on subnet {stake.netuid} in {elapsed:.2f}s")
            return True
        else:
            print(f"❌ Failed to unstake from {stake.hotkey_ss58} on subnet {stake.netuid}")
            return False
    except Exception as e:
        print(f"❌ Error during unstake from {stake.hotkey_ss58} on subnet {stake.netuid}: {e}")
        return False


async def main():
    async with bt.async_subtensor(network='test') as subtensor:
        try:
            # Retrieve all active active stakes asscociated with the coldkey
            stakes = await subtensor.get_stake_for_coldkey(wallet_ck)
        except Exception as e:
            sys.exit(f"❌ Failed to get stake info: {e}")

        # Filter and sort
        # Remove small stakes that are under the minimum threshold
        stakes = list(filter(lambda s: float(s.stake.tao) > unstake_minimum, stakes))
        # Sort by emission rate (lowest emission first)
        stakes = sorted(stakes, key=lambda s: s.emission.tao)
        # Limit to the N lowest emission validators
        stakes = stakes[:max_stakes_to_unstake]

        if not stakes:
            sys.exit("❌ No eligible stakes found to unstake.")

        print(f"\n📊 Preparing to unstake from {len(stakes)} validators:\n")
        for s in stakes:
            print(f"Validator: {s.hotkey_ss58}\n  NetUID: {s.netuid}\n  Stake: {s.stake.tao}\n  Emission: {s.emission}\n-----------")

        # Determine how much TAO to unstake per validator
        amount_per_stake = total_to_unstake / len(stakes)

        # Prepare concurrent unstake tasks, then execute as a batch
        tasks = [
            perform_unstake(subtensor, stake, min(amount_per_stake, stake.stake))
            for stake in stakes
        ]
        results = await asyncio.gather(*tasks)

        # Count successes and print final report
        success_count = sum(results)
        print(f"\n🎯 Unstake complete. Success: {success_count}/{len(stakes)}")

wallet_name = os.environ.get('WALLET')
total_to_unstake = os.environ.get('TOTAL_TAO_TO_UNSTAKE')
max_stakes_to_unstake = os.environ.get('MAX_STAKES_TO_UNSTAKE')

if wallet_name is None:
    sys.exit("wallet name not specified. Usage: `TOTAL_TAO_TO_UNSTAKE=1 MAX_STAKES_TO_UNSTAKE=10 WALLET=my-wallet-name ./unstakerscript.py`")

if total_to_unstake is None:
    print("Unstaking total not specified, defaulting to 1 TAO.")
    total_to_unstake = 1
else:
    try:
        total_to_unstake = float(total_to_unstake)
    except:
        sys.exit("invalid TAO amount!")

if max_stakes_to_unstake is None:
    max_stakes_to_unstake = 10
else:
    try:
        max_stakes_to_unstake = int(max_stakes_to_unstake)
    except:
        sys.exit("invalid number for MAX_STAKES_TO_UNSTAKE")

print(f"🔍 Using wallet: {wallet_name}")
print(f"🧮 Unstaking a total of {total_to_unstake} TAO across up to {max_stakes_to_unstake} lowest-emission validators")

total_to_unstake = bt.Balance.from_tao(total_to_unstake)
wallet = bt.wallet(wallet_name)
wallet_ck = wallet.coldkeypub.ss58_address

unstake_minimum = 0.0005  # TAO
asyncio.run(main())

```

```console
Unstaking total not specified, defaulting to 1 TAO.
🔍 Using wallet: PracticeKey!
🧮 Unstaking a total of 1 TAO across up to 10 lowest-emission validators

📊 Preparing to unstake from 10 validators:

Validator: 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK
  NetUID: 119
  Stake: 229.212349960Ⲃ
  Emission: 0.000000000Ⲃ
-----------
Validator: 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT
  NetUID: 119
  Stake: 19.766958098Ⲃ
  Emission: 0.000000000Ⲃ
-----------
Validator: 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ
  NetUID: 119
  Stake: 18.475227001Ⲃ
  Emission: 0.000000000Ⲃ
-----------
Validator: 5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6
  NetUID: 3
  Stake: 44.463571197γ
  Emission: 0.005925040γ
-----------
Validator: 5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb
  NetUID: 3
  Stake: 786.209456613γ
  Emission: 0.102145233γ
-----------
Validator: 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK
  NetUID: 277
  Stake: 5.058595339इ
  Emission: 4.550549887इ
-----------
Validator: 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT
  NetUID: 3
  Stake: 11.654577962γ
  Emission: 5.429011017γ
-----------
Validator: 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo
  NetUID: 277
  Stake: 5.258687558इ
  Emission: 11.038508585इ
-----------
Validator: 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4
  NetUID: 119
  Stake: 20.942357630Ⲃ
  Emission: 16.662837489Ⲃ
-----------
Validator: 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb
  NetUID: 3
  Stake: 87.243220111γ
  Emission: 22.063085545γ
-----------
⏳ Attempting to unstake τ0.100000000 from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on subnet 119
Enter your password:
Decrypting...
⏳ Attempting to unstake τ0.100000000 from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 119
⏳ Attempting to unstake τ0.100000000 from 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnet 119
⏳ Attempting to unstake τ0.100000000 from 5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6 on subnet 3
⏳ Attempting to unstake τ0.100000000 from 5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb on subnet 3
⏳ Attempting to unstake τ0.100000000 from 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnet 277
⏳ Attempting to unstake τ0.100000000 from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 3
⏳ Attempting to unstake τ0.100000000 from 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on subnet 277
⏳ Attempting to unstake τ0.100000000 from 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 on subnet 119
⏳ Attempting to unstake τ0.100000000 from 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb on subnet 3
✅ Successfully unstaked 0.100000000इ from 5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6 on subnet 3 in 10.78s
✅ Successfully unstaked 0.100000000इ from 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnet 119 in 10.78s
✅ Successfully unstaked 0.100000000इ from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on subnet 119 in 15.23s
✅ Successfully unstaked 0.100000000इ from 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb on subnet 3 in 10.78s
✅ Successfully unstaked 0.100000000इ from 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on subnet 277 in 10.79s
✅ Successfully unstaked 0.100000000इ from 5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb on subnet 3 in 10.79s
✅ Successfully unstaked 0.100000000इ from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 3 in 10.83s
✅ Successfully unstaked 0.100000000इ from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 119 in 10.83s
✅ Successfully unstaked 0.100000000इ from 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnet 277 in 10.84s
✅ Successfully unstaked 0.100000000इ from 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 on subnet 119 in 10.89s

🎯 Unstake complete. Success: 10/10
```

## Move stake

This stake moves stake from one delegate to another.

```python
import asyncio
from concurrent.futures import ThreadPoolExecutor
import bittensor as bt
from bittensor.core.subtensor import Subtensor
from bittensor.core.async_subtensor import AsyncSubtensor

async def main():
    async with AsyncSubtensor("test") as subtensor:
        wallet = bt.wallet(
            name="PracticeKey!"
        )
        wallet.unlock_coldkey()
        result = await subtensor.move_stake(wallet = wallet,
            origin_hotkey = "5DyHnV9Wz6cnefGfczeBkQCzHZ5fJcVgy7x1eKVh8otMEd31",
            origin_netuid = 5,
            destination_hotkey = "5HidY9Danh9NhNPHL2pfrf97Zboew3v7yz4abuibZszcKEMv",
            destination_netuid = 18,
            amount = bt.Balance.from_tao(1.0),
            wait_for_inclusion = True,
            wait_for_finalization = False,
        )
        if result:
            print("Stake was successfully moved!")
        else:
            print("Failed to move stake.")
# Because move_stake is asynchronous, we run it in an event loop:
asyncio.run(main())

```
