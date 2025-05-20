---
title: "Bittensor Errors"
---

# Bittensor Errors

This section documents the various types of errors that can arise from Subtensor, the blockchain underlying the Bittensor network.
These errors can surface through different interfaces including the Bittensor CLI (`btcli`), the Bittensor Python SDK, or direct blockchain interactions.

## Error Categories

Bittensor errors can be categorized into three main types:

1. [Subtensor Errors](./subtensor.md) - Errors from the Subtensor, the Bittensor's  blockchain implementation
1. [Custom Errors](./custom.md) - Errors specific to Bittensor's custom error codes
1. [Substrate Errors](./substrate.md) - Errors from the underlying Substrate framework

## Error Format

Most errors from the Bittensor network are returned in the following format:

```json
{
    "code": 1010,
    "message": "Invalid Transaction",
    "data": "Custom error: [Error Code]"
}
```

## Error Handling

When working with Bittensor's tools and SDKs, these errors are processed and converted into more user-friendly error messages. The error codes and messages can be used to:

- Debug issues in your applications
- Understand why a transaction failed
- Implement proper error handling in your code

## Related Documentation

- [Bittensor CLI](../btcli.md) - Command line interface documentation
- [Bittensor Python SDK](../bt-api-ref.md) - Python SDK documentation
- [Subtensor Nodes](../subtensor-nodes/index.md) - Information about running Subtensor nodes 