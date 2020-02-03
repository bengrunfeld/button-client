import { GameScreen, SignInForm } from "../";

const HomePage = ({ data }) =>
  data.accountInfo ? <GameScreen data={data} /> : <SignInForm data={data} />;

export default HomePage;

// import Cookies from "js-cookie";
// Cookies.set("userInfo", "Ben");
