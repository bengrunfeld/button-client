import { useState, useEffect } from "react";
import { GameScreen, NotSupported } from "../";

const checkEthereumSupport = window => typeof window.ethereum !== "undefined";

const HomePage = ({ data }) => {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setTimeout(() => setSupported(checkEthereumSupport(window)), 1000);
  });

  // If ethereum dapp is not supported in Browser, request
  // that User navigates to MetaMask and installs it.
  return supported ? <GameScreen data={data} /> : <NotSupported data={data} />;
};

export default HomePage;

// import Cookies from "js-cookie";
// Cookies.set("userInfo", "Ben");
