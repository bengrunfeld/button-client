import { useState, useEffect } from "react";
import { GameScreen, SignInPage } from "../";

const checkEthereumSupport = window => typeof window.ethereum !== "undefined";

const HomePage = ({ data }) => {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(checkEthereumSupport(window));
  });

  // If ethereum dapp is not supported in Browser, request
  // that User navigates to MetaMask and installs it.
  return supported ? <GameScreen data={data} /> : <SignInPage data={data} />;
};

export default HomePage;

// import Cookies from "js-cookie";
// Cookies.set("userInfo", "Ben");
