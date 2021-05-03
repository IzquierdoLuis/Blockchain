const Block = require('./block');
const BlockChain = require('./blockChain');

// let block = new Block(0, "Chiste de pepito jajaja", null);
// console.log(block);

const blockChain = new BlockChain("coin data");

blockChain.addBlock("Data second block");
blockChain.addBlock("Data thirth block");

console.log(blockChain);