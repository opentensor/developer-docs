---
title: "BTCLI Live Coding Playground"
---

<link rel="stylesheet" href="https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css" />

This page gives the user a chance to try out some BTCLI functionality right in the browser.

The BTCLI Live Coding Playground is an ephemeral environment run in a container, meaning nothing stays in between requests, so you'll have to load in you wallet each time. For this reason, you must only use test wallets in the playground. Any coldkey used in the playground should be considered compromised.

The BTCLI Live Coding Playground is also experimental and a bit flakey, so if you see error responses, try again, but if they persist, the service may be down.

For a more satisfying experience, [install btcli locally](../getting-started/install-btcli) and try [managing stake with BTCLI](../staking-and-delegation/managing-stake-btcli)

:::danger
This is not a secure code execution environment. This page is for practice/education/entertainment purposes only.

**Do not enter the seed phrase for a wallet with _real (main "finney" network)_ TAO into this or any insecure applicaiton!**

See:

- [Handle your Seed Phrase/Mnemonic Securely](../keys/handle-seed-phrase)
- [Coldkey and Hotkey Workstation Security](../getting-started/coldkey-hotkey-security)
  :::

## Import wallets and check balances.

I've created two wallets for this tutorial and put some testnet TAO into them. Run the code below to import them into bittensor-codex(the code execution service), and list them to see their public keys.

### Import both wallets and list their keys

:::tip run it!
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
:::

### Check balance for `playground-test1`

:::tip run it!
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

### Check balance for `playground-test2`

:::tip run it!
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
:::

## Transfer

Transfer some TAO from `playground-test1` to `playground-test2`. We can get the `--destination` address from the `wallet list` command above.

:::info

- The command returning a `request failed` response in the browser does not mean that the request failed on-chain. To confirm, check the wallet balance of `playground-test2` using the command above.
- You can also replace the wallet address under the `--destination` flag to transfer testnet TAO to your address.
  :::

Run the following command to transfer testnet TAO:

:::tip run it!

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
:::

:::info Challenges

1. Check your balance to make sure the transfer executed successfully on chain.
2. Switch the values to transfer TAO back from `playground-test2` to `playground-test1`.
3. Transfer some testnet TAO to a wallet you manage on another device. Just please don't take all of it.
4. If you have some extra testnet TAO, transfer some to the playground-test wallets to refill them.

   _Note: Testnet TAO has no monetary value._

:::

## Subnets

### Subnet list

:::tip run it!
<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell

btcli subnet list
```

<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>
:::

### Subnet show

:::tip run it!
<codapi-settings url="https://bittensor-codex.com/v1">
</codapi-settings>

```shell
btcli subnet show --netuid 3
```

<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>
:::

## List a wallet's stakes

See [Staking/Delegation Overview](../staking-and-delegation/delegation).

:::tip run it!
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
:::

    :::info Challenge
    Try staking and unstaking from the playground-test wallets!

:::
