---
title: "Subtensor Storage Query Examples"
---

# Subtensor Storage Query Examples

## 1. ActivityCutoff

- **Description**: Activity cutoff for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `5000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ActivityCutoff', [netuid])
    print(result.value)
    ```

## 2. AdjustmentAlpha

- **Description**: Alpha adjustment value for the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'AdjustmentAlpha', [netuid])
    print(result.value)
    ```

## 3. AdjustmentInterval

- **Description**: Adjustment interval for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `100`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'AdjustmentInterval', [netuid])
    print(result.value)
    ```

## 4. AlphaValues

- **Description**: Alpha values for the network.
- **Query Type**: `u16 -> (u16, u16)`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `(45875, 58982)`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'AlphaValues', [netuid])
    print(result.value)
    ```

## 5. Axons

- **Description**: Axon information for a given hotkey within a network.
- **Query Type**: `(u16, AccountId) -> AxonInfoOf`
- **Parameters**:
  - `netuid`: `u16`
  - `hotkey`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'Axons', [netuid, hotkey])
    print(result.value)
    ```

## 6. BlockAtRegistration

- **Description**: Block number at registration for a given UID.
- **Query Type**: `(u16, u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
  - `uid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    uid = 123
    result = substrate.query('SubtensorModule', 'BlockAtRegistration', [netuid, uid])
    print(result.value)
    ```

## 7. BlockEmission

- **Description**: The total block emission value.
- **Query Type**: `u64`
- **Default Value**: `1000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'BlockEmission')
    print(result.value)
    ```

## 8. BlocksSinceLastStep

- **Description**: Number of blocks since the last mechanism step.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'BlocksSinceLastStep', [netuid])
    print(result.value)
    ```

## 9. Bonds

- **Description**: Bond values of UIDs in a network.
- **Query Type**: `(u16, u16) -> Vec<(u16, u16)>`
- **Parameters**:
  - `netuid`: `u16`
  - `uid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    uid = 123
    result = substrate.query('SubtensorModule', 'Bonds', [netuid, uid])
    print(result.value)
    ```

## 10. BondsMovingAverage

- **Description**: Moving average of bonds in the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `900000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'BondsMovingAverage', [netuid])
    print(result.value)
    ```

## 11. Burn

- **Description**: Burn value for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Burn', [netuid])
    print(result.value)
    ```

## 12. BurnRegistrationsThisInterval

- **Description**: Number of burn registrations in this interval.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'BurnRegistrationsThisInterval', [netuid])
    print(result.value)
    ```

## 13. ChildKeys

- **Description**: Maps parent keys to child keys with proportions.
- **Query Type**: `(AccountId, u16) -> Vec<(u64, AccountId)>`
- **Parameters**:
  - `parent`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    parent = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'ChildKeys', [parent, netuid])
    print(result.value)
    ```

## 14. CommitRevealWeightsEnabled

- **Description**: Indicates whether the commit-reveal process for weights is enabled for a given network.
- **Query Type**: `u16 -> bool`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'CommitRevealWeightsEnabled', [netuid])
    print(result.value)
    ```

## 15. Consensus

- **Description**: Consensus values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Consensus', [netuid])
    print(result.value)
    ```

## 16. Delegates

- **Description**: Returns the hotkey delegation take, signaling that this key is open for delegation.
- **Query Type**: `AccountId -> u16`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `11796`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'Delegates', [hotkey])
    print(result.value)
    ```

## 17. Difficulty

- **Description**: Difficulty parameter for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `10000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Difficulty', [netuid])
    print(result.value)
    ```

## 18. Dividends

- **Description**: Dividend values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Dividends', [netuid])
    print(result.value)
    ```

## 19. Emission

- **Description**: Emission values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u64>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Emission', [netuid])
    print(result.value)
    ```

## 20. EmissionValues

- **Description**: Emission values of the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'EmissionValues', [netuid])
    print(result.value)
    ```

## 21. HasMigrationRun

- **Description**: Storage for migration run status.
- **Query Type**: `Vec<u8> -> bool`
- **Parameters**:
  - `key`: `Vec<u8>`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    key = b"migrate_identities"
    result = substrate.query('SubtensorModule', 'HasMigrationRun', [key])
    print(result.value)
    ```

## 22. HotkeyEmissionTempo

