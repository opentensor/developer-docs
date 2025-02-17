---
title: "Subtensor Storage Query Examples"
---

# Subtensor Storage Query Examples

:::danger 
Some of the below may not be accurate due to the recent Dynamic TAO release. These will be updated in the next few days, apologies for the inconvenience.
:::


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

## 4. AlphaDividendsPerSubnet

- **Description**: Last total alpha dividend for a hotkey on a subnet.
- **Query Type**: `(u16, AccountId) -> u64`
- **Parameters**:
  - `netuid`: `u16`
  - `hotkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'AlphaDividendsPerSubnet', [netuid, hotkey])
    print(result.value)
    ```

## 5. AlphaValues

- **Description**: Alpha values for the network (lower and upper alpha).
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

## 6. AvgTempo

- **Description**: Global average tempo.
- **Query Type**: `u16`
- **Default Value**: `30`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'AvgTempo')
    print(result.value)
    ```

## 7. Axons

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

## 8. BlockAtRegistration

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

## 9. BlockEmission

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

## 10. BlocksSinceLastStep

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

## 11. Bonds

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

## 12. BondsMovingAverage

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

## 13. BondsPenalty

- **Description**: Bonds penalty setting for a subnet.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'BondsPenalty', [netuid])
    print(result.value)
    ```

## 14. Burn

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

## 15. BurnRegistrationsThisInterval

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

## 16. ChildkeyTake

- **Description**: Returns the childkey take for a given hotkey on a specific subnet.
- **Query Type**: `(AccountId, u16) -> u16`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'ChildkeyTake', [hotkey, netuid])
    print(result.value)
    ```

## 17. ChildKeys

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

## 18. ColdkeySwapScheduleDuration

- **Description**: The block duration for which a coldkey swap schedule must wait before execution.
- **Query Type**: `u32`
- **Default Value**: `36000` (approx. 5 days at 12s blocks)
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'ColdkeySwapScheduleDuration')
    print(result.value)
    ```

## 19. CommitRevealWeightsEnabled

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

## 20. Consensus

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

## 21. CRV3WeightCommits

- **Description**: Stores a queue of v3 commits for an account on a given netuid and epoch.
- **Query Type**: `(u16, u64) -> VecDeque<(AccountId, Vec<u8>, u64)>`
- **Parameters**:
  - `netuid`: `u16`
  - `commit_epoch`: `u64`
- **Default Value**: `[]`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    commit_epoch = 100
    result = substrate.query('SubtensorModule', 'CRV3WeightCommits', [netuid, commit_epoch])
    print(result.value)
    ```

## 22. Delegates

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

## 23. Difficulty

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

## 24. DissolveNetworkScheduleDuration

- **Description**: The block duration required before a network dissolve schedule executes.
- **Query Type**: `u32`
- **Default Value**: `36000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'DissolveNetworkScheduleDuration')
    print(result.value)
    ```

## 25. Dividends

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

## 26. DynamicBlock

- **Description**: Block number when the dynamic logic was enabled.
- **Query Type**: `u64`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'DynamicBlock')
    print(result.value)
    ```

## 27. Emission

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

## 28. EmissionValues

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

## 29. HasMigrationRun

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

## 30. IdentitiesV2

- **Description**: Identity information for a given coldkey (v2 format).
- **Query Type**: `AccountId -> ChainIdentityOfV2`
- **Parameters**:
  - `coldkey`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Charlie').ss58_address
    result = substrate.query('SubtensorModule', 'IdentitiesV2', [coldkey])
    print(result.value)
    ```

## 31. ImmunityPeriod

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

## 32. Incentive

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

## 33. IsNetworkMember

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

## 34. Kappa

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

## 35. Keys

- **Description**: Maps UID to hotkey within a network.
- **Query Type**: `(u16, u16) -> AccountId`
- **Parameters**:
  - `netuid`: `u16`
  - `uid`: `u16`
- **Default Value**: `AccountId` derived from trailing zeroes
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    uid = 123
    result = substrate.query('SubtensorModule', 'Keys', [netuid, uid])
    print(result.value)
    ```

## 36. LastAddStakeIncrease

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

## 37. LastAdjustmentBlock

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

