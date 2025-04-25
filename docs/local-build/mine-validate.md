---
title: "Mine and Validate (Locally)"
---

# Mine and Validate (Locally)

This page continues the tutorial series on local Bittensor development. In this installment, we will deploy minimal, local servers for a miner and validators, serving requests, setting weights, and earning emissions.


## Prerequisites

- [Deploy a Subtensor chain locally](./deploy)
- [Provision wallets for the sn-creator, miner, and validator users for this tutorial.](./provision-wallets)
- [Create a Subnet on your local chain](./create-subnet)

## Register the Miner and Validator

Register the subnet miner and validator with the following commands:

```bash
btcli subnet register \
--wallet.name validator \
--wallet.hotkey default \
--subtensor.chain_endpoint ws://127.0.0.1:9945
```
```bash
btcli subnet register \
--netuid 2 \
--wallet.name miner \
--wallet.hotkey default \
--subtensor.chain_endpoint ws://127.0.0.1:9945
```



### Troubleshoot
#### Insufficient funds
If you have not added TAO to your validator wallet, you'll see an error like the following:

```console
Insufficient balance τ 0.0000 to register neuron. Current recycle is τ 1.0000 TAO
```
Transfer funds from the Alice account to cover it and try again. Consult `btcli w list` and carefully check the ss58 address of the destination coldkey (in this case, the one with the name `validator`).

```shell
btcli wallet transfer \
--amount 11 \
--wallet.name alice \
--destination "5EEy34..." \
--subtensor.chain_endpoint ws://127.0.0.1:9945
```


### Successful registration

Repeat the above steps to successfully register your miner and validator once they are funded
```console
netuid: 2


                                                   Register to netuid: 2
                                                      Network: custom

 Netu… ┃ Sym… ┃ Cost (… ┃                     Hotkey                     ┃                     Coldkey
━━━━━━━╇━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2   │  β   │ τ 1.00… │ 5CffqSVhydFJHBSbbgfVLAVkoNBTsv3wLj2Tsh1cr2kfa… │ 5EEy34R4gfXe5SG62nz1nDuh3KAovRLpKLm4ccSv7qkNhn…
───────┼──────┼─────────┼────────────────────────────────────────────────┼─────────────────────────────────────────────────
       │      │         │                                                │
Your balance is: τ 11.0000
The cost to register by recycle is τ 1.0000
Do you want to continue? [y/n] (n): y
Enter your password:
Decrypting...
Balance:
  τ 11.0000 ➡ τ 10.0000
✅ Registered on netuid 2 with UID 1
▰▱▱▱▱▱▱ 📡 Recycling TAO for Registration...
```

### Check your registration

Confirm your registration on the subnet with the following command:

```shell
btcli wallet overview --wallet.name validator --subtensor.chain_endpoint ws://127.0.0.1:9945

btcli wallet overview --wallet.name miner --subtensor.chain_endpoint ws://127.0.0.1:9945

```

```console
                                                        Wallet

                             validator : 5EEy34R4gfXe5SG62nz1nDuh3KAovRLpKLm4ccSv7qkNhnqw
                                                   Network: custom
Subnet: 2: awesome-first-subnet β

  COLDKEY   HOTKEY    UID   AC…   STA…   RANK   TRU…   CON…   INC…   DIV…   EMI…   VTR…   …   U…   AXON       HOTKE…
 ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  valida…   default   1     Tr…   0.00   0.00   0.00   0.00   0.00   0.00   0.0…   0.00       51   none       5Cffq…
 ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                      1           0.0…   0.0…   0.0…   0.0…   0.0…   0.0…     ρ0   0.0…


                                                Wallet balance: τ10.0

                                                        Wallet

                               miner : 5DA7UsaYbk1UnhhtTxqpwdqjuxhQ2rW7D6GTN1S1S5tC2NRV
                                                   Network: custom
Subnet: 2: awesome-first-subnet β

  COLDKEY   HOTKEY    UID   AC…   STA…   RANK   TRU…   CON…   INC…   DIV…   EMI…   VTR…   …   U…   AXON       HOTKE…
 ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  miner     default   2     Tr…   0.00   0.00   0.00   0.00   0.00   0.00   0.0…   0.00       22   none       5Capz…
 ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                      1           0.0…   0.0…   0.0…   0.0…   0.0…   0.0…     ρ0   0.0…


                                                Wallet balance: τ10.0
```

```shell
python3 neurons/miner.py netuid=2 -chain_endpoint=ws://127.0.0.1:9945 wallet_name=miner wallet_hotkey=default
```