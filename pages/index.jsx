import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";

import { getCurrentGame, createNewGame } from "../lib";

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

  const { req } = ctx;
  const gameInfo = await getCurrentGame(req);

  if (gameInfo?.game?.length === 0) await createNewGame(req);

  const data = Object.assign({}, gameInfo, userInfo);

  return { data };
};

export default Home;