## 38. LastColdkeyHotkeyStakeBlock

- **Description**: Last block at which stake was added/removed for a coldkey-hotkey pair.
- **Query Type**: `(AccountId, AccountId) -> u64`
- **Parameters**:
  - `coldkey`: `AccountId`
  - `hotkey`: `AccountId`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    coldkey = Keypair.create_from_uri('//Alice').ss58_address
    hotkey = Keypair.create_from_uri('//Bob').ss58_address
    result = substrate.query('SubtensorModule', 'LastColdkeyHotkeyStakeBlock', [coldkey, hotkey])
    print(result.value)
    ```

## 39. LastHotkeyColdkeyEmissionOnNetuid

- **Description**: Last emission block for a hotkey-coldkey pair on a given netuid.
- **Query Type**: `(AccountId, AccountId, u16) -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `coldkey`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    coldkey = Keypair.create_from_uri('//Bob').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'LastHotkeyColdkeyEmissionOnNetuid', [hotkey, coldkey, netuid])
    print(result.value)
    ```

## 40. LastHotkeyEmissionDrain

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

## 41. LastHotkeyEmissionOnNetuid

- **Description**: Last emission block for a hotkey on a given netuid.
- **Query Type**: `(AccountId, u16) -> u64`
- **Parameters**:
  - `hotkey`: `AccountId`
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'LastHotkeyEmissionOnNetuid', [hotkey, netuid])
    print(result.value)
    ```

## 42. LastMechansimStepBlock

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
    result = substrate.query('SubtensorModule', 'LastMechansimStepBlock', [netuid])
    print(result.value)
    ```

## 43. LastTxBlock

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

## 44. LastTxBlockChildKeyTake

- **Description**: Last block for a childkey take transaction.
- **Query Type**: `AccountId -> u64`
- **Parameters**:
  - `key`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    key = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'LastTxBlockChildKeyTake', [key])
    print(result.value)
    ```

## 45. LastTxBlockDelegateTake

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

## 46. LastUpdate

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

## 47. LiquidAlphaOn

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

## 48. LoadedEmission

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

## 49. MaxAllowedUids

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

## 50. MaxAllowedValidators

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

## 51. MaxBurn

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

## 52. MaxChildkeyTake

- **Description**: Maximum childkey take (percentage * 65535) for child-keys.
- **Query Type**: `u16`
- **Default Value**: `11796`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MaxChildkeyTake')
    print(result.value)
    ```

## 53. MaxDelegateTake

- **Description**: Maximum delegate take (percentage * 65535) for delegations.
- **Query Type**: `u16`
- **Default Value**: `11796`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MaxDelegateTake')
    print(result.value)
    ```

## 54. MaxDifficulty

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

## 55. MaxRegistrationsPerBlock

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

## 56. MaxTempo

- **Description**: Global maximum tempo.
- **Query Type**: `u16`
- **Default Value**: `30`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MaxTempo')
    print(result.value)
    ```

## 57. MaxWeightsLimit

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

## 58. MinAllowedWeights

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

## 59. MinBurn

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

## 60. MinChildkeyTake

- **Description**: Minimum childkey take (percentage * 65535) for child-keys.
- **Query Type**: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MinChildkeyTake')
    print(result.value)
    ```

## 61. MinDelegateTake

- **Description**: Minimum delegate take (percentage * 65535) for delegations.
- **Query Type**: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MinDelegateTake')
    print(result.value)
    ```

## 62. MinDifficulty

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

## 63. MinStake

- **Description**: Minimum stake requirement (global).
- **Query Type**: `u64`
- **Default Value**: `500000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'MinStake')
    print(result.value)
    ```

## 64. NetworkImmunityPeriod

- **Description**: Immunity period for networks (global).
- **Query Type**: `u64`
- **Default Value**: `50400`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkImmunityPeriod')
    print(result.value)
    ```

## 65. NetworkLastLockCost

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

## 66. NetworkLastRegistered

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

## 67. NetworkLockReductionInterval

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

## 68. NetworkMaxStake

- **Description**: Max stake allowed on a subnet.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `18446744073709551615`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'NetworkMaxStake', [netuid])
    print(result.value)
    ```

## 69. NetworkMinAllowedUids

- **Description**: Minimum allowed UIDs for networks (global).
- **Query Type**: `u16`
- **Default Value**: `128`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkMinAllowedUids')
    print(result.value)
    ```

