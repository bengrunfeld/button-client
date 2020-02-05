import { useState, useEffect } from "react";
import { GameScreen, Info } from "../";
import { errVal } from "./constants";

const checkEthereumSupport = window => typeof window.ethereum !== "undefined";

const HomePage = ({ data }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if the browser supports dapps. If not, bail and render info message
    const isEthSupported = checkEthereumSupport(window);

    if (!isEthSupported) {
      setError(errVal.notSupported);
      return;
    }

    // User is already logged in, so take them to the Game Screen
    if (ethereum.selectedAddress) return;

    // Manually reload page after User login. MetaMask suggests doing this.
    ethereum.on("networkChanged", networkId => {
      window.location.reload(false);
    });

    // If user not signed, sign them in.
    const activateAccount = async () => {
      ethereum.autoRefreshOnNetworkChange = false;

      try {
        setError(errVal.notLoggedIn);
        await ethereum.enable();
      } catch (loginError) {
        if (loginError === "User rejected provider access") {
          setError(errVal.loginRefused);
          return;
        }

        if (loginError.code === 4001) {
          setError(errVal.accessDeniedByUser);
          return;
        }

        // Should never get here
        console.log(`ERROR - Login Error: ${JSON.stringify(loginError)}`);
        throw `ERROR - Login Error: ${JSON.stringify(loginError)}`;
      }

      // Check if we're on the Rinkeby network
      if (ethereum.networkVersion !== "4") {
        setError(errVal.wrongNetwork);
        return;
      }

      // Takes a little time for address to become available
      setTimeout(() => {
        if (!ethereum.selectedAddress) {
          setError(errVal.notLoggedIn);
          return;
        }
        setError(false);
      }, 1000);
    };

    activateAccount();
  }, []);

  // If ethereum dapp is not supported in Browser, request
  // that User navigates to MetaMask and installs it.
  if (error === errVal.notSupported)
    return (
      <Info
        title="Your browser does not support Ethereum apps"
        message="To continue, please click the link below to install MetaMask, and then
        return to this site"
        link="https://metamask.io"
      />
    );

  if (error === errVal.loginRefused)
    return (
      <Info
        title="It seems you refused to login to log in to MetaMask"
        message="To make the app work, refresh the page and log in to MetaMask"
      />
    );

  if (error === errVal.wrongNetwork)
    return (
      <Info
        title="You are on the wrong network"
        message="Please click on the MetaMask extension and change to the network to Rinkeby"
      />
    );

  if (error === errVal.notLoggedIn)
    return (
      <Info
        title="You are not logged in"
        message="Please click on the MetaMask browser extension and finish logging in or creating an account"
      />
    );

  if (error === errVal.accessDeniedByUser)
    return (
      <Info
        title="You denied our access request in the MetaMask extension"
        message="We need you to give us access via MetaMask to continue. Please refresh the page and hit OK to the access request."
      />
    );

  return <GameScreen data={data} />;
};

export default HomePage;
