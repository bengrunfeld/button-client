const getProtocol = host => {
  if (process.env.NODE_ENV === "production") return `https://${host}`;

  return `http://${host}`;
};

export default getProtocol;
