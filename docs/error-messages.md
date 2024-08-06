---
title: "Error Messages"
---

# Error Messages

When [Subtensor](./subtensor-nodes/index.md) gives you errors, either when using [`btcli`](./btcli.md) or [Bittensor API](./bt-api-ref.md), consult this document to understand the meaning of these error messages. 

## Subtensor error message format

Subtensor presents the errors in the following format:
 
```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: [Error Code]'
}
```

## Custom error: 1

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 1'
}
```

### Description

The account (`who`) attempting the `commit_weights` call does not meet the minimum stake requirement for weights.

## Custom error: 2

### Description

The account (`who`) attempting the `reveal_weights` call does not meet the minimum stake requirement for weights.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 2'
}
```

## Custom error: 3

### Description

The account (`who`) attempting the `set_weights` call does not meet the minimum stake requirement for weights.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 3'
}
```

## Custom error: 4

### Description

The hotkey account passed to the `set_root_weights` call does not meet the minimum stake requirement for weights.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 4'
}
```

## Custom error: 5

### Description

The number of registrations for the current interval exceeds the maximum allowed for the given `netuid`. This applies to the `register` and `burned_register` calls.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 5'
}
```

## Custom error: 6

### Description

An account (`who`) under arbitration is attempting to call `dissolve_network`.

```bash
{'code': 1010, 'message': 'Invalid Transaction', 'data': 'Custom error: 6'
}
```