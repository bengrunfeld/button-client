import {
  InfoLink,
  InfoMessage,
  InfoTitle,
  SignInContainer,
  Title,
  Well,
} from "./NotSupported.styles.js";

const NotSupported = ({ data }) => (
  <SignInContainer>
    <Title>The Button Game</Title>
    <Well>
      <InfoTitle>Your browser does not support Ethereum apps</InfoTitle>
      <InfoMessage>
        To continue, please click the linke below to install MetaMask, and then
        return to this site
      </InfoMessage>
      <InfoLink href="https://metamask.io">https://metamask.io</InfoLink>
    </Well>
  </SignInContainer>
);

export default NotSupported;
