
# Testnet


The Bittensor Testnet is built to verify incoming changes and features made by developers. The block explorer can be reached [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest.finney.opentensor.ai%3A443#/explorer).

To run your Neuron or Validator on the test network, users can simply add the following flag to the Neuron or Validator calls:
```bash dark
--subtensor.chain_endpoint wss://test.finney.opentensor.ai:443
```

You can also use network and the chain endpoint will be automatically configured to the testnet endpoint:
```bash dark
--subtensor.network test
```

This will point the system towards the testnet blockchain. You can also run a local version of the test network by in Subtensor by modifying `--chain` flag to use the test network spec file `--chain raw_spec_testfinney.json`:
```bash dark
./node-subtensor --chain test_finney --rpc-external --rpc-cors all --ws-external --no-mdns --sync warp --bootnodes /ip4/192.81.212.20/tcp/30333/p2p/12D3KooWQawexXodtsPEymJUX1X2eKzjNq6s8MvzEWtKwJ6mLmzy
```

### Testnet taokenomics
The consensus mechanism, validation, and mining are all identical between the test net and the main net, with the only exception being that there is no Tao issued to Neurons (meaning emissions are 0).



