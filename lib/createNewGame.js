import fetch from "isomorphic-unfetch";

import getDomain from "./getDomain";

const createNewGame = async req => {
  const domain = getDomain(req);
  const res = await fetch(`${domain}/api/create-game`);
  return await res.json();
};

export default createNewGame;