## 70. NetworkMinLockCost

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

## 71. NetworkModality

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

## 72. NetworkPowRegistrationAllowed

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

## 73. NetworkRateLimit

- **Description**: Network rate limit.
- **Query Type**: `u64`
- **Default Value**: `7200`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'NetworkRateLimit')
    print(result.value)
    ```

## 74. NetworkRegisteredAt

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

## 75. NetworkRegistrationAllowed

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

## 76. NetworksAdded

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

## 77. NeuronsToPruneAtNextEpoch

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

## 78. NominatorMinRequiredStake

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

## 79. Owner

- **Description**: Returns the controlling coldkey for a hotkey.
- **Query Type**: `AccountId -> AccountId`
- **Parameters**:
  - `hotkey`: `AccountId`
- **Default Value**: `AccountId` derived from trailing zeroes
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'Owner', [hotkey])
    print(result.value)
    ```

## 80. OwnedHotkeys

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

## 81. ParentKeys

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

## 82. PendingChildKeys

- **Description**: Pending child keys to be applied after cooldown.
- **Query Type**: `(u16, AccountId) -> (Vec<(u64, AccountId)>, u64)`
- **Parameters**:
  - `netuid`: `u16`
  - `parent`: `AccountId`
- **Default Value**: `( [], 0 )`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    parent = Keypair.create_from_uri('//Alice').ss58_address
    netuid = 1
    result = substrate.query('SubtensorModule', 'PendingChildKeys', [netuid, parent])
    print(result.value)
    ```

## 83. PendingEmission

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

## 84. PendingdHotkeyEmission

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
    result = substrate.query('SubtensorModule', 'PendingdHotkeyEmission', [hotkey])
    print(result.value)
    ```

## 85. POWRegistrationsThisInterval

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

## 86. PruningScores

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

## 87. RAORecycledForRegistration

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

## 88. Rank

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

## 89. RegistrationsThisBlock

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

## 90. RevealPeriodEpochs

- **Description**: Number of epochs allowed for commit-reveal periods on a given netuid.
- **Query Type**: `u16 -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `1`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'RevealPeriodEpochs', [netuid])
    print(result.value)
    ```

## 91. Rho

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

## 92. ScalingLawPower

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

## 93. SenateRequiredStakePercentage

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

## 94. ServingRateLimit

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

## 95. StakingFee

- **Description**: Staking fee (global).
- **Query Type**: `u64`
- **Default Value**: `50000`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'StakingFee')
    print(result.value)
    ```

## 96. StakingHotkeys

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

## 97. StakeWeight

- **Description**: Weight for stake used in YC (consensus).
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

## 98. SubnetAlphaEmissionSell

- **Description**: Alpha sold per block in the subnet.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetAlphaEmissionSell', [netuid])
    print(result.value)
    ```

## 99. SubnetAlphaIn

- **Description**: Amount of alpha in the subnet's liquidity pool.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetAlphaIn', [netuid])
    print(result.value)
    ```

## 100. SubnetAlphaInEmission

- **Description**: Amount of alpha entering a subnet per block.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetAlphaInEmission', [netuid])
    print(result.value)
    ```

## 101. SubnetAlphaOut

- **Description**: Amount of alpha in the subnet itself.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetAlphaOut', [netuid])
    print(result.value)
    ```

## 102. SubnetAlphaOutEmission

- **Description**: Amount of alpha leaving a subnet per block.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetAlphaOutEmission', [netuid])
    print(result.value)
    ```

## 103. SubnetIdentitiesV2

- **Description**: Identity information for a subnet (v2 format).
- **Query Type**: `u16 -> SubnetIdentityOfV2`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `None`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetIdentitiesV2', [netuid])
    print(result.value)
    ```

## 104. SubnetLimit

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

## 105. SubnetLocked

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

## 106. SubnetMechanism

- **Description**: Mechanism identifier for the subnet.
- **Query Type**: `u16 -> u16`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetMechanism', [netuid])
    print(result.value)
    ```

## 107. SubnetMovingAlpha

