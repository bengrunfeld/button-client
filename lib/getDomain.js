const getProtocol = () =>
  process.env.NODE_ENV === "production" ? `https` : `http`;

const getDomain = req => {
  const host = req?.headers?.host || "buttongame.com";
  const protocol = getProtocol(host);
  return `${protocol}://${host}`;
};

export default getDomain;
