---
title: "Subtensor Error Codes"
---

# Subtensor Error Codes

This section documents the various types of errors that can arise from Subtensor, the blockchain underlying the Bittensor network.

These errors can surface through different interfaces including the Bittensor CLI (`btcli`), the Bittensor Python SDK, or extrinsic transaction interfaces such as PolkadotJS.
<!-- I'm assuming you can see these in polkadot? -->

Subtensor errors can be categorized into three main types:

1. [Subtensor Standard Errors](./subtensor.md) have a well defined error code.
1. [Custom Errors](./custom.md) are a little trickier, as they only display a numerical code.
1. [Substrate Errors](https://polkadot.js.org/docs/substrate/errors/) are inherited by Subtensor from Substrate, the underlying software on top of which it is built.

## Error Format

Most errors from the Bittensor network are returned in the following format:

```json
{
    "code": 1010,
    "message": "Invalid Transaction",
    "data": "Custom error: [Error Code]"
}
```

## Related

- [Bittensor CLI](../btcli.md) - Command line interface documentation
- [Bittensor Python SDK](../bt-api-ref.md) - Python SDK documentation
- [Subtensor Nodes](../subtensor-nodes/index.md) - Information about running Subtensor nodes 