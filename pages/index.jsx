import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";

import { getCurrentGame } from "../lib";

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

const getProtocol = host => {
  if (process.env.NODE_ENV === "production") return `https://${host}`;

  return `http://${host}`;
};

Home.getInitialProps = async ctx => {
  const { req } = ctx;

  const gameInfo = await getCurrentGame(req);

  // Check cookie for User wallet address
  const userInfo = cookies(ctx).userInfo || "";
  const data = Object.assign({}, gameInfo, userInfo);

  return { data };
};

export default Home;
