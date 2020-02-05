import { ClockContainer, Time } from "./Clock.styles";

const Clock = ({ timeLeft }) => (
  <ClockContainer>
    <Time>{timeLeft}</Time>
  </ClockContainer>
);

export default Clock;
