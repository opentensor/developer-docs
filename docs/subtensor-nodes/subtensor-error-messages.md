---
title: "Subtensor Error Messages"
---

# Subtensor Error Messages

When [Subtensor](./index.md) gives you errors, either when using [`btcli`](../btcli.md) or [Bittensor API](../bt-api-ref.md), consult this document to understand the meaning of these error messages. 

## Subtensor error message format

Subtensor presents the errors in the following format:
 
```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: [Error Code]'
}
```

---

Below are the detailed error messages:

## Custom error: 0

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 0'
}
```

### Description

your coldkey is set to be swapped. No transfer operations are possible.

## Custom error: 1

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 1'
}
```

### Description

the amount you are staking/unstaking/moving is below the minimum TAO equivalent.

## Custom error: 2

### Description

the amount of stake you have is less than you have requested

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 2'
}
```

## Custom error: 3

### Description

his subnet does not exist

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 3'
}
```

## Custom error: 4

### Description

this hotkey is not registered 

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 4'
}
```

## Custom error: 5

### Description

you do not have enough TAO equivalent stake to remove/move/transfer, including the unstake fee.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 5'
}
```

## Custom error: 6

### Description

you are staking/unstaking/etc too fast

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 6'
}
```

## Custom error: 7

### Description

this pool does not have sufficient liquidity for this amount

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 7'
}
```


## Custom error: 8

### Description

tthe slippage is higher than you have set the limit at. Try reducing the amount.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 8'
}
```



## Custom error: 9

### Description

this subnet does not allow transfer stake.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 9'
}
```

## Custom error: 255

### Description

Unknown error.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 255'
}
```

