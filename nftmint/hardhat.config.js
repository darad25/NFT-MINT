
require ("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "HZBLvKY4WpjV2tFknIaNZy2EbWtAZpwo";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "ffcac71d0d7ae3fe567eb27fc05800c560a126543d5006f9cde84e9a496bfe0f";

module.exports = { 
      solidity : "0.8.9",
      networks : {
         goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${"HZBLvKY4WpjV2tFknIaNZy2EbWtAZpwo"}`,
            accounts: ["ffcac71d0d7ae3fe567eb27fc05800c560a126543d5006f9cde84e9a496bfe0f"]
         }     
  }
};