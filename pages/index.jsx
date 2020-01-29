import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Home = ({ data }) => (
  <div>
    <Head>
      <title>The Button Game</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>

    <h1>Last Pressed: {data.currentGame[0].last_pressed}</h1>
  </div>
);

const getProtocol = host => {
  if (process.env.NODE_ENV === "production") return `https://${host}`;

  return `http://${host}`;
};

Home.getInitialProps = async ({ req, query }) => {
  const host = ((req || {}).headers || {}).host;
  const safetyHost = host || "https://buttongame.com";
  const protocol = getProtocol(safetyHost);

  const res = await fetch(`${protocol}/api/current-game`);
  const data = await res.json();

  return { data };
};

export default Home;
