
# Delegation


Delegation occurs when TAO is transferred to a hotkey that is not owned by the delegate, and enables external users, or those without sufficent TAO to run a validator,  to increase their earning by accruing dividends. This mechanism prompts growth and facilitates efficient resource allocation around value-producing nodes, enhancing the overall utility of the network. In order to receive delegated TAO from the network **delegates**, hotkeys can nominate themselves as **nominates**. Of the TAO earned through delegation, the nominates are entitled to an 18% "tax" for owning the nominated hotkey, while the rest is distributed to the delegate in proportion to their delegated stake. The delegation cut is presently a hard coded, but subject to change as the network evolves.

### Viewing available delegates 

Hotkeys only become available for delegation once they have **nominated** themselves. To see a list of nominated validators you can run **btcli root list_delegates**
```bash dark
$ btcli root list_delegates
```
![List Delegates](/img/list_delegates.png 'Output of List Delegates')

| Column | Description                                                 |
| :------ | ------------------------------------------------------------|
| INDEX   | Delegates with more total stake show higher in the list. |
| DELEGATE | The name of the delegate + clickable URL connected to delegate website. Only shows if the deleagate has registered. |
| SS58    | Clipped ss58 hotkey of the delegate.                       |
| NOMINATORS    | The number of unique coldkeys who have nominated to this hotkey.                       |
| DELEGATE STAKE(τ)    | The amount of stake the owning coldkey has delegates to this hotkey (distinct from TAO delegated from others).                       |
| TOTAL STAKE(τ)    | The total amount of stake delegated to this hotkey.                       |
| CHANGE/(4h)     | The percent difference between the total stake delegated with 4hours.                       |
| SUBNETS    | List of subnets this validator is registered on.                      |
| VPERMIT    | Shows "*" is the delegate has validator permit on each subnet ordered  SUBNETS                     |
| NOMINATOR/(24h)/kτ    | Stake cut taken by nominators to this delegate per 1000 TAO per day. |
| DELEGATE/(24h)    | Stake cut taken by the delegate within a 24 hour period.                        |
| Desc    | Delegate defined description.                     |


### Delegating tao

You delegate TAO using btcli. This will show a list of delegates sorted by stake on your terminal. Read this list to find your delegate and use the index to select which to send stake to.
```bash dark
$ btcli root delegate
```

### Showing my delegations 

To show all your previously made delegations run **btcli my_delegates**, use **--all** to show delegations across all wallets.
```bash dark
$ btcli root my_delegates
```

### Becoming a delegate

You can `nominate` your hotkey to become and active delegate by running **btcli nominate**.
> You can [sign](delegation/signing) your delegate information to give the hotkey a recognizable name an description.
```bash dark
$ btcli root nominate
    --wallet.name YOUR_WALLET_NAME
    --wallet.hotkye YOUR_HOTKEY_NAME
```

### Signing delegates 


Signing your delegate name, URL and description makes it show when others run btcli list_delegates. To do this you need to submit a pull request to the bittensor-delegates repo.


1. Generating your details
```bash dark title=bittensor/scripts/validator_info_signature/generate.py link=https://github.com/opentensor/bittensor/scripts/validator_info_signature/generate.py
$ python3 generate.py
The mnemonic of your validator's Hotkey ( see file: ~/.bittensor/wallets/<coldkey>/hotkeys/<validator> ): ...
Your validator's descriptive name (i.e. Opentensor Foundation): ...
Your validator url (i.e. www.opentensor.org ): ...
A short description for your validator ( i.e. Build, maintain and advance Bittensor): ...
```

2. Verify a validator info signature.
```bash dark title=bittensor/scripts/validator_info_signature/verify.py link=https://github.com/opentensor/bittensor/scripts/validator_info_signature/verify.py
$ python3 verify.py
Validator information: sdasdasd
Validator signature: asdasdas
```

3. Submit a PR.
Visit this [bittensor repo](https://github.com/opentensor/bittensor) from here click `pull requests'. ...

