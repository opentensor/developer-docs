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

The account (`who`) is attempting to call any of `dissolve_network`, `transfer_keep_alive`, `transfer_allow_death` or `transfer_all` while a coldkey swap is scheduled for the calling account.

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
