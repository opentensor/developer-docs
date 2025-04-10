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

### Import a wallet
:::tip try it live
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
:::

## Subnets

:::tip try it live
<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>
```shell

btcli subnet list
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>
:::


:::tip try it live
<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>
```shell

btcli subnet show --netuid 3
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>
:::


## Stakes 