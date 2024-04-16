/* 
DESCRIPTION
===========
This "bt-next-adjustment-block.js" script queries a Bittensor subnet to find out how many blocks to go before the recycle register cost is recalculated. In any subnet, the recycle register cost is recalculated after every "adjustment_interval" number of blocks. See "Subnet Hyperparameters" documentation section https://docs.bittensor.com/subnets/subnet-hyperparameters. This script works like this: It gets the "lastAdjustmentBlock", i.e., the block number when the recalculation was performed last, and adds the value of the subnet's "adjustment_interval" parameter to it. This gives the block number for the next recalculation. Finally, the script checks the current block number and outputs how many blocks to go for the next recalculation. 

INSTALLATION STEPS
==================
1. Install Node.js from https://nodejs.org/en/download/. This will install both "npm" and "node" on your Linux or macOS system.
2. Install the following packages:
   npm install @polkadot/api
   npm install prompt-sync
3. Run this script using the command "node bt-next-adjustment-block.js". Follow the prompts to enter the network and subnet number.

EXAMPLE
=======

$ node bt-next-adjustment-block.js
Enter network (finney, subvortex, local): finney
Enter subnet netuid to query:2
Information for subnet 2
-=-=-=-=-=-=-=-=-=-=-=-=-=-
Last Adjustment Block: 2773930
Adjustment Interval: 360
Next Adjustment Block:  2774290
Current Block:  2774272
Blocks to go: 18 in approximately 216 seconds ( 3.6 minutes).

Written by @Jackalgirl starting with an initial barebones version by Watchmaker.
Version: 1.0.0
*/


const { ApiPromise, WsProvider } = require("@polkadot/api");
const prompt = require("prompt-sync")();

// If you do not want to be prompted for network when running the script,
// change this variable to "finney" to default to the finney endpoint,
//  or "local" if you want to default to your own subtensor endpoint.

let network = "";

// If you have your own local subtensor and want to use its entry point, specify
// your entrypoint's wss address here (e.g., "wss://127.0.0.1:443")

let localNetworkEntryPoint = "";

if (network === "") {
  network = prompt("Enter network (finney, subvortex, local): ");
}

if ((network === "local" || network === "l") && localNetworkEntryPoint != "") {
  networkEntryPoint = localNetworkEntryPoint;
} else {
  networkEntryPoint = "wss://entrypoint-finney.opentensor.ai:443";
}

let subnet = prompt("Enter subnet netuid to query:");

if (!(Number.isInteger(subnet)) || subnet < 1 || subnet > 32) {
  subnet == 1;
} else {
  subnet == subnet;
}

async function queryBittensorData() {
  const wsProvider = new WsProvider(
    networkEntryPoint  );
  const api = await ApiPromise.create({ provider: wsProvider });

  const [
    lastAdjustmentBlock,
    adjustmentInterval,
    currentBlock,
  ] = await Promise.all([
    api.query.subtensorModule.lastAdjustmentBlock(subnet),
    api.query.subtensorModule.adjustmentInterval(subnet),
    api.query.system.number(),
  ]);

  let nextAdjustmentBlock = lastAdjustmentBlock.toNumber() + adjustmentInterval.toNumber();
  let currentBlockNumber = currentBlock.toNumber();
  let blocksToGo = nextAdjustmentBlock - currentBlockNumber;

  console.log(`Information for subnet`,subnet);
  console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-`);
  console.log(`Last Adjustment Block: ${lastAdjustmentBlock.toNumber()}`);
  console.log(`Adjustment Interval: ${adjustmentInterval.toNumber()}`);
  console.log(`Next Adjustment Block: `, nextAdjustmentBlock);
  console.log(`Current Block: `, currentBlockNumber);
  console.log(`Blocks to go:`,blocksToGo,`in approximately`,blocksToGo*12,`seconds (`,blocksToGo*12/60,`minutes).`);
}

queryBittensorData()
  .catch(console.error)
  .finally(() => process.exit());

console.warn = () => {};