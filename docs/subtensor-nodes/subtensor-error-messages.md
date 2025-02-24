---
title: "Subtensor Error Messages"
---

# Subtensor Error Messages

When [Subtensor](./index.md) gives you errors, either when using [`btcli`](../btcli.md) or [Bittensor API](../bt-api-ref.md), consult this document to understand the meaning of these error messages. 

The code for these error messages can be examined [here.](https://github.com/opentensor/subtensor/blob/main/pallets/subtensor/src/lib.rs#L1686
)


## Subtensor error message format

Subtensor presents the errors in the following format:
 
```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: [Error Code]'
}
```

---

Below are the detailed error messages:

## Custom error: 0

**Error**: `ColdKeyInSwapSchedule`

**Description**: Your coldkey is set to be swapped. No transfer operations are possible.


```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 0'
}
```


## Custom error: 1
**Error**: `StakeAmountTooLow`

**Description**: The amount you are staking/unstaking/moving is below the minimum TAO equivalent.

The transaction minimum is 500,000 RAO or 0.0005 TAO.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 1'
}
```




## Custom error: 2

**Error**: `BalanceTooLow`

**Description**: The amount of stake you have is less than you have requested

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 2'
}
```

## Custom error: 3

**Error**: `SubnetDoesntExist`

**Description**: This subnet does not exist.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 3'
}
```

## Custom error: 4

**Error**: `HotkeyAccountDoesntExist`

**Description**: Hotkey is not registered on Bittensor network.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 4'
}
```

## Custom error: 5

**Error**: `NotEnoughStakeToWithdraw`

**Description**: You do not have enough TAO equivalent stake to remove/move/transfer, including the unstake fee.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 5'
}
```

## Custom error: 6

**Error**: `RateLimitExceeded`

**Description**: Too many transactions submitted (other than Axon serve/publish extrinsic).

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 6'
}
```

## Custom error: 7

**Error**: `InsufficientLiquidity`

**Description**: The subnet's pool does not have sufficient liquidity for this transaction.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 7'
}
```


## Custom error: 8

**Error**: `SlippageTooHigh`

**Description**: The slippage is higher than you have set the limit at. Try reducing the amount.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 8'
}
```


## Custom error: 9

**Error**: `TransferDisallowed`

**Description**: This subnet does not allow transfer stake.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 9'
}
```

## Custom error: 10
**Error**: `HotKeyNotRegisteredInNetwork`

**Description**: The hotkey is not registered in the selected subnet.

## Custom error: 11
**Error**: `InvalidIpAddress`

**Description**: Axon connection info cannot be parsed into a valid IP address.


## Custom error: 12
**Error**: `ServingRateLimitExceeded`

**Description**: Rate limit exceeded for axon serve/publish extrinsic.

## Custom error: 13
**Error**: `InvalidPort`

**Description**: Axon connection info cannot be parsed into a valid port.

## Custom error: 255

**Error**: `BadRequest`

**Description**: Unclassified error.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 255'
}
```

