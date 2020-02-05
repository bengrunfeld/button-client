import { Well, Title, InfoTitle, SmallInfoMessage } from "../Common";
import { GameContainer } from "./GameScreen.styles";
import { TheButton, Clock } from "../";
import { useState, useEffect } from "react";

const GameScreen = ({ data }) => {
  const fullGameTime = 5;
  const [timeLeft, setTimeLeft] = useState(fullGameTime);
  const [timerRef, setTimerRef] = useState(false);

  const startCountdown = timeRemaining => {
    let time = timeRemaining;

    const timer = setInterval(() => {
      time = time - 1;
      setTimeLeft(time);

      if (time === 0) {
        clearInterval(timer);
        alert("You won! Game Over.");
        setTimeLeft(fullGameTime);
      }
    }, 1000);

    return timer;
  };

  return (
    <GameContainer>
      <Title>The Button Game</Title>
      <Well>
        <InfoTitle>Click the button to play</InfoTitle>

        <TheButton
          startCountdown={startCountdown}
          gameTime={fullGameTime}
          timerRef={timerRef}
          setTimerRef={setTimerRef}
        />

        <Clock timeLeft={timeLeft} />

        <SmallInfoMessage>
          Game Rules: This is a multiplayer game. Once someone presses the
          button, they deposit money into a kitty and timer starts. If someone
          else presses the button, they too deposit money into the kitty and the
          timer resets. If the timer reaches zero, the last person to have
          pressed it wins all the money. WARNING: Pressing the button will cost
          you Ether + gas. Have fun and good luck!
        </SmallInfoMessage>
      </Well>
    </GameContainer>
  );
};

export default GameScreen;
