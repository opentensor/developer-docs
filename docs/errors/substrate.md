---
title: "Substrate Errors"
---

# Substrate Errors

Bittensor is built on top of the Substrate framework, which provides the underlying blockchain infrastructure. This page documents common Substrate errors that you might encounter when interacting with the Bittensor network.

## Common Substrate Error Codes

### Transaction Errors

- `1010: Invalid Transaction` - The transaction is invalid
- `1011: Invalid Transaction Payment` - The transaction payment is invalid
- `1012: Invalid Transaction BadProof` - The transaction proof is invalid
- `1013: Invalid Transaction AncientBirthBlock` - The transaction is from an ancient birth block
- `1014: Invalid Transaction ExhaustsResources` - The transaction would exhaust system resources
- `1015: Invalid Transaction Custom` - A custom error occurred during transaction processing

### Account Errors

- `1000: BadOrigin` - The origin of the call is invalid
- `1001: CannotLookup` - The account cannot be looked up
- `1002: BadSigner` - The signer is invalid
- `1003: Module` - A module error occurred
- `1004: CannotDecode` - The data cannot be decoded
- `1005: BadState` - The state is invalid
- `1006: BadValue` - The value is invalid
- `1007: Arithmetic` - An arithmetic error occurred
- `1008: CannotDecode` - The data cannot be decoded
- `1009: CannotDecode` - The data cannot be decoded

### Balance Errors

- `2000: InsufficientBalance` - The account has insufficient balance
- `2001: ExistingVestingSchedule` - A vesting schedule already exists
- `2002: VestingBalance` - The vesting balance is invalid
- `2003: LiquidityRestrictions` - The liquidity restrictions are not met
- `2004: InconsistentState` - The state is inconsistent
- `2005: Overflow` - An arithmetic overflow occurred
- `2006: Underflow` - An arithmetic underflow occurred

## Error Handling

When working with Substrate errors in your code, you can implement specific error handling based on the error code. For example:

```python
try:
    # Your Bittensor operation
    result = subtensor.transfer(...)
except Exception as e:
    if "1010" in str(e):
        print("Invalid transaction")
    elif "2000" in str(e):
        print("Insufficient balance")
    # ... handle other errors
```

## Error Format

Substrate errors are typically returned in the following format:

```json
{
    "code": 1010,
    "message": "Invalid Transaction",
    "data": "Error details..."
}
```

## Common Error Scenarios

1. **Transaction Failures**
   - Invalid transaction format
   - Insufficient funds
   - Invalid signature
   - Transaction too large

2. **Account Issues**
   - Invalid account
   - Account not found
   - Permission denied
   - Invalid account state

3. **Balance Problems**
   - Insufficient balance
   - Vesting restrictions
   - Liquidity issues
   - Arithmetic overflow/underflow

## Best Practices

1. **Error Handling**
   - Always implement proper error handling
   - Check for specific error codes
   - Provide user-friendly error messages
   - Log errors for debugging

2. **Transaction Management**
   - Verify transaction parameters before submission
   - Check account balances
   - Handle transaction timeouts
   - Implement retry logic for transient errors

3. **Account Management**
   - Validate account existence
   - Check account permissions
   - Verify account state
   - Handle account creation/deletion properly

## Related Documentation

- [Custom Errors](./custom.md) - Bittensor's custom error codes
- [Subtensor Errors](./subtensor.md) - Errors from the Subtensor blockchain implementation
- [Substrate Documentation](https://docs.substrate.io) - Official Substrate documentation 