---
title: "Managing stake with Bittensor Python SDK"
---

# Managing Stake with Bittensor Python SDK

This pages demonstrates usage of `btcli`, the Bittensor CLI, for managing stake.

TAO holders can **stake** any amount of the liquidity they hold to a validator. Also known as **delegation**, staking supports validators, because their total stake in the subnet, including stake delegated to them by others, determines their consensus power and their share of emissions. After the validator/delegate extracts their **take** the remaining emissions are credited back to the stakers/delegators in proportion to their stake with that validator.

See also:

- [Staking/delegation overview](./delegation)
- [Understanding pricing and anticipating slippage](../dynamic-tao/staking-unstaking-dtao)


:::tip
Minimum transaction amount for stak/unstake/move/transfer: 500,000 RAO or 0.0005 TAO.
:::

## Check your TAO balance

To stake, you'll first need some TAO. Inquire in Discord to obtain TAO on Bittensor test network.

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

## Stake

The following script incrementally stakes 1 TAO in each of the top three validators of the top three subnets:

```python
import os, sys
import bittensor as bt
import time
from bittensor import tao

# Initialize the wallet with walletname by running like 
wallet_name=os.environ.get('WALLET')
total_to_stake=os.environ.get('TOTAL_TAO_TO_STAKE')

print(f"\n🔍 Using wallet: {wallet_name}")
if wallet_name == None:
    sys.exit("wallet name not specified. Usage: `TOTAL_TAO_TO_STAKE=1 WALLET=my-wallet-name ./stakerscript.py`")
if total_to_stake == None:
    print("Staking total not specified, dividing 1 TAO across top 3 validators in each of top 3 subnets by default.\n Usage: `TOTAL_TAO_TO STAKE=1 WALLET=my-wallet-name ./stakerscript.py`")
    total_to_stake = 1
else:
    try:
        total_to_stake = float(total_to_stake)
    except:
        sys.exit("invalid TAO amount!")
    else:
        print(f"dividing {total_to_stake} TAO across top 3 validators in each of top 3 subnets by default")


# Initialize the subtensor connection within a block scope to ensure it is garbage collected
with bt.subtensor(network='test') as subtensor: 

    print("Fetching information on top subnets by TAO emissions")
    sorted_subnets = sorted(subtensor.all_subnets(), key=lambda subnet: subnet.tao_in_emission, reverse=True)

    # sort by token price
    top_subnets = sorted_subnets[0:3]

    amount_to_stake = bt.Balance.from_tao(total_to_stake/9)

    top_validators_per_subnet = {}

    # find the top 3 valis in each subnet
    for subnet in top_subnets:
        print(f"\n🔍 Subnet {subnet.netuid} had {subnet.tao_in_emission} emissions!")
        
        netuid = subnet.netuid
        
        print(f"\n🔍 Fetching metagraph for subnet {netuid}...")
        
        start_time = time.time()
        metagraph = subtensor.metagraph(netuid)
        print(f"✅ Retrieved metagraph for subnet {netuid} in {time.time() - start_time:.2f} seconds.")

        # Extract validators and their stake amounts
        uid_stake_pairs = [(uid, metagraph.stake[uid]) for uid in range(len(metagraph.stake))]
        
        # Sort validators by stake in descending order
        top_validators = sorted(uid_stake_pairs, key=lambda x: x[1], reverse=True)[0:3]

        # remember the top validators for staking
        top_validators_per_subnet[netuid] = {
            "metagraph": metagraph,
            "validators": top_validators
        }

        # Print the top 3 validators for this subnet
        print(f"\n🏆 Top 3 Validators for Subnet {netuid}:")
        for rank, (uid, stake) in enumerate(top_validators, start=1):
            print(f"  {rank}. Validator UID {uid} - Stake: {stake}")

    # Stake to each top 3 validators in each top 3 subnets
    wallet = bt.wallet(wallet_name)
    for netuid, data in top_validators_per_subnet.items():
        metagraph = data["metagraph"]
        top_validators = data["validators"]


        for uid, stake in top_validators:
            hotkey_ss58 = metagraph.hotkeys[uid]

            print(f"💰 Staking {amount_to_stake} to {hotkey_ss58} on subnet {netuid}...")
            start_time = time.time()
            try:
                result =subtensor.add_stake(wallet=wallet, netuid=netuid, hotkey_ss58=hotkey_ss58, amount=amount_to_stake)
                if result:
                    print(f"✅ Successfully staked {amount_to_stake} to {hotkey_ss58} on subnet {netuid} in {time.time() - start_time:.2f} seconds.")
                else:
                    print(f"❌ Failed to stake to {hotkey_ss58} on subnet {netuid}")
            except Exception as e:
                print(f"❌ Failed to stake to {hotkey_ss58} on subnet {netuid}: {e}")            
```
```console
🔍 Using wallet: PracticeKey!
Staking total not specified, dividing 1 TAO across top 3 validators in each of top 3 subnets by default.
 Usage: `TOTAL_TAO_TO STAKE=1 WALLET=my-wallet-name ./stakerscript.py`
Fetching information on top subnets by TAO emissions

🔍 Subnet 277 had τ0.415441165 emissions!

🔍 Fetching metagraph for subnet 277...
✅ Retrieved metagraph for subnet 277 in 1.61 seconds.

🏆 Top 3 Validators for Subnet 277:
  1. Validator UID 5 - Stake: 525929.0625
  2. Validator UID 7 - Stake: 117530.796875
  3. Validator UID 0 - Stake: 44520.4296875

🔍 Subnet 3 had τ0.170820166 emissions!

🔍 Fetching metagraph for subnet 3...
✅ Retrieved metagraph for subnet 3 in 2.10 seconds.

🏆 Top 3 Validators for Subnet 3:
  1. Validator UID 7 - Stake: 268185.875
  2. Validator UID 6 - Stake: 171939.25
  3. Validator UID 254 - Stake: 54529.25390625

🔍 Subnet 119 had τ0.139230825 emissions!

🔍 Fetching metagraph for subnet 119...
✅ Retrieved metagraph for subnet 119 in 2.36 seconds.

🏆 Top 3 Validators for Subnet 119:
  1. Validator UID 45 - Stake: 231638.96875
  2. Validator UID 101 - Stake: 110850.1640625
  3. Validator UID 21 - Stake: 22277.609375
💰 Staking τ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 277...
Enter your password:
Decrypting...
✅ Successfully staked इ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 277 in 20.29 seconds.
💰 Staking इ0.111111111 to 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on subnet 277...
✅ Successfully staked इ0.111111111 to 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on subnet 277 in 11.58 seconds.
💰 Staking इ0.111111111 to 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnet 277...
✅ Successfully staked इ0.111111111 to 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnet 277 in 11.40 seconds.
💰 Staking इ0.111111111 to 5EHammhTy9rV9FhDdYeFY98YTMvU8Vz9Zv2FuFQQQyMTptc6 on subnet 3...
✅ Successfully staked γ0.111111111 to 5EHammhTy9rV9FhDdYeFY98YTMvU8Vz9Zv2FuFQQQyMTptc6 on subnet 3 in 12.67 seconds.
💰 Staking γ0.111111111 to 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb on subnet 3...
✅ Successfully staked γ0.111111111 to 5FupG35rCCMghVEAzdYuxxb4SWHU7HtpKeveDmSoyCN8vHyb on subnet 3 in 12.07 seconds.
💰 Staking γ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 3...
✅ Successfully staked γ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 3 in 11.83 seconds.
💰 Staking γ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 119...
✅ Successfully staked Ⲃ0.111111111 to 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnet 119 in 12.51 seconds.
💰 Staking Ⲃ0.111111111 to 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnet 119...
✅ Successfully staked Ⲃ0.111111111 to 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnet 119 in 11.35 seconds.
💰 Staking Ⲃ0.111111111 to 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 on subnet 119...
✅ Successfully staked Ⲃ0.111111111 to 5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4 on subnet 119 in 12.55 seconds.
```