- **Description**: The emission tempo of hotkeys.
- **Query Type**: `u64`
- **Default Value**: `7200`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'HotkeyEmissionTempo')
    print(result.value)
    ```

## 23. Identities

- **Description**: Identity information for a given coldkey.
- **Query Type**: `AccountId -> ChainIdentityOf`
- **Parameters**:
  - `coldkey`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'Identities', [coldkey])
    print(result.value)
    ```

## 24. ImmunityPeriod

- **Description**: Immunity period for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `4096`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ImmunityPeriod', [netuid])
    print(result.value)
    ```

## 25. Incentive

- **Description**: Incentive values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Incentive', [netuid])
    print(result.value)
    ```

## 26. IsNetworkMember

- **Description**: Whether a hotkey is a member of a network.
- **Query Type**: `(AccountId, u16) -> bool`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'IsNetworkMember', [hotkey, netuid])
    print(result.value)
    ```

## 27. Kappa

- **Description**: Kappa parameter of the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `32767`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Kappa', [netuid])
    print(result.value)
    ```    

## 28. Keys

- **Description**: Maps UID to hotkey within a network.
- **Query Type**: `(u16, u16) -> AccountId`
- **Parameters**:
  - `netuid`: `u16`
  - `uid`: `u16`
- **Default Value**: `AccountId derived from trailing zeroes`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    uid = 123
    result = substrate.query('SubtensorModule', 'Keys', [netuid, uid])
    print(result.value)
    ```

## 29. LastAddStakeIncrease

- **Description**: Last block number when stake was increased for a hotkey-coldkey pair.
- **Query Type**: `(AccountId, AccountId) -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `coldkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'LastAddStakeIncrease', [hotkey, coldkey])
    print(result.value)
    ```

## 30. LastAdjustmentBlock

- **Description**: Block number of the last adjustment for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'LastAdjustmentBlock', [netuid])
    print(result.value)
    ```

## 31. LastHotkeyEmissionDrain

- **Description**: Last block we drained this hotkey's emission.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'LastHotkeyEmissionDrain', [hotkey])
    print(result.value)
    ```

## 32. LastMechanismStepBlock

- **Description**: Last block when the mechanism step was performed.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'LastMechanismStepBlock', [netuid])
    print(result.value)
    ```

## 33. LastTxBlock

- **Description**: Last block for a transaction key.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `key`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    key = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'LastTxBlock', [key])
    print(result.value)
    ```

## 34. LastTxBlockDelegateTake

- **Description**: Last block for a delegate take transaction key.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `key`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    key = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'LastTxBlockDelegateTake', [key])
    print(result.value)
    ```

## 35. LastUpdate

- **Description**: Last update values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u64>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'LastUpdate', [netuid])
    print(result.value)
    ```

## 36. LiquidAlphaOn

- **Description**: Whether Liquid Alpha is enabled.
- **Query Type**: `u16 -> bool`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'LiquidAlphaOn', [netuid])
    print(result.value)
    ```

## 37. LoadedEmission

- **Description**: Emission data loaded for a network.
- **Query Type**: `u16 -> Vec<(AccountId, u64, u64)>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'LoadedEmission', [netuid])
    print(result.value)
    ```

## 38. MaxAllowedUids

- **Description**: Maximum allowed UIDs for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `4096`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MaxAllowedUids', [netuid])
    print(result.value)
    ```

## 39. MaxAllowedValidators

- **Description**: Maximum allowed validators for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `128`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MaxAllowedValidators', [netuid])
    print(result.value)
    ```

## 40. MaxBurn

- **Description**: Maximum burn value for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `100000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MaxBurn', [netuid])
    print(result.value)
    ```

## 41. MaxDifficulty

- **Description**: Maximum difficulty parameter for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `u64::MAX / 4`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MaxDifficulty', [netuid])
    print(result.value)
    ```

## 42. MaxRegistrationsPerBlock

- **Description**: Maximum registrations allowed per block.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `block`: `u16`
- **Default Value**: `1`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    block = 100
    result = substrate.query('SubtensorModule', 'MaxRegistrationsPerBlock', [block])
    print(result.value)
    ```

## 43. MaxTake

- **Description**: Maximum take percentage for delegations.
- **Query Type**: `u16`
- **Default Value**: `11796`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MaxTake')
    print(result.value)
    ```

## 44. MaxWeightsLimit

