---
title: "Yuma Consensus 3 (YC3) Migration Guide"
---

# Yuma Consensus 3 (YC3) Migration Guide

Yuma Consensus 3 (YC3) is the latest version of the Yuma Consensus mechanism with significant improvements to validator fairness, bond mechanics, and precision handling. This guide will help subnet owners understand what's changed and how to migrate.

See also:
- [How Yuma Consensus 3 Makes Bittensor More Fair](../yc3-blog.md) - Technical deep dive and mathematical foundations
- [Subnet Hyperparameters](./subnet-hyperparameters.md) - Complete parameter reference
- [Yuma Consensus](../yuma-consensus.md) - Understanding the consensus mechanism
- [Subnet Creation](./create-a-subnet.md) - Creating new subnets with YC3

## What is YC3?

YC3 is a drop-in replacement for the existing Yuma Consensus mechanism that addresses several critical issues while maintaining backward compatibility. **Most subnet owners won't need to make any changes** - the upgrade is designed to be seamless.

The most significant innovation in YC3 is **per-bond EMA scaling**: each validator-miner bond pair now gets its own adjustment rate (alpha value) rather than using a single rate for all bonds. This allows individual relationships to evolve at different speeds based on performance and consensus differences.

## Key Improvements in YC3

### 1. **Fair Validator Treatment**
- **Problem Fixed**: Small validators were previously penalized simply for being small due to rounding issues
- **YC3 Solution**: Bond values are now computed using fixed-point arithmetic and converted to u16 for storage efficiency, allowing precise fractional relationships while maintaining a 0-65535 storage scale

### 2. **Bond Precision Issues**
- **Problem Fixed**: 16-bit integer precision was insufficient for bond accumulation, causing some validators to receive no bonds despite giving weight to miners
- **YC3 Solution**: Enhanced precision handling with fixed-point arithmetic ensures all validators receive appropriate bond allocations

### 3. **Bond Upscaling and Decay**
- **Problem Fixed**: Bond upscaling from the pump and bond decay when consensus is zero were causing unfair distributions
- **YC3 Solution**: Fixed bond mechanics with enhanced EMA smoothing ensure more predictable and fair reward distribution

### 4. **Early Recognition Rewards**
- **New Feature**: Validators who identify promising miners before they become widely recognized can now start accumulating bonds early through individual alpha values
- **Technical Implementation**: The alpha sigmoid function calculates adjustment rates based on the difference between a validator's current weights and network consensus

### 5. **Enhanced Tunability**
- **New Feature**: Additional parameters allow subnet owners to fine-tune their consensus mechanisms
- **Backward Compatible**: Existing subnets continue to work with default settings

## Migration Process

### Automatic Migration
YC3 is designed as a **drop-in replacement**. For most subnet owners:

1. **No action required** - Your subnet will continue to function normally
2. **Validators and miners** don't need to update their code
3. **Existing configurations** remain valid

### Enabling YC3 (Optional)
If you want to explicitly enable YC3 features on your subnet:

```bash
# View current YC3 status
btcli subnet hyperparameters --netuid YOUR_NETUID

# Enable YC3 (if not already enabled)
btcli sudo set --param YC3_enabled --value true --netuid YOUR_NETUID
```

### Liquid Alpha Integration
YC3 works seamlessly with Liquid Alpha when specific conditions are met:
1. Liquid Alpha must be enabled for the subnet
2. Consensus values must exist and contain non-zero values  
3. The network must have sufficient activity

When these conditions are satisfied, validators receive additional rewards for voting for miners that aren't yet receiving votes from others.

```bash
# Enable Liquid Alpha (enhances YC3 benefits)
btcli sudo set --param liquid_alpha_enabled --value true --netuid YOUR_NETUID
```

## New Tunable Parameters

YC3 introduces additional hyperparameters for advanced subnet customization:

### Alpha Sigmoid Steepness
Controls the steepness of the alpha sigmoid function, affecting reward distribution curves and how quickly bonds adjust to weight changes.

```bash
# Set alpha sigmoid steepness
btcli sudo set --param alpha_sigmoid_steepness --value YOUR_VALUE --netuid YOUR_NETUID
```

### Bonds Moving Average
The adjustment rate is controlled by the bonds moving average parameter, which can be configured up to 97.5% (meaning bonds change by 2.5% per epoch toward their target values).

```bash
# Adjust bond smoothing (typical value: 975000 for 2.5% per epoch)
btcli sudo set --param bonds_moving_avg --value 975000 --netuid YOUR_NETUID
```

### Alpha High/Low Parameters
Fine-tune the range of alpha values used in the sigmoid function:

