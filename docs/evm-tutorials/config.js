// PROTECT YOUR PRIVATE KEYS WELL, NEVER COMMIT THEM TO GITHUB OR SHARE WITH ANYONE
const ethPrivateKey = "0xC3467d8BA8F76018F39a98996bf5677E16b33755";
const subSeed = "//Alice";
const rpcUrlLocal = 'http://127.0.0.1:9946';
const rpcUrlTestnet = 'https://test.chain.opentensor.ai';
const wsUrlLocal = 'ws://127.0.0.1:9946';
const wsUrlTestnet = 'wss://evm-testnet.dev.opentensor.ai';

module.exports = {
    ethPrivateKey,
    subSeed,
    rpcUrl: rpcUrlTestnet,
    wsUrl: wsUrlTestnet,
}

module.exports = {
    rpcUrl: 'https://test.chain.opentensor.ai',
  };