- **Description**: Maximum weight limit for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MaxWeightsLimit', [netuid])
    print(result.value)
    ```

## 45. MinAllowedWeights

- **Description**: Minimum allowed weights for networks.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1024`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MinAllowedWeights', [netuid])
    print(result.value)
    ```

## 46. MinBurn

- **Description**: Minimum burn value for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MinBurn', [netuid])
    print(result.value)
    ```

## 47. MinDifficulty

- **Description**: Minimum difficulty parameter for a given network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `10000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'MinDifficulty', [netuid])
    print(result.value)
    ```

## 48. MinTake

- **Description**: Minimum take percentage for delegations.
- **Query Type**: `u16`
- **Default Value**: `5898`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MinTake')
    print(result.value)
    ```

## 49. NetworkImmunityPeriod

- **Description**: Immunity period for networks.
- **Query Type**: `u64`
- **Default Value**: `50400`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkImmunityPeriod')
    print(result.value)
    ```

## 50. NetworkLastLockCost

- **Description**: Last lock cost for networks.
- **Query Type**: `u64`
- **Default Value**: `1000000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkLastLockCost')
    print(result.value)
    ```

## 51. NetworkLastRegistered

- **Description**: Last registered block number for networks.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkLastRegistered')
    print(result.value)
    ```

## 52. NetworkLockReductionInterval

- **Description**: Lock reduction interval for networks.
- **Query Type**: `u64`
- **Default Value**: `100800`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkLockReductionInterval')
    print(result.value)
    ```

## 53. NetworkMaxStake

- **Description**: Max stake allowed on a subnet.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `500000000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkMaxStake', [netuid])
    print(result.value)
    ```

## 54. NetworkMinAllowedUids

- **Description**: Minimum allowed UIDs for networks.
- **Query Type**: `u16`
- **Default Value**: `128`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkMinAllowedUids')
    print(result.value)
    ```

## 55. NetworkMinLockCost

- **Description**: Minimum lock cost for networks.
- **Query Type**: `u64`
- **Default Value**: `1000000000000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkMinLockCost')
    print(result.value)
    ```

## 56. NetworkModality

- **Description**: Modality of the network (0: TEXT, 1: IMAGE, 2: TENSOR).
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkModality', [netuid])
    print(result.value)
    ```

## 57. NetworkPowRegistrationAllowed

- **Description**: Whether PoW registration is allowed in the network.
- **Query Type**: `u16 -> bool`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkPowRegistrationAllowed', [netuid])
    print(result.value)
    ```

## 58. NetworkRateLimit

- **Description**: Network rate limit.
- **Query Type**: `u64`
- **Default Value**: `7200` (`0` if `pow-faucet` feature is enabled)
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkRateLimit')
    print(result.value)
    ```

## 59. NetworkRegisteredAt

- **Description**: Block number when the network was registered.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkRegisteredAt', [netuid])
    print(result.value)
    ```

## 60. NetworkRegistrationAllowed

- **Description**: Whether registration is allowed in the network.
- **Query Type**: `u16 -> bool`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkRegistrationAllowed', [netuid])
    print(result.value)
    ```

## 61. NetworksAdded

- **Description**: Whether the network has been added.
- **Query Type**: `u16 -> bool`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `false`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworksAdded', [netuid])
    print(result.value)
    ```

## 62. NeuronsToPruneAtNextEpoch

- **Description**: UIDs of neurons to be pruned at the next epoch.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NeuronsToPruneAtNextEpoch', [netuid])
    print(result.value)
    ```

## 63. NominatorMinRequiredStake

- **Description**: Minimum required stake for nominators.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NominatorMinRequiredStake')
    print(result.value)
    ```

## 64. Owner

- **Description**: Returns the controlling coldkey for a hotkey.
- **Query Type**: `AccountId -> AccountId`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `AccountId derived from trailing zeroes`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'Owner', [hotkey])
    print(result.value)
    ```

## 65. OwnedHotkeys

- **Description**: Returns the vector of hotkeys controlled by this coldkey.
- **Query Type**: `AccountId -> Vec<AccountId>`
- **Parameters**:
  - `coldkey`: `AccountId`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'OwnedHotkeys', [coldkey])
    print(result.value)
    ```

## 66. ParentKeys

- **Description**: Maps child keys to parent keys with proportions.
- **Query Type**: `(AccountId, u16) -> Vec<(u64, AccountId)>`
- **Parameters**:
  - `child`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    child = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'ParentKeys', [child, netuid])
    print(result.value)
    ```