```bash
# Set alpha range parameters
btcli sudo set --param alpha_high --value YOUR_VALUE --netuid YOUR_NETUID
btcli sudo set --param alpha_low --value YOUR_VALUE --netuid YOUR_NETUID
```

## Real-World Example: Subnet 2

Subnet 2 successfully migrated to YC3 with the following experience:
- **Migration**: Seamless activation
- **Stabilization**: Required a couple of tempo periods to stabilize
- **Current Status**: Fully operational with improved fairness
- **Key Benefit**: Small validators now receive fair rewards proportional to their contributions

## Expected Timeline

- **Current**: YC3 is live and being adopted by subnets
- **Recommendation**: Monitor your subnet's performance after the network upgrade
- **Timeline**: No forced migration deadline - subnets can adopt when ready

## Monitoring Your Migration

After YC3 is active on your subnet, monitor these metrics:

### Validator Performance
- Check that small validators are receiving appropriate rewards
- Verify bond accumulation is working correctly for all validator sizes
- Monitor individual alpha values being applied to validator-miner pairs

### Bond Distribution
- Monitor bond allocation patterns
- Ensure no validators are experiencing zero-bond issues
- Check that early recognition is being rewarded appropriately

### Consensus Behavior
- Watch for improved stability in consensus calculations
- Check that bond decay behavior is more predictable
- Monitor the effectiveness of Liquid Alpha if enabled

## Troubleshooting

### Common Issues

#### Stabilization Period
- **Symptom**: Temporary fluctuations in rewards after migration
- **Solution**: Allow 2-3 tempo periods for the system to stabilize
- **Expected**: This is normal behavior during the transition as bonds adjust to new alpha values

#### Zero Bond Issues (Pre-YC3)
- **Symptom**: Validators giving weight but receiving no bonds
- **Solution**: YC3 fixes this automatically through improved precision and individual alpha scaling

#### Liquid Alpha Not Working
- **Symptom**: Expected early recognition rewards not materializing
- **Check**: Ensure Liquid Alpha is enabled and consensus values exist
- **Solution**: Verify network activity meets minimum thresholds for Liquid Alpha operation

### Getting Help

If you experience issues during migration:

1. **Check the logs** for any error messages
2. **Monitor for 2-3 tempo periods** to allow stabilization
3. **Compare metrics** before and after migration
4. **Verify parameter settings** using `btcli subnet hyperparameters`
5. **Reach out** to the Bittensor community for support

## Advanced Configuration

### Custom Parameter Tuning

For subnet owners who want to leverage YC3's enhanced tunability:

```bash
# Example: Fine-tune consensus behavior
btcli sudo set --param bonds_moving_avg --value YOUR_VALUE --netuid YOUR_NETUID

# Example: Adjust alpha parameters for different reward curves
btcli sudo set --param alpha_sigmoid_steepness --value YOUR_VALUE --netuid YOUR_NETUID
btcli sudo set --param alpha_high --value YOUR_VALUE --netuid YOUR_NETUID
btcli sudo set --param alpha_low --value YOUR_VALUE --netuid YOUR_NETUID
```

:::tip Parameter Values
Most users will benefit from using values of 0 or 1 for boolean parameters rather than intermediate values, though intermediate values are supported. For numeric parameters, start with default values and adjust gradually.
:::

### Testing Configuration

Before applying changes to your mainnet subnet:

1. Test parameter changes on testnet first
2. Monitor impact over multiple tempo periods
3. Document baseline performance before changes
4. Have a rollback plan for parameter reversion

## Benefits After Migration

### For Validators
- **Fairer rewards** regardless of validator size through fixed-point arithmetic
- **More predictable** bond accumulation with individual alpha values
- **Improved precision** in reward calculations eliminating rounding issues
- **Early recognition rewards** for identifying promising miners first

### For Subnet Owners
- **More tunable parameters** for customization including alpha sigmoid controls
- **Better consensus stability** through enhanced EMA smoothing
- **Enhanced control** over reward distribution curves
- **Compatibility with Liquid Alpha** for additional validator incentives

### For the Network
- **More equitable** participation incentives encouraging smaller validators
- **Reduced barriers** for smaller validators through precision improvements
- **Improved overall** consensus quality through better bond mechanics
- **Innovation incentives** through early recognition rewards

## Next Steps

1. **Monitor** your subnet's current performance metrics
2. **Consider enabling Liquid Alpha** to enhance YC3 benefits
3. **Plan** for optional parameter tuning if desired
4. **Stay updated** on additional YC3 features as they're released
5. **Consider** the new parameters for optimizing your subnet's specific use case
6. **Test advanced configurations** on testnet before mainnet deployment
