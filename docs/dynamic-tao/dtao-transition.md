---
title: "Dynamic Tao Transition Guide"
---

Dynamic TAO is coming to Bittensor! See [Conceptual guide to Dynamic TAO](./dtao-guide.md).

You can experiment with the Dynamic TAO testnet (`rao`) today to learn about the new tokenomic model and prepare for the transition. This is a testnet originally cloned from mainnet, for purposes of testing the migration. Testnet currency has no value. Contact OTF on Discord for TAO fauceting on `rao` testnet.

- What to expect with Dynamic TAO
- Use the Dynamic TAO BTCLI 
- Use the Dynamic TAO Bittensor SDK
- Access the Dynamic Tao testnet `rao`

## What to expect with Dynamic TAO

Dynamic TAO testnet is designed to prepare you for a seamless transition to Dynamic TAO. Subnets are cloned from mainnet (`finney`), and the ledger of hotkey balances remains. Miners and validators will remain registered; their registration stake will be transferred to a balance in the new "root subnet" or "subnet zero". See [Conceptual guide to Dynamic TAO: Subnet zero](./dtao-guide.md#subnet-zero) 


## Use the Dynamic TAO BTCLI 

To use the Dynamic-TAO-enabled version of BTCLI, either:

- Download the specified release candidate from: https://pypi.org/project/bittensor/

- Build from source:

	1. Download the btcli code repository.
	1. Check out branch `rao`
	1. Run `pip install .` 

## Use the Dynamic Tao Bittensor SDK

## Target the Dynamic Tao testnet `rao`

Access the Dynamic TAO-enabled Bittensor test network at: `wss://rao.chain.opentensor.ai:443/`





Everything else on your subnet will work the same
Setting weight
registering miners.
Getting stake information from the metagraph, getting miner information. Etc.

If you upgrade to the latest version of the CLI and SDK, your miners and validators should see minimal changes in functionality.

However. The whole concept of DTAO is that your subnet will not contain a new token which is used along side TAO to reach consensus. 
z
When we push this change to testnet, the weight of all validators (in terms of stake) will remain unchanged until the inflation of the subnet token become significant enough to effect the consensus mechanism.
TaoWeight, Gamma, Global Weight, Root Weight.
TaoWeight.
heres how to you change over no problem dont worry about it bro
asterix btw, slowsly overtime the subnet token is designed to become more and more relevant in the consensus mechanism on your subnet. On day 1 the effect will be minimal and you dont need to worry about it. But, in 100 days the subnet token will come to dominate more than 50% of the stake weight in your network.
none of these tokens have any value and dont worry about the prices on testnet.
consτ [τ, τ] — Today at 9:32 AM
Please help us evolve this technology and please inform us of any bugs
```
do_unstake_all_alpha --> unstake_all_alpha

            origin: OriginFor<T>,
            hotkey: T::AccountId, 
do_unstake_all --> unstake_all 
origin: OriginFor<T>,
            hotkey: T::AccountId,
```
## How to Upgrade
Update Your CLI

Example (using pip):
bash
Copy code
pip install --upgrade bitensor-cli
This ensures your local command-line tools are compatible with the dTau changes.
Update Your SDK

Make sure your code depends on the latest BitTensor SDK that supports dTau:
bash
Copy code
pip install --upgrade bitensor-sdk
If you have a custom environment or CI/CD, confirm you’re pulling the newest version.
Upgrade All Nodes

Any validators, miners, or other nodes must run the updated versions.
Older versions are not backward-compatible; a mix of old/new will likely cause consensus issues.

## Will It Break My Subnet?
Short answer: No, as long as everyone upgrades. The network logic handles dTau automatically.
If anyone remains on outdated software, that node may be dropped from consensus.

## Key Points
Testnet Only: Alpha and Tau in this context have no real-world value. We’re testing the inflation schedule and stake weighting.
Slow Transition: Alpha’s effect on consensus starts small, but after around 100 days, it will surpass Tau’s stake weight.
No Governance Changes: This testnet upgrade does not alter governance or proposals—focus is only on consensus weights.
Outdated dTau Docs: Older references to “Dynamic Tau” may be inaccurate. We’re removing them and replacing with this simplified explanation.
Feedback Welcome: If you see issues with the upgrade, documentation gaps, or unusual subnet behavior, please share details with the team.
Next Steps
Complete Upgrades ASAP: The sooner your subnet upgrades, the smoother the test phase.
Monitor Your Subnet: Watch node logs or dashboards for any anomalies.
Join the Discussion: We’ll gather your questions to shape more in-depth dTau docs later.


