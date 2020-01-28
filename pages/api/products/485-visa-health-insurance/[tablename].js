import sqlQuery from "../../../../lib/db";
import escape from "sql-template-strings";

const fetchProducts = async (req, res) => {
  const query = escape`SELECT * FROM `;
  query.append(req.query.tablename);
  query.append(` ORDER BY id`);

  const products = await sqlQuery(query);

  res.status(200).json({ products });
};

export default fetchProducts;
