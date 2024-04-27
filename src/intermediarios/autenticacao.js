const jwt = require("jsonwebtoken");
const pool = require("../conexao");
const senhaSecreta = require("../senhaSecreta");

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ msg: "nao autorizado" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = await jwt.verify(token, senhaSecreta);

    const { rows, rowCount } = await pool.query(
      "select * from usuarios where id = $1",
      [id]
    );
    if (rowCount < 1) {
      return res.status(401).json({ msg: "nao autorizado" });
    }
    req.usuario = rows[0];
    next();
  } catch (error) {
    return res.status(401).json({ msg: "nao autorizado" });
  }
};

module.exports = verificarUsuarioLogado;