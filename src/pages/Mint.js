import React, { useEffect, useState } from "react";
import mintImg from '../img/imgmint.png';
import {
  contract,
  connectWallet,
  getCurrentWalletConnected,
  mint,
  loadAmountMinted
} from "../util/interact.js";

const Mint = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [maxMintPerWallet, setMaxMintPerWallet] = useState(2);
  let [count, setCount] = useState(1);
  const [_amountMinted, set_amountMinted] = useState();
  const [_maxSupply, set_maxSupply] = useState(100);

  //called only once
  useEffect(async () => {
    async function fetchCurrentAmountMinted() {
      const _curAmountMinted = await loadAmountMinted();
      set_amountMinted(_curAmountMinted);
    }
    fetchCurrentAmountMinted();
    currentAmountMintedListener();

    async function fetchWallet() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
    }
    fetchWallet();
    addWalletListener();

  }, []);

  function currentAmountMintedListener() {
    contract.events.AmountMinted({}, (error, data) => {
      if (error) {
        setStatus("😥 " + error.message);
      } else {
        set_amountMinted(data.returnValues[0]);
        setStatus("🎉");
      }
    })
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  /*const connectWalletPressed = async () => {
    if (walletAddress == "") {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
    } else {
      setStatus("👍 Connected");
      setWallet(0);
    }
  };*/

  function incrementCount() {
    if (count < maxMintPerWallet) {
      count = count + 1;
      setCount(count);
    }
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  }

  const onMintPressed = async (e) => {
    e.preventDefault();
    await mint(walletAddress, count);
  }

  //the UI of our component
  return (
    <div id="header-mint">
      <div id="minting-row">
        <div id="image-minting-card"></div>
        <div id="minting-card">
          <button id="wallet-button" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (
              String(walletAddress).substring(0, 5) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span>🦊 Connect Wallet</span>
            )}
          </button>
          <div id="minting-section">
            <div id="supply-left">
              <p>FREE MINT</p>
              <p>Max 2 NFT per mint</p>
              <p>{_amountMinted} / {_maxSupply}</p>
            </div>
            <div id="choose-mint-number-div">
              <button id="increment-decrement" onClick={decrementCount}>-</button>
              <div id="count-to-mint">{count}</div>
              <button id="increment-decrement" onClick={incrementCount}>+</button>
            </div>
            <div id="mint-button-div">
              <button id="mint-button" onClick={onMintPressed}>
                Mint {count} NFT
              </button>
            </div>
          </div>
        </div >
      </div>
    </div>

  );
};

export default Mint;