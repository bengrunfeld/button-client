import { Well, Title, InfoTitle, SmallInfoMessage } from "../Common";
import { GameContainer } from "./GameScreen.styles";
import { TheButton } from "../";

const GameScreen = ({ data, account }) => (
  <GameContainer>
    <Title>The Button Game</Title>
    <Well>
      <InfoTitle>Click the button to play</InfoTitle>

      <TheButton account={account} />

      <SmallInfoMessage>
        Game Rules: This is a multiplayer game. Once someone presses the button,
        they deposit money into a kitty and timer starts. If someone else
        presses the button, they too deposit money into the kitty and the timer
        resets. If the timer reaches zero, the last person to have pressed it
        wins all the money. WARNING: Pressing the button will cost you Ether +
        gas. Have fun and good luck!
      </SmallInfoMessage>
    </Well>
  </GameContainer>
);

export default GameScreen;
