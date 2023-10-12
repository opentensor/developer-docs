
# Validating

Network validation is thus open to participants who have [registered](subnetworks/registration) a UID on any subnetwork **and** who have enough TAO staked on their hotkey to be considered a [top 64 validator](validating/validator-permit).

### Staking

Attaching TAO on your validator can be achieved in two ways.
1. By staking TAO to your miners directly.
```bash dark
# Stake funds to your hotkey account within the bittensor incentive mechanism.
btcli stake add
    --wallet.name YOUR_WALLET_NAME
    --wallet.hotkey YOUR_HOTKEY_NAME
```
2. By attracting delegated stake by nominating (and then advertising) your hotkey.
```bash dark
# Delegate funds to the hotkey of a delegate (your own or others)
btcli root delegate
    --delegate_ss58key DELEGATE_SS58KEY
```

### Validator permit

Only the largest 64 validators, in terms of stake, on any particular subnetwork are considered to have **validator permit**. Validators with permit are considered active within Bittensor's mining mechanism, Yuma Consensus, can validate the network, and get **dividends**.

**how do I check to see if my validator has permit?**
The amount can be pulled from the metagraph based on your uid.
```python numbered dark
import bittensor as bt
subnet = bt.metagraph(1)
wallet = bt.wallet( name = 'my_wallet_name', hotkey = 'my_validator_hotkey_name' )
my_uid = subnet.hotkeys.index( wallet.hotkey.ss58_address )
print ('validator permit', subnet.validator_permit[ my_uid ])
```
**how much TAO is required to attain a validator permit?**
The amount of TAO required is depends on how the other largest 64 wallets distribute TAO across themselves. You can calculate the minimum using **bt.metagraph**:
```python numbered dark
import bittensor as bt
subnet = bt.metagraph(1)
top_64_stake = subnet.S.sort()[0][-64:].tolist()
print (f'Current requirement for validator permits based on the top 64 stake stands at {min(top_64_stake)} tao')
```
