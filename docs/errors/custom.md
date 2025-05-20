---
title: "Subtensor Custom Errors"
---

# Custom Errors

Custom errors in Bittensor are specific error codes that are returned when certain conditions are not met during blockchain operations. These errors are returned in the format:

```json
{
    "code": 1010,
    "message": "Invalid Transaction",
    "data": "Custom error: [Error Code]"
}
```

## Error Codes

### Error Code: 0
**Error**: `ColdKeyInSwapSchedule`  
**Description**: Your coldkey is set to be swapped. No transfer operations are possible.

### Error Code: 1
**Error**: `StakeAmountTooLow`  
**Description**: The amount you are staking/unstaking/moving is below the minimum TAO equivalent.  
**Minimum**: 500,000 RAO (0.0005 TAO)

### Error Code: 2
**Error**: `BalanceTooLow`  
**Description**: The amount of stake you have is less than you have requested.

### Error Code: 3
**Error**: `SubnetDoesntExist`  
**Description**: This subnet does not exist.

### Error Code: 4
**Error**: `HotkeyAccountDoesntExist`  
**Description**: Hotkey is not registered on Bittensor network.

### Error Code: 5
**Error**: `NotEnoughStakeToWithdraw`  
**Description**: You do not have enough TAO equivalent stake to remove/move/transfer, including the unstake fee.

### Error Code: 6
**Error**: `RateLimitExceeded`  
**Description**: Too many transactions submitted (other than Axon serve/publish extrinsic).

### Error Code: 7
**Error**: `InsufficientLiquidity`  
**Description**: The subnet's pool does not have sufficient liquidity for this transaction.

### Error Code: 8
**Error**: `SlippageTooHigh`  
**Description**: The slippage exceeds your limit. Try reducing the transaction amount.

### Error Code: 9
**Error**: `TransferDisallowed`  
**Description**: This subnet does not allow stake transfer.

### Error Code: 10
**Error**: `HotKeyNotRegisteredInNetwork`  
**Description**: The hotkey is not registered in the selected subnet.

### Error Code: 11
**Error**: `InvalidIpAddress`  
**Description**: Axon connection info cannot be parsed into a valid IP address.

### Error Code: 12
**Error**: `ServingRateLimitExceeded`  
**Description**: Rate limit exceeded for axon serve/publish extrinsic.

### Error Code: 13
**Error**: `InvalidPort`  
**Description**: Axon connection info cannot be parsed into a valid port.

### Error Code: 255
**Error**: `BadRequest`  
**Description**: Unclassified error.

## Error Handling

When working with these errors in your code, you can use the error codes to implement specific error handling logic. For example:

```python
try:
    # Your Bittensor operation
    result = subtensor.add_stake(...)
except Exception as e:
    if "Custom error: 1" in str(e):
        print("Stake amount too low. Minimum is 0.0005 TAO")
    elif "Custom error: 2" in str(e):
        print("Insufficient balance for this operation")
    # ... handle other errors
```

## Related Documentation

- [Subtensor Errors](./subtensor.md) - Errors from the Subtensor blockchain implementation
- [Substrate Errors](./substrate.md) - Errors from the underlying Substrate framework 