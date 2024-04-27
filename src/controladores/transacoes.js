// const pool = require("../conexao");

// const listarTransacoesLogado = async (req, res) => {
//   try {
//     const buscarTransacao = await pool.query(
//       "select * from transacoes where usuario_id = $1",
//       [req.usuario.id]
//     );
//     return res.status(200).json(buscarTransacao.rows);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// const detalharTransacao = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { rows } = await pool.query(
//       "select * from transacoes where usuario_id = $1",
//       [req.usuario.id]
//     );
//     const transacaoEspecifica = rows.filter((item) => {
//       return item.id === Number(id);
//     });
//     if (!transacaoEspecifica) {
//       return res.status(400).json({ mensagem: "Transação não encontrada." });
//     }
//     return res.status(200).json(transacaoEspecifica);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// const cadastrarTransacao = async (req, res) => {
//   try {
//     const { tipo, descricao, data, valor, categoria_id } = req.body;
//     if (!tipo || !descricao || !data || !valor || !categoria_id) {
//       return res
//         .status(400)
//         .json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
//     }
  
//     if (tipo !== "entrada" && tipo !== "saida") {
//       return res.json({ msg: "tipo invalido" });
//     }
//     const inserirTransacao = await pool.query(
//       `
//       insert into transacoes
//       (descricao,valor,data,categoria_id,usuario_id,tipo)
//       values
//       ($1,$2,$3,$4,$5,$6) returning *; 
//     `,
//       [descricao, valor, data, categoria_id, req.usuario.id, tipo]
//     );
//     return res.status(201).json(inserirTransacao.rows[0]);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };
// const atualizarTransacao = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { descricao, valor, data, categoria_id, tipo } = req.body;
//     if (!descricao || !valor || !data || !categoria_id || !tipo) {
//       return res.status(400).json({
//         mensagem: "Todos os campos obrigatórios devem ser informados.",
//       });
//     }
//     const alterandoTransacao = await pool.query(
//       `update transacoes 
//       set
//       descricao = $1,
//       valor = $2,
//       data = $3,
//       categoria_id = $4,
//       tipo = $5
//       where id = $6; `,
//       [descricao, valor, data, categoria_id, tipo, id]
//     );
//     return res.status(201).json();
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// const deletarTransacao = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletandoTransacao = await pool.query(
//       "delete from transacoes where id = $1",
//       [id]
//     );
//     return res.status(201).json();
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// const verificarExtrato = async (req, res) => {
//   try {
//     const { rows } = await pool.query(
//       "select * from transacoes where usuario_id = $1",
//       [req.usuario.id]
//     );
//     const filtrarEntradas = rows.filter((item) => {
//       return item.tipo === "entrada";
//     });
//     const filtrarSaidas = rows.filter((item) => {
//       return item.tipo === "saida";
//     });
//     const totalEntradas = filtrarEntradas.reduce((total, item) => {
//       return total + item.valor;
//     }, 0);
//     const totalSaidas = filtrarSaidas.reduce((total, item) => {
//       return total - item.valor;
//     }, 0);

//     const extrato = {
//       Entradas: totalEntradas,
//       Saídas: totalSaidas,
//     };
//     return res.status(200).json(extrato);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// module.exports = {
//   listarTransacoesLogado,
//   detalharTransacao,
//   cadastrarTransacao,
//   atualizarTransacao,
//   deletarTransacao,
//   verificarExtrato,
// };
