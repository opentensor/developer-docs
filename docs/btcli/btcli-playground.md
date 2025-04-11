---
title: "BTCLI Live Coding Playground"
---
<link rel="stylesheet" href="https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css" />

This page gives the user a chance to try out some BTCLI functionality right in the browser.




:::warn
Do not enter the seed phrase for a wallet with *real (main "finney" network)* TAO.
This page is for practice/education/entertainment purposes only.
:::


## creating and importing wallets

the playground is an ephemeral environment run in a container, meaning nothing stays in between requests, so you'll have to load in you wallet each time. For this reason, you must only use test wallets in the playground. Any coldkey used in the playground should be considered compromised.

### Import wallets and check balances.

I've created two wallets for this tutorial. Run the code below to import them into bittensor-codex (the code execution service), and list them to see their public keys.


<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli wallet regen-coldkey \
--mnemonic "add aerobic there stool organ switch about diagram arctic vague replace seminar" \
--wallet.name 'playground-test1' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet regen-coldkey \
--mnemonic "nominee sort fringe gauge tank sure core memory abandon lamp alter flash" \
--wallet.name 'playground-test2' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet list --wallet.path ~/.bittensor/wallets

```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>


For wallet `playground-test1`

<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli wallet regen-coldkey \
--mnemonic "add aerobic there stool organ switch about diagram arctic vague replace seminar" \
--wallet.name 'playground-test1' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet balance \
--wallet.name 'playground-test1' \
--wallet.path ~/.bittensor/wallets \
--network test
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>



For wallet `playground-test2`

<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell

btcli wallet regen-coldkey \
--mnemonic "nominee sort fringe gauge tank sure core memory abandon lamp alter flash" \
--wallet.name 'playground-test2' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet balance \
--wallet.name 'playground-test2' \
--wallet.path ~/.bittensor/wallets \
--network test
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>


## Transfer

Transfer some Tao from playground-test1 to playground-test2. We can get the `--destination` address from the `wallet list` command above.

<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli wallet regen-coldkey \
--mnemonic "add aerobic there stool organ switch about diagram arctic vague replace seminar" \
--wallet.name 'playground-test1' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet transfer \
--amount 0.1 \
--wallet.name 'playground-test1' \
--network test \
--destination "5ESAWH9HDB9PZvs1q5j3aWF3x1wo88kwaqNcJEabGKsHMvX6" \
--no-prompt \
--wallet.path ~/.bittensor/wallets
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>


<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli wallet regen-coldkey \
--mnemonic "add aerobic there stool organ switch about diagram arctic vague replace seminar" \
--wallet.name 'playground-test2' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli wallet balance \
--wallet.name 'playground-test2' \
--wallet.path ~/.bittensor/wallets \
--network test
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>



## Subnets

<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>
```shell

btcli subnet list
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>



<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>
```shell
btcli subnet show --netuid 3
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>


<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli wallet regen-coldkey \
--mnemonic "add aerobic there stool organ switch about diagram arctic vague replace seminar" \
--wallet.name 'playground-test1' \
--no-use-password --wallet.path ~/.bittensor/wallets

btcli stake list --network test --wallet.name playground-test1 --wallet-path ~/.bittensor/wallets --no-prompt

```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>


## Stakes 