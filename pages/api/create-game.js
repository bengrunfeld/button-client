import sqlQuery from "../../lib/db";
import escape from "sql-template-strings";
import { genRandomNumber } from "../../lib";

const fetchCurrentGame = async (req, res) => {
  const game_id = genRandomNumber();

  const query = escape`INSERT INTO current_game (game_id) VALUES (${game_id})`;

  const currentGame = await sqlQuery(query);

  res.status(200).json({ game: currentGame });
};

export default fetchCurrentGame;
