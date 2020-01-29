import fetch from "isomorphic-unfetch";

import getProtocol from "./getProtocol";

const getCurrentGame = async req => {
  // Establish connection to database
  const host = req?.headers?.host || "buttongame.com";
  const protocol = getProtocol(host);

  const res = await fetch(`${protocol}/api/current-game`);
  return await res.json();
};

export default getCurrentGame;
