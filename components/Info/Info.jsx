import {
  InfoLink,
  InfoMessage,
  InfoTitle,
  InfoContainer,
  Title,
  Well,
} from "./Info.styles.js";

const Info = ({ title, message, link }) => (
  <InfoContainer>
    <Title>The Button Game</Title>
    <Well>
      <InfoTitle>{title}</InfoTitle>
      <InfoMessage>{message}</InfoMessage>
      {link ? <InfoLink href={link}>{link}</InfoLink> : ""}
    </Well>
  </InfoContainer>
);

export default Info;
