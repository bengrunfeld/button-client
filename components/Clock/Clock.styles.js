import styled from "styled-components";

export const ClockContainer = styled.div`
  padding: 1rem;
  background: #000000;
  width: 4rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.p`
  font-family: ${({ theme }) => theme.font.prompt};
  font-size: 2rem;
  color: #ffffff;
`;