- **Description**: Moving alpha parameter for the dynamic subnet price.
- **Query Type**: `I96F32`
- **Default Value**: `0.000003`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'SubnetMovingAlpha')
    print(result.value)
    ```

## 108. SubnetMovingPrice

- **Description**: The moving average price for a subnet.
- **Query Type**: `(u16) -> I96F32`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0.0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetMovingPrice', [netuid])
    print(result.value)
    ```

## 109. SubnetName

- **Description**: The name of the subnet.
- **Query Type**: `u16 -> Vec<u8>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `𝜏`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetName', [netuid])
    print(result.value)
    ```

## 110. SubnetOwner

- **Description**: Owner of the subnet.
- **Query Type**: `u16 -> AccountId`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `AccountId` derived from trailing zeroes
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetOwner', [netuid])
    print(result.value)
    ```

## 111. SubnetOwnerCut

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

## 112. SubnetTAO

- **Description**: Amount of TAO in a given subnet's pool.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetTAO', [netuid])
    print(result.value)
    ```

## 113. SubnetVolume

- **Description**: Total volume of TAO bought/sold for a subnet.
- **Query Type**: `(u16) -> u128`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'SubnetVolume', [netuid])
    print(result.value)
    ```

## 114. SubnetworkN

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

## 115. TaoDividendsPerSubnet

- **Description**: Last total root dividend for a hotkey on a subnet.
- **Query Type**: `(u16, AccountId) -> u64`
- **Parameters**:
  - `netuid`: `u16`
  - `hotkey`: `AccountId`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface, Keypair

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    hotkey = Keypair.create_from_uri('//Alice').ss58_address
    result = substrate.query('SubtensorModule', 'TaoDividendsPerSubnet', [netuid, hotkey])
    print(result.value)
    ```

## 116. TaoWeight

- **Description**: A global parameter representing "Tao weight" in the system.
- **Query Type**: `u64`
- **Default Value**: `971718665099567868`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TaoWeight')
    print(result.value)
    ```

## 117. TargetRegistrationsPerInterval

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

## 118. TargetStakesPerInterval

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

## 119. Tempo

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

## 120. TokenSymbol

- **Description**: The token symbol for a subnet.
- **Query Type**: `u16 -> Vec<u8>`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `"\xF0\x9D\x9C\x8F"`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface

    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'TokenSymbol', [netuid])
    print(result.value)
    ```

## 121. TotalColdkeyStake

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

## 122. TotalHotkeyStake

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

## 123. TotalIssuance

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

## 124. TotalNetworks

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

## 125. TotalStake

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

## 126. TotalStakeAtDynamic

- **Description**: Total stake in the system at the moment of subnet registration under dynamic pricing.
- **Query Type**: `(u16) -> u64`
- **Parameters**:
  - `netuid`: `u16`
- **Default Value**: `0`
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    netuid = 1
    result = substrate.query('SubtensorModule', 'TotalStakeAtDynamic', [netuid])
    print(result.value)
    ```

## 127. TransactionKeyLastBlock

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

## 128. Trust

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

## 129. TxChildkeyTakeRateLimit

- **Description**: Transaction childkey take rate limit.
- **Query Type**: `u64`
- **Default Value**: `0` or chain-defined
- **Python Example**:
    ```python
    from substrateinterface import SubstrateInterface
    
    substrate = SubstrateInterface(url="ws://127.0.0.1:9945")
    result = substrate.query('SubtensorModule', 'TxChildkeyTakeRateLimit')
    print(result.value)
    ```

## 130. TxDelegateTakeRateLimit

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

## 131. TxRateLimit

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

## 132. Uids

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

## 133. UsedWork

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

## 134. ValidatorPermit

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

## 135. ValidatorPruneLen

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

## 136. ValidatorTrust

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

## 137. WeightCommitRevealInterval

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

## 138. WeightCommits

- **Description**: Returns the commit data for an account on a given netuid (commit-reveal).
- **Query Type**: `(u16, AccountId) -> VecDeque<(H256, u64, u64, u64)>`
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

## 139. Weights

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

## 140. WeightsMinStake

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

## 141. WeightsSetRateLimit

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

## 142. WeightsVersionKey

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
