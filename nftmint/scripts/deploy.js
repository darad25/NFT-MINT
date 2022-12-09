async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const name = "NFT"; 
    const symbol = "N";
    const initbaseuri = "https://gateway.pinata.cloud/ipfs/QmY7guLVCTdU8uK4243Ef2oDoWv72xjdnnfgJ5h4fkALvE/";

    const Token = await ethers.getContractFactory("NFT");
    const token = await Token.deploy("NFT", "N", "https://gateway.pinata.cloud/ipfs/QmY7guLVCTdU8uK4243Ef2oDoWv72xjdnnfgJ5h4fkALvE/");
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });