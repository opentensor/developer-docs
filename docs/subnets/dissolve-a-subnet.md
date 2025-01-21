---
title: "Dissolve a Subnet"
---
<!-- How to cancel a schedules dissolve order??? -->
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Dissolve a Subnet

The owner of a subnet can schedule it to be dissolved after a waiting period of five days. In case the subnet is deregistered before the 5 days are elapsed, the owner receives their [locked subnet registration costs](./recycled-tao.md#tao-is-locked) back without having to wait for the full 5 days.

The Bittensor CLI ('btcli') does not support this operation, but it can be performed by submitting an extrinsic transaction directly to the Bittensor network's Substrate blockchain. Two ways of doing this are:

- [Use the Polkadot JS browser extension](#use-the-polkdadot-js-browser-extension)
- [Use the `SubstrateInterface` Python module](#use-the-substrateinterface-python-module)

:::danger Proceed with caution, All subnet metagraph will be cleared
When a subnet is dissolved, all currently registered subnet miners and subnet validators will be deregistered, and the subnet metagraph will be cleared.  
:::

## Use the Polkdadot JS browser extension

You can schedule your subnet to be dissolved by calling the `scheduleDissolveNetwork` extrinsic directly from the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics) website. 


### Prereqs

:::warn
If this subnet is used by others in production or test, be sure to communicate the intent, timeline of the subnet dissolution, and any future plans, to the community of your subnet's miners and validators.
:::

1. Access to the [wallet/coldkey](../tools.md#wallets-and-keys) that owns the subnet
2. The [Polkadot JS extension](https://polkadot.js.org/extension/).
3. Your subnet coldkey imported into the Polkadot JS browser extension and connected to the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/explorer) website.


### Step 1: Connect to the subtensor network on Polkadot.js

Open your web browser and navigate to the Polkadot.js Apps website (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/).

### Step 2: Navigate to the Extrinsics page

From the top navigation menu, proceed to **Developer** > **Extrinsics** to open the Extrinsics page. If you do not see this option, then make sure you successfully imported your subnet coldkey into the Polkadot JS extension, and connected this coldkey account to the Polkadot.js Apps website. 


:::tip Do not see Developer > Extrinsics option?
You must successfully import your subnet coldkey into the Polkadot JS extension, and connect the subnet coldkey account to the Polkadot.js Apps website, as noted in step 3 in the above [Before you proceed](#before-you-proceed) section, to use this extrinsic. If you do not do this step, then you will not see **Developer** > **Extrinsics** option on the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/extrinsics) website. 
:::

### Step 3: Select your connected account

Locate the drop-down section labeled **using the selected account** and select your connected account. This account should be the coldkey that owns the subnet and it will have the necessary permissions to dissolve the subnet.

<center>
<ThemedImage
alt="'1-Dissolving a subnet'"
sources={{
    light: useBaseUrl('/img/docs/1-schedule-dissolve-network.png'),
    dark: useBaseUrl('/img/docs/1-schedule-dissolve-network.png'),
}}
style={{width: 900}}
/>
</center>

<br />

### Step 4: Select the `subtensorModule`

Locate the drop-down section labeled **submit the following extrinsic** and select `subtensorModule`.

### Step 5: Choose the `scheduleDissolveNetwork` function 

After selecting the `subtensorModule`, a second drop-down menu will appear on the right side of it. From this drop-down select the `scheduleDissolveNetwork(netuid)`  option. 

### Step 6: Provide the required values

Provide the required values as shown below:

- If you have not already provided this in the above Step 3, then for the `origin` argument, select the appropriate account from the **using the selected account** drop-down. This account should have the necessary permissions to dissolve the network.
- For the `netuid` argument, enter the `netuid` of the subnet you want to dissolve. 

### Step 7: Submit the transaction

Check again that you have entered the correct `netuid` value.

<center>
<ThemedImage
alt="'1-Dissolving a subnet'"
sources={{
    light: useBaseUrl('/img/docs/2-schedule-dissolve-network.png'),
    dark: useBaseUrl('/img/docs/2-schedule-dissolve-network.png'),
}}
style={{width: 900}}
/>
</center>

<br />


Scroll down to the bottom of the page and click on the **Submit Transaction** button.

Polkadot.js will prompt you to sign the transaction using the selected account.
After you sign the transaction, the signed transaction will be broadcast to the Subtensor.

### Step 8: Monitor the transaction status

After submitting the transaction, you can monitor its status in the **Network** > **Explorer** section. 

In the **Explorer** page, click on the **Node Info** in the top navigation bar. You will see a status of the recent blocks and transactions. Look for your transaction in the list and click on it to view its details and status.

If the transaction is successful, the network with the specified `netuid` will be dissolved after five (`5`) days, and the associated subnet data will be removed from the Subtensor storage.


## Use the `SubstrateInterface` Python module

You can dissolve a subnet you own with the ['SubstrateInterface' python module](https://polkascan.github.io/py-substrate-interface), allows users to submit extrinc transactions to Bittensor (or other Substrate chains.

### Prereqs

1. You must be the owner of the subnet coldkey to manually deregister your subnet.
2. You must use the [Polkadot JS extension](https://polkadot.js.org/extension/). The `btcli` tool does not support subnet deregistration.
3. You must import your subnet coldkey (wallet) into the Polkadot JS extension and connect this coldkey (wallet) account to the [polkadot.js.org/apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fentrypoint-finney.opentensor.ai%3A443#/explorer) website. 
4. Before you dissolve your subnet, make sure you communicate your intent and timeline of the subnet dissolution to the subnet miners and subnet validators in your subnet, and to your community.

Use the bittensor and substrateinterface Python modules to dissolve a subnet by submitting an extrinsic transaction to the blockchain:

```python
from substrateinterface import SubstrateInterface
import bittensor as bt


node = SubstrateInterface(url="wss://entrypoint-<YOUR ENTRYPOINT>.opentensor.ai:443")
wallet = bt.wallet(name="<REPLACE WITH YOUR SUBNET ENDPOINT>")

def print_extrinsic_receipt(receipt):
    success_event = False
    batch_interrupted_event = None
    error_message = None
    for event in receipt.triggered_events:
        event_details = event.value['event']
        module_id = event_details['module_id']
        event_id = event_details['event_id']

        if module_id == 'System' and event_id == 'ExtrinsicSuccess':
            success_event = True
        elif module_id == 'Utility' and event_id == 'BatchInterrupted':
            batch_interrupted_event = event
            error_message = int(event_details['attributes']['error']['Module']['error'], 16) >> 24

    print(f"Extrinsic included in block: {receipt.block_hash}")
    print(f"Extrinsic hash: {receipt.extrinsic_hash}")
    print(f"Block number: {receipt.block_number}")
    print(f"Events: {receipt.triggered_events}")

    if batch_interrupted_event:
        print("Extrinsic failed due to a batch interruption")
        if error_message:
            print(f"Error message: {error_message}")
    elif success_event:
        print("Extrinsic succeeded")
    else:
        print("Extrinsic failed")
        if receipt.error_message:
            print(f"Error message: {receipt.error_message}")

def dissolve_network(node, wallet, netuid):
    call = node.compose_call(
        call_module="SubtensorModule",
        call_function="schedule_dissolve_network",
        call_params={
            "netuid": netuid,
            "coldkey": wallet.coldkey,
        }
    )
    return call

def submit_extrinsic(node, wallet, call):
    extrinsic = node.create_signed_extrinsic(
        call=call,
        keypair=wallet.coldkey,
    )
    print("Submitting extrinsic")

    wait_for_inclusion = True
    response = node.submit_extrinsic(extrinsic, wait_for_inclusion=wait_for_inclusion, wait_for_finalization=True)

    if wait_for_inclusion:
        print_extrinsic_receipt(response)


netuid_to_dissolve = 36
call = dissolve_network(node, wallet, netuid_to_dissolve)
submit_extrinsic(node, wallet, call)
```
