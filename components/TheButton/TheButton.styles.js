import styled from "styled-components";

export const ButtonContainer = styled.div``;

export const Button = styled.div`
  height: 5rem;
  width: 3rem;
  cursor: pointer;
  user-select: none;
  font-family: ${({ theme }) => theme.font.prompt};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #538fbe;
  padding: 20px 70px;
  font-size: 24px;
  border: 1px solid #2d6898;
  background-image: linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );

  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(73, 132, 180)),
    color-stop(1, rgb(97, 155, 203))
  );
  border-radius: 50%;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    inset 0px 0px 3px rgba(255, 255, 255, 0.5);

  &:active {
    background-image: linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );

    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(88, 154, 204)),
      color-stop(1, rgb(90, 150, 199))
    );

    box-shadow: 0px 2px 0px #2b638f, 0px 1px 6px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3),
      inset 0px 0px 3px rgba(255, 255, 255, 0.5);

    transform: translate(0, 5px);
  }
`;
