import sqlQuery from "../../lib/db";
import escape from "sql-template-strings";

const fetchCurrentGame = async (req, res) => {
  const query = escape`SELECT * FROM current_game ORDER BY id`;

  const currentGame = await sqlQuery(query);

  res.status(200).json({ game: currentGame });
};

export default fetchCurrentGame;