## 67. PendingEmission

- **Description**: Pending emission of the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'PendingEmission', [netuid])
    print(result.value)
    ```

## 68. PendingHotkeyEmission

- **Description**: Accumulated hotkey emission.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'PendingHotkeyEmission', [hotkey])
    print(result.value)
    ```

## 69. POWRegistrationsThisInterval

- **Description**: Number of PoW registrations in this interval.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'POWRegistrationsThisInterval', [netuid])
    print(result.value)
    ```

## 70. PruningScores

- **Description**: Pruning scores of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'PruningScores', [netuid])
    print(result.value)
    ```

## 71. RAORecycledForRegistration

- **Description**: Global RAO recycled for registration.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'RAORecycledForRegistration', [netuid])
    print(result.value)
    ```

## 72. Rank

- **Description**: Rank values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Rank', [netuid])
    print(result.value)
    ```

## 73. RegistrationsThisBlock

- **Description**: Number of registrations in the current block for a given network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'RegistrationsThisBlock', [netuid])
    print(result.value)
    ```

## 74. Rho

- **Description**: Rho parameter of the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `10`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Rho', [netuid])
    print(result.value)
    ```

## 75. ScalingLawPower

- **Description**: Scaling law power for the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `50`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ScalingLawPower', [netuid])
    print(result.value)
    ```

## 76. SenateRequiredStakePercentage

- **Description**: The percentage of stake required by the Senate.
- **Query Type**: `u64`
- **Default Value**: `1`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'SenateRequiredStakePercentage')
    print(result.value)
    ```

## 77. ServingRateLimit

- **Description**: Rate limit for serving in the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `50`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ServingRateLimit', [netuid])
    print(result.value)
    ```

## 78. Stake

- **Description**: Returns the stake under a coldkey prefixed by hotkey.
- **Query Type**: `(AccountId, AccountId) -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `coldkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'Stake', [hotkey, coldkey])
    print(result.value)
    ```

## 79. StakeInterval

- **Description**: Interval for stakes.
- **Query Type**: `u64`
- **Default Value**: `360`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'StakeInterval')
    print(result.value)
    ```

## 80. StakeWeight

- **Description**: Weight for stake used in YC.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'StakeWeight', [netuid])
    print(result.value)
    ```

## 81. StakingHotkeys

- **Description**: Maps coldkey to hotkeys that stake to it.
- **Query Type**: `AccountId -> Vec<AccountId>`
- **Parameters**:
  - `coldkey`: `AccountId`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'StakingHotkeys', [coldkey])
    print(result.value)
    ```

## 82. SubnetLimit

- **Description**: Maximum number of networks.
- **Query Type**: `u16`
- **Default Value**: `12`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'SubnetLimit')
    print(result.value)
    ```

## 83. SubnetLocked

- **Description**: Locked amount in the subnet.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetLocked', [netuid])
    print(result.value)
    ```

## 84. SubnetOwner

- **Description**: Owner of the subnet.
- **Query Type**: `u16 -> AccountId`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `AccountId derived from trailing zeroes`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetOwner', [netuid])
    print(result.value)
    ```

## 85. SubnetOwnerCut

- **Description**: Subnet owner cut percentage.
- **Query Type**: `u16`
- **Default Value**: `11796`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'SubnetOwnerCut')
    print(result.value)
    ```

## 86. SubnetworkN

- **Description**: Number of UIDs in the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetworkN', [netuid])
    print(result.value)
    ```

## 87. TargetRegistrationsPerInterval

- **Description**: Target registrations per interval for the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `2`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'TargetRegistrationsPerInterval', [netuid])
    print(result.value)
    ```

## 88. TargetStakesPerInterval

- **Description**: Target stakes per interval.
- **Query Type**: `u64`
- **Default Value**: `1`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TargetStakesPerInterval')
    print(result.value)
    ```

## 89. Tempo

- **Description**: Tempo of the network.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `99`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Tempo', [netuid])
    print(result.value)
    ```

## 90. TotalColdkeyStake

- **Description**: Returns the total amount of stake under a coldkey.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `coldkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'TotalColdkeyStake', [coldkey])
    print(result.value)
    ```

## 91. TotalHotkeyColdkeyStakesThisInterval

- **Description**: Returns a tuple (u64: stakes, u64: block_number) for a given hotkey and coldkey.
- **Query Type**: `(AccountId, AccountId) -> (u64, u64)`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `coldkey`: `AccountId`
- **Default Value**: `(0, 0)`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'TotalHotkeyColdkeyStakesThisInterval', [hotkey, coldkey])
    print(result.value)
    ```

