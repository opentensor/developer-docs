---
title: "Create a Subnet (Locally)"
---

# Create a Subnet (Locally)

## Create it

To access the handy pre-provisioned development "Alice" account on your local chain, use:

```shell
btcli subnet create \
--subnet-name awesome-first-subnet \
--wallet.name sn-creator \
--subtensor.chain_endpoint ws://127.0.0.1:9945
```

However, note that this will fail if you do not have a sufficient $\tau$ balance:

```console
Subnet burn cost: τ 1,000.0000
Your balance of: τ 0.0000 is not enough to burn τ 1,000.0000 to register a subnet.
```

:::tip try it live

Check the burn cost to create a subnet on Bittensor main network and test network:

<link rel="stylesheet" href="https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css" />
<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli subnet burn-cost --network finney
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

```shell
btcli subnet burn-cost --network test
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>
:::

## Fund your subnet

To remedy your liquidity shortfall, transfer $\tau$ from the Alice account and try again.

1. First, get the ss58 address for the destination wallet for the transfer:
	```shell
	btcli w list
	```
	```shell
	...
	── Coldkey sn-creator  ss58_address 5C9xw4gDyu11ocdpWrmhT1sbi4xEHCpzEMsyMA4jGfAZQofQ
    └── Hotkey default  ss58_address 5GVsCAY6RuSuoAA1E77xsHJ9PjdZJjJrRkNFDxVtRKPnw7TR
	```
1. Execute the transfer from alice to the sn-creator wallet

	```console
	btcli wallet transfer \
	--amount 1001 \
	--wallet.name alice \
	--destination "5GVsCAY6RuSuoAA1E77xsHJ9PjdZJjJrRkNFDxVtRKPnw7TR" \
	--subtensor.chain_endpoint ws://127.0.0.1:9945
	```

	```shell
	Do you want to transfer:
	amount: τ 1,001.0000
	from: alice : 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
	to: 5GVsCAY6RuSuoAA1E77xsHJ9PjdZJjJrRkNFDxVtRKPnw7TR
	for fee: τ 0.0001 [y/n]: y
	🌏  📡 Transferring...
	```
1. Create some subnets.

	For example:

	```shell
	btcli subnet create \
	--subnet-name awesome-first-subnet \
	--wallet.name sn-creator \
	--subtensor.chain_endpoint ws://127.0.0.1:9945
	```
	```console
	Subnet burn cost: τ 1,000.0000
	Your balance is: τ 1,001.0000
	Do you want to burn τ 1,000.0000 to register a subnet? [y/n]:y
	Enter your password:
	Decrypting...
	🌏  📡 Registering subnet..
	```


	```shell
	 btcli subnet create \
	--subnet-name awesome-second-subnet \
	--wallet.name sn-creator \
	--subtensor.chain_endpoint ws://127.0.0.1:9945
	```

	```console
	Subnet burn cost: τ 1,999.9405
	▰▱▱▱▱▱▱ 📡Retrieving lock cost from custom...
	Your balance is: τ 2,003.0000
	Do you want to burn τ 1,999.9405 to register a subnet? [y/n]: Please enter Y or N
	Do you want to burn τ 1,999.9405 to register a subnet? [y/n]: y
	Enter your password:
	Decrypting...
	✅ Registered subnetwork with netuid: 3
	```

1. List your subnets
	
	```shell
	btcli subnet list \
	--subtensor.chain_endpoint ws://127.0.0.1:9945
	```
	```console
	                                                         Subnets
	                                                     Network: custom
	        ┃             ┃ Price       ┃ Market Cap  ┃              ┃ P (τ_in,    ┃ Stake        ┃             ┃
	 Netuid ┃ Name        ┃ (τ_in/α_in) ┃ (α * Price) ┃ Emission (τ) ┃ α_in)       ┃ (α_out)      ┃ Supply (α)  ┃ Tempo (k/n)
	━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━
	   0    │ τ root      │ 1.0000 τ/Τ  │ τ 0.00      │ τ 0.0000     │ -, -        │ Τ 0.00       │ 0.00 Τ /21M │ -/-
	   2    │ β           │ 1.0000 τ/β  │ τ 1.00k     │ τ 0.0000     │ τ 1.00k,    │ 0.00 β       │ 1.00k β     │ 29/360
	        │ awesome-fi… │             │             │              │ 1.00k β     │              │ /21M        │
	   3    │ γ           │ 1.0000 τ/γ  │ τ 1.00k     │ τ 0.0000     │ τ 1.00k,    │ 0.00 γ       │ 1.00k γ     │ 29/360
	        │ awesome-se… │             │             │              │ 1.00k γ     │              │ /21M        │
	   1    │ α apex      │ 1.0000 τ/α  │ τ 11.00     │ τ 0.0000     │ τ 10.00,    │ 1.00 α       │ 11.00 α     │ 29/100
	        │             │             │             │              │ 10.00 α     │              │ /21M        │
	────────┼─────────────┼─────────────┼─────────────┼──────────────┼─────────────┼──────────────┼─────────────┼─────────────
	   4    │             │ τ 3.0       │             │ τ 0.0        │ τ           │              │             │
	        │             │             │             │              │ 2.01k/29.00 │              │             │
	        │             │             │             │              │ (6931.03%)  │              │             │
	```