## Unstake

The script below will unstake from the delegations (stakes) to validators on particular subnets that have yielded the least emissions in the last tempo.

```python
import os, sys
import bittensor as bt
import bittensor_wallet
import time
from bittensor import tao

# Initialize the wallet with walletname by running like 
wallet_name=os.environ.get('WALLET')
total_to_unstake=os.environ.get('TOTAL_TAO_TO_UNSTAKE')
max_stakes_to_unstake=os.environ.get('MAX_STAKES_TO_UNSTAKE')

print(f"\n🔍 Using wallet: {wallet_name}")
if wallet_name == None:
    sys.exit("wallet name not specified. Usage: `TOTAL_TAO_TO_UNSTAKE=1 MAX_STAKES_TO_UNSTAKE=10 WALLET=my-wallet-name ./stakerscript.py`")
if total_to_unstake == None:
    print("Unstaking total not specified, dividing 1 TAO across lowest emission validators on lowest emission.\n Usage: `TOTAL_TAO_TO_UNSTAKE=1 MAX_STAKES_TO_UNSTAKE=10 WALLET=my-wallet-name ./unstakerscript.py`")
    total_to_unstake = 1
if max_stakes_to_unstake == None:
    print("Count of stakes to unstake not specified, limiting to 10.\n Usage: `TOTAL_TAO_TO_UNSTAKE=1 MAX_STAKES_TO_UNSTAKE=10 WALLET=my-wallet-name ./unstakerscript.py`")
    max_stakes_to_unstake = 10
else:
    try:
        total_to_unstake = float(total_to_unstake)
    except:
        sys.exit("invalid TAO amount!")
    else:
        print(f"dividing {total_to_unstake} TAO to unstake across bottom {total_to_unstake} validators by emission")

total_to_unstake = bt.Balance.from_tao(total_to_unstake)
wallet = bt.wallet(wallet_name)
wallet_ck = wallet.coldkeypub.ss58_address

def has_subnet(dely, netuid):
    return netuid in dely.validator_permits

# Initialize the subtensor connection within a block scope to ensure it is garbage collected
with bt.subtensor(network='test') as subtensor: 
    try:
        stakes = subtensor.get_stake_for_coldkey(wallet_ck)
        stakes = sorted(stakes, key=lambda stake: stake.emission)
    except Exception as e:
        print(f"❌ Failed to get stake info: {e}")            

    print(f"filtering out stake too small to unstake, see https://docs.bittensor.com/subtensor-nodes/subtensor-error-messages#custom-error-1 ")
    unstake_minimum = 0.0005

    # stakes = list(filter(lambda stake: stake.stake > unstake_minimum, stakes))
    stakes = list(filter(lambda stake: float(stake.stake) > unstake_minimum, stakes))

    print(f"printing lowest {max_stakes_to_unstake} stakes in order lowest to highest")

    # cap number of stakes to unstake
    stakes = stakes[0:max_stakes_to_unstake]

    for stake in stakes:
        print("-----------")
        print(f"hotkey_ss58:{stake.hotkey_ss58}")
        print(f"stake-amount:{stake.stake}")
        print(f"emission:{stake.emission}")
        
    my_subnet_validator_pairs = {}
    my_validated_subnets = []
    total_unstaked = 0
    i = 0
    while total_unstaked < total_to_unstake and i < max_stakes_to_unstake:
        stake = stakes[i]
        i += 1
        amount_to_unstake = min(total_to_unstake/max_stakes_to_unstake, stake.stake)
        print(f"attempting to unstake {amount_to_unstake} from {stake.hotkey_ss58} on {stake.netuid}")

        try:
            result = subtensor.unstake(wallet, hotkey_ss58=stake.hotkey_ss58, netuid=stake.netuid, amount=amount_to_unstake)

            if result:
                start_time = time.time()
                print(f"✅ Successfully unstaked {amount_to_unstake} from {stake.hotkey_ss58} on subnets {stake.netuid} in {time.time() - start_time:.2f} seconds.")

            else:
                print(f"❌ Failed to unstake from {stake.hotkey_ss58}")
        except Exception as e:
            print(f"❌ Failed to unstake from {stake.hotkey_ss58}: {e}")

```
```console
printing lowest 10 stakes in order lowest to highest

hotkey_ss58:5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK
stake-amount:228.896319796Ⲃ
emission:0.000000000Ⲃ
-----------

hotkey_ss58:5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT
stake-amount:20.166958098Ⲃ
emission:0.000000000Ⲃ
-----------

hotkey_ss58:5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ
stake-amount:18.875227001Ⲃ
emission:0.000000000Ⲃ
-----------

hotkey_ss58:5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK
stake-amount:0.249122064ኤ
emission:0.002273936ኤ
-----------

hotkey_ss58:5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6
stake-amount:44.852352013γ
emission:0.005988248γ
-----------

hotkey_ss58:5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb
stake-amount:786.418685451γ
emission:0.102211637γ
-----------

hotkey_ss58:5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK
stake-amount:5.458104740इ
emission:4.549003064इ
-----------

hotkey_ss58:5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT
stake-amount:11.951413334γ
emission:5.429369144γ
-----------

hotkey_ss58:5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo
stake-amount:5.458196773इ
emission:11.038742700इ
-----------

hotkey_ss58:5CFZ9xDaFQVLA9ERsTs9S3i6jp1VDydvjQH5RDsyWCCJkTM4
stake-amount:21.016200805Ⲃ
emission:16.662489419Ⲃ
-----------
attempting to unstake τ0.100000000 from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on 119
Enter your password:
Decrypting...
✅ Successfully unstaked 0.100000000Ⲃ from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on subnets 119 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on 119
✅ Successfully unstaked 0.100000000Ⲃ from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnets 119 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on 119
✅ Successfully unstaked 0.100000000Ⲃ from 5FRxKzKrBDX3cCGqXFjYb6zCNC7GMTEaam1FWtsE8Nbr1EQJ on subnets 119 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on 250
✅ Successfully unstaked 0.100000000ኤ from 5GEXJdUXxLVmrkaHBfkFmoodXrCSUMFSgPXULbnrRicEt1kK on subnets 250 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6 on 3
✅ Successfully unstaked 0.100000000γ from 5Gwz1AQmkya4UkiiXc9HASKYLc5dsQ9qzrgqCfSvjtbrbQp6 on subnets 3 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb on 3
✅ Successfully unstaked 0.100000000γ from 5EscZNs55FCTfbpgFFDTbiSE7GgwSwqmdivfPikdqTyDiegb on subnets 3 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on 277
✅ Successfully unstaked 0.100000000इ from 5GNyf1SotvL34mEx86C2cvEGJ563hYiPZWazXUueJ5uu16EK on subnets 277 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on 3
✅ Successfully unstaked 0.100000000γ from 5FCPTnjevGqAuTttetBy4a24Ej3pH9fiQ8fmvP1ZkrVsLUoT on subnets 3 in 0.00 seconds.
attempting to unstake τ0.100000000 from 5EFtEvPcgZHheW36jGXMPMrDETzbngziR3DPPVVp5L5Gt7Wo on 277

```


## Move stake

...

```python
import asyncio
from concurrent.futures import ThreadPoolExecutor
import bittensor as bt
from bittensor.core.subtensor import Subtensor
from bittensor.core.async_subtensor import AsyncSubtensor

async def main():
    async with AsyncSubtensor("test") as subtensor:
        wallet = bt.wallet(
            name="PracticeKey!",
            hotkey="stakinkey1",
        )
        wallet.unlock_coldkey()
        success = await subtensor.move_stake(wallet = wallet,
            origin_hotkey = "5DyHnV9Wz6cnefGfczeBkQCzHZ5fJcVgy7x1eKVh8otMEd31",
            origin_netuid = 5,
            destination_hotkey = "5HidY9Danh9NhNPHL2pfrf97Zboew3v7yz4abuibZszcKEMv",
            destination_netuid = 18,
            amount = bt.Balance.from_tao(1.0),
            wait_for_inclusion = True,
            wait_for_finalization = False,
        )
        if success:
            print("Stake was successfully moved!")
        else:
            print("Failed to move stake.")
# Because move_stake is asynchronous, we run it in an event loop:
asyncio.run(main())

```
