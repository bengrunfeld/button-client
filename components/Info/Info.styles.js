import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: rgba(159, 70, 166, 0.15);
  padding: 0 4rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.prompt};
  font-size: 4rem;
  text-align: center;
  padding-bottom: 5rem;
  text-transform: uppercase;
`;

export const Well = styled.div`
  padding: 3rem;
  border: 2px solid #787878;
  box-sizing: border-box;
  max-width: 57rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ebe8eb;
`;

export const InfoTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.prompt};
  font-size: 2rem;
  padding: 2rem 0;
  text-align: center;
  color: #3e3e3e;
`;

export const InfoMessage = styled.p`
  font-family: ${({ theme }) => theme.font.prompt};
  font-size: 1.8rem;
  padding: 1.4rem 0;
  text-align: center;
  color: #3e3e3e;
`;

export const InfoLink = styled.a`
  font-family: ${({ theme }) => theme.font.prompt};
  font-size: 1.8rem;
  padding: 1.4rem 0;
  text-align: center;
  text-decoration: none;
  color: #3e3e3e;

  &:visited {
    color: black;
  }

  &:hover {
    color: darkgreen;
  }
`;
