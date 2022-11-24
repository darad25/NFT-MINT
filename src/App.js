import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./routes/navigation/navigation.component";
import Web3 from "web3";
import { useState } from "react";
import  NftAbi  from "./artifacts/contracts/NFT.sol/NFT.json";

function App() {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState("");

  async function loadWeb3() {
    if (window.ethereum) {
      //window.ethereum is metamask/dapp wallet service which is present in your browswer as long as you have the extensions installed.
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      let accounts;
      console.log("present");
      try {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        console.error(error);
        return;
      }
      setAccount(accounts[0]);

      const networkID = await web3.eth.net.getId();
      setNetworkId(networkID);

      console.log(networkID);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkID = await web3.eth.net.getId();
      console.log("Network: ", networkID);
      setNetworkId(networkID);
    } else {
      window.alert("please download metamask");
    }
  }

  //to do simple contract calls after laoding web3 you need the abi of the contract you want to call
  //using hardhat if you run 'npx hardhat compile' you get your abis generated for you in your artifacts folder in your repo
  //now i will call and send tx using NFT.sol

  async function callFunc() {
    const abi = NftAbi.abi;
    const contractAddress = ""; //addr of contract to call
    const web3 = new Web3(window.ethereum);

    const contractInstance = new web3.eth.Contract(abi, contractAddress);

    contractInstance.methods
      .mint("0x00address youre minting to", "num of nfts to be minted") // check mint func in sol file, you hve to provide the accepted args for it to work 
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        console.log("tx hash", hash);
      })
      .once("confirmation", function (confirmationNumber, receipt) {
        console.log("Transaction confirmed", confirmationNumber);
        console.log("tx receipt", receipt);
      })
      .on("error", function (error, receipt) {
        console.log("Transaction failed, try again", error);
      });
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {
          /**this is button that connects metamask to the dapp, basic dapp initialiaztion, 
           * loadWeb3 collects info like address and network id which is needed for dapp to run  */
          // !acccount here means  if account is undefined, conneect wallet button should show,
          // this makes sense because you need to set it, once set, you dont need to display the button anymore
          !account && (
            <button
              onClick={() => {
                loadWeb3();
              }}
              style={{ padding: "4px, 6px", fontSize: "30px" }}
            >
              connect wallet
            </button>
          )
        }
        {
          //this just means if account as defined in line 9 is no longer undefined/empty show the text in p tag
          account && <p>account connected as {account}</p>
        }
        {
          //this means button will only show if account is no longer undefined/empty, means it will show if account is already set
          account && (
            <button
              onClick={() => {
                callFunc();
              }}
              style={{ padding: "4px, 6px", fontSize: "30px" }}
            >
              mint
            </button>
          )
        }
      </header>
    </div>
  );
}

export default App;
