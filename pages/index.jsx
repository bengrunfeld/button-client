import Head from "next/head";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";

import { HomePage } from "../components";

const Home = ({ data }) => (
  <div>
    <Head>
      <title>The Button Game</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>

    <HomePage data={data} />
  </div>
);

Home.getInitialProps = async ctx => {
  // Check cookie for User wallet address
  const userInfo = cookies(ctx).userInfo || "";

  const data = { userInfo, gameInfo: "", gameExists: false };

  return { data };
};

export default Home;
