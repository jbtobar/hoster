var HDWalletProvider = require('truffle-hdwallet-provider')
var Web3 = require("web3");

module.exports = function (mnemonic,url) {
      provider = new HDWalletProvider(mnemonia, url)
      web3 = new Web3(provider)
      return web3
}  
