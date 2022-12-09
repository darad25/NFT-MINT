async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const name = "NFT"; 
    const symbol = "N";
    const initbaseuri = "https://gateway.pinata.cloud/ipfs/QmY7guLVCTdU8uK4243Ef2oDoWv72xjdnnfgJ5h4fkALvE/";

    const Token = await ethers.getContractFactory("NFT");
    const token = await Token.mint(0xeaDAA842467028D51fAe2f838F56515540F00F79, 1);
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });