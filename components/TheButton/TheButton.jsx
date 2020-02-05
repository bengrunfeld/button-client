import { Button } from "./TheButton.styles";

const sendEth = (startCountdown, gameTime, timerRef, setTimerRef) => {
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
      alert(`We can't take your money without your permission.`);
      return;
    }

    if (error) {
      alert("There was an issue, please try again.");
      return;
    }

    if (response.result) {
      console.log("Ether sent successfully!");

      console.log(gameTime, timerRef);

      // Clean up the old timer
      if (timerRef) clearInterval(timerRef);

      // Reset the timer
      const newTimer = startCountdown(gameTime + 1);

      // Store the new timer in state
      setTimerRef(newTimer);

      return;
    }
  };

  ethereum.send(payload, callback);
};

const TheButton = ({ startCountdown, gameTime, timerRef, setTimerRef }) => {
  return (
    <Button
      onClick={sendEth.bind(
        this,
        startCountdown,
        gameTime,
        timerRef,
        setTimerRef
      )}
    >
      PRESS
    </Button>
  );
};

export default TheButton;
