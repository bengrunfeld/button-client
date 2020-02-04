import { Button } from "./TheButton.styles";

const TheButton = ({ accounts }) => {
  const hi = () => console.log("hi");
  return <Button onClick={hi}>PRESS</Button>;
};

export default TheButton;
