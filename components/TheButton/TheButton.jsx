import { Button } from "./TheButton.styles";

const sendEth = () => {
  const fromAccount = ethereum.selectedAddress;
  const method = "eth_sendTransaction";
  const destinationAddress = "0x4dB238a8AC1647378373d0F97B9351B074b7B1c9";
  const value = "1";

  const parameters = [
    {
      from: fromAccount,
      to: destinationAddress,
      value: value,
    },
  ];

  const payload = {
    method: method,
    params: parameters,
    from: fromAccount,
  };

  const callback = (error, response) => {
    const rejected = "User denied transaction signature.";

    if (response.error && response.error.code === 4001) {
      console.log(`We can't take your money without your permission.`);
      return;
    }

    if (error) {
      console.log("There was an issue, please try again.");
      return;
    }

    if (response.result) {
      console.log("Ether sent successfully!");
      return;
    }
  };

  ethereum.send(payload, callback);
};

const TheButton = () => {
  return <Button onClick={sendEth}>PRESS</Button>;
};

export default TheButton;
