// Import the Web3 and fs modules.
const Web3 = require('web3');
const fs = require('fs');

// Define the RPC URLs for the Mumbai and Swisstronik networks.
const mumbaiRpcUrl = 'https://rpc-mumbai.matic.today';
const swisstronikRpcUrl = 'https://rpc.swisstronik.com';

// Create new Web3 instances for the Mumbai and Swisstronik networks.
const mumbaiWeb3 = new Web3(mumbaiRpcUrl);
const swisstronikWeb3 = new Web3(swisstronikRpcUrl);

// Define the contract address and private state variable slot.
const contractAddress = '0x472af99B0c089f981C755c1199Ae208Ac71fF3BB';
const privateStateVarSlot = '0x0000000000000000000000000000000000000000000000000000000000000000';

// Define an async function to get the private state variable value.
async function getPrivateStateVar(web3, rpcUrl) {
  // Get the storage value at the contract address and private state variable slot.
  const storage = await web3.eth.getStorageAt(contractAddress, privateStateVarSlot);

  // Log the private state variable value and the RPC URL.
  console.log(`Private state variable value on ${rpcUrl}:`, storage);
}

// Get the private state variable value on the Mumbai network.
getPrivateStateVar(mumbaiWeb3, mumbaiRpcUrl);

// Get the private state variable value on the Swisstronik network.
getPrivateStateVar(swisstronikWeb3, swisstronikRpcUrl);
