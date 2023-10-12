
# Signing Delegates


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


