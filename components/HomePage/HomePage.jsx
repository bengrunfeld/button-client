import Cookies from "js-cookie";

const HomePage = ({ data }) => {
  Cookies.set("userInfo", "Ben");

  return <h1>Home Page</h1>;
};

export default HomePage;