## 92. TotalHotkeyStake

- **Description**: Returns the total amount of stake under a hotkey.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'TotalHotkeyStake', [hotkey])
    print(result.value)
    ```

## 93. TotalIssuance

- **Description**: Represents the total issuance of tokens on the Bittensor network.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TotalIssuance')
    print(result.value)
    ```

## 94. TotalNetworks

- **Description**: Total number of existing networks.
- **Query Type**: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TotalNetworks')
    print(result.value)
    ```

## 95. TotalStake

- **Description**: The total amount of tokens staked in the system.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TotalStake')
    print(result.value)
    ```

## 96. TransactionKeyLastBlock

- **Description**: Last block of a transaction for a given key, netuid, and name.
- **Query Type**: `(AccountId, u16, u16) -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `netuid`: `u16`
  - `name`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    name = 1
    result = substrate.query('SubtensorModule', 'TransactionKeyLastBlock', [hotkey, netuid, name])
    print(result.value)
    ```

## 97. Trust

- **Description**: Trust values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'Trust', [netuid])
    print(result.value)
    ```

## 98. TxDelegateTakeRateLimit

- **Description**: Transaction delegate take rate limit.
- **Query Type**: `u64`
- **Default Value**: `216000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TxDelegateTakeRateLimit')
    print(result.value)
    ```

## 99. TxRateLimit

- **Description**: Transaction rate limit.
- **Query Type**: `u64`
- **Default Value**: `1000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TxRateLimit')
    print(result.value)
    ```

## 100. Uids

- **Description**: Maps hotkey to UID within a network.
- **Query Type**: `(u16, AccountId) -> u16`
- **Parameters**:
  - `netuid`: `u16`
  - `hotkey`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'Uids', [netuid, hotkey])
    print(result.value)
    ```

## 101. UsedWork

- **Description**: Global used work storage.
- **Query Type**: `Vec<u8> -> u64`
- **Parameters**:
  - `key`: `Vec<u8>`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    key = b"some_key"
    result = substrate.query('SubtensorModule', 'UsedWork', [key])
    print(result.value)
    ```

## 102. ValidatorPermit

- **Description**: Validator permit values of UIDs in a network.
- **Query Type**: `u16 -> Vec<bool>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ValidatorPermit', [netuid])
    print(result.value)
    ```

## 103. ValidatorPruneLen

- **Description**: Length of validator pruning.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ValidatorPruneLen', [netuid])
    print(result.value)
    ```

## 104. ValidatorTrust

- **Description**: Validator trust values of UIDs in a network.
- **Query Type**: `u16 -> Vec<u16>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'ValidatorTrust', [netuid])
    print(result.value)
    ```

## 105. WeightCommits

- **Description**: Returns the hash and weight committed by an account for a given netuid.
- **Query Type**: `(u16, AccountId) -> (H256, u64)`
- **Parameters**:
  - `netuid`: `u16`
  - `who`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    who = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'WeightCommits', [netuid, who])
    print(result.value)
    ```

## 106. WeightCommitRevealInterval

- **Description**: Interval for the commit-reveal process of weights.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'WeightCommitRevealInterval', [netuid])
    print(result.value)
    ```

## 107. Weights

- **Description**: Weight values of UIDs in a network.
- **Query Type**: `(u16, u16) -> Vec<(u16, u16)>`
- **Parameters**:
  - `netuid`: `u16`
  - `uid`: `u16`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    uid = 123
    result = substrate.query('SubtensorModule', 'Weights', [netuid, uid])
    print(result.value)
    ```

## 108. WeightsMinStake

- **Description**: Minimum stake required for weights.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'WeightsMinStake')
    print(result.value)
    ```

## 109. WeightsSetRateLimit

- **Description**: Rate limit for setting weights in the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `100`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'WeightsSetRateLimit', [netuid])
    print(result.value)
    ```

## 110. WeightsVersionKey

- **Description**: Version key for weights in the network.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'WeightsVersionKey', [netuid])
    print(result.value)
    ```