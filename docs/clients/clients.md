
# API


The Bittensor API allows clients to query the network through endpoints that have been made accessible by network validators. Clients using the network do not have to be otherwise involved in the incentive mechanism of the network. The default endpoint that is accessed through the API belongs to the [Opentensor Foundation](https://opentensor.ai/), however, any network validator is able to provide a unique entrypoint.

All entrypoints can be viewed using **btcli root list_delegates**:

```bash dark
0      Openτensor Foundaτion
            https://opentensor.ai/

1      Foundry
            https://foundrydigital.com/

3      τaosτaτs
            https://taostats.io/
...
```

### Validator key

Power users who have a validator key registered on the network already do not need to access the network indirectly, and can instead make RPC connections directly to miners like so:

With [prompting](https://github.com/opentensor/text-prompting#installation) installed. 

```python numbered dark
import bittensor as bt
import prompting

wallet = bt.wallet() # Your validator wallet.
dendrite = bt.dendrite(wallet=wallet)
metagraph = bt.metagraph( netuid = 1 ) # Get state from subnetwork 1.
uids =  [<your target query uids>]

responses = await dendrite(
        axons=[metagraph.axons[uid] for uid in uids],
        synapse=prompting.protocol.Prompting(roles=["user"], messages=["Should I buy a boat?"]),
        timeout=12,
)
[r.completion for r in responses] 
```
