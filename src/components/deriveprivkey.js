
const ethers = require('ethers');
let mnemonic = "put mnemonic here";
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet.privateKey);

