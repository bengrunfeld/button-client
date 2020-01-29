import fetch from "isomorphic-unfetch";

import getDomain from "./getDomain";

const getCurrentGame = async req => {
  const domain = getDomain(req);
  const res = await fetch(`${domain}/api/current-game`);
  return await res.json();
};

export default getCurrentGame;
