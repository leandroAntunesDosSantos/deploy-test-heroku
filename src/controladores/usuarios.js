const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaSecreta = require("../senhaSecreta");

//const pool = require("../conexao");
const knex = require("../conexao");



const deploy = async (req, res) => {
  try{
    const categoria = await knex('categorias').select('*')
    return res.status(200).json(categoria)
}catch(error){
    console.log(error)
    return res.status(400).json({erro: error.message})
}
}
  


// const cadastrarUsuario = async (req, res) => {
//   const { nome, email, senha } = req.body;

//   if (!nome || !email || !senha) {
//     return res.status(400).json({
//       mensagem: "Preencha os campos obrigatórios: nome, email e senha",
//     });
//   }

//   try {
//     const usuarioEncontrado = await pool.query(
//       "select * from usuarios where email = $1",
//       [email]
//     );

//     if (usuarioEncontrado.rowCount > 0) {
//       return res.status(400).json({
//         mensagem: "E-mail informado está vinculado a outro usuário.",
//       });
//     }

//     const senhaCriptografada = await bcript.hash(senha, 10);

//     const novoUsuario = await pool.query(
//       "insert into usuarios (nome,email,senha) values ($1,$2,$3) returning * ",
//       [nome, email, senhaCriptografada]
//     );

//     return res.status(201).json(novoUsuario.rows[0]);
//   } catch (erro) {
//     return res.status(500).json(erro.message);
//   }
// };

// const login = async (req, res) => {
//   const { email, senha } = req.body;

//   if (!email || !senha) {
//     return res.status(400).json({
//       mensagem: "Preencha os campos obrigatórios: email e senha",
//     });
//   }

//   try {
//     const usuario = await pool.query(
//       "select * from usuarios where email = $1",
//       [email]
//     );

//     if (usuario.rowCount < 1) {
//       return res.status(404).json({ msg: "usuario nao encontrado" });
//     }

//     const senhaValida = await bcript.compare(senha, usuario.rows[0].senha);

//     if (!senhaValida) {
//       return res.status(400).json({ msg: "email ou senha invalido" });
//     }

//     const token = jwt.sign({ id: usuario.rows[0].id }, senhaSecreta, {
//       expiresIn: "8h",
//     });

//     const { senha: _, ...usuarioLogado } = usuario.rows[0];
//     return res.status(200).json({ usuario: usuarioLogado, token });
//   } catch (erro) {
//     return res.status(500).json({ mensagem: "ocorreu um erro"});
//   }
// };

// const detalharPerfilUsuario = async (req, res) => {
//   const { id, nome } = req.usuario;

//   try {
//     const perfil = {
//       id,
//       nome,
//     };
//     return res.status(200).json(perfil);
//   } catch (error) {
//     return res.status(500).json({ mensagem: "ocorreu um erro" });
//   }
// };

// const atualizarPerfilUsuario = async (req, res) => {
//   const { nome, email, senha } = req.body;

//   if (!nome || !email || !senha) {
//     return res
//       .status(400)
//       .json({ mensagem: "Preencha todos os campos obrigatórios" });
//   }
//   try {
//     const { rowCount } = await pool.query(
//       "select * from usuarios where email = $1",
//       [email]
//     );
//     if (rowCount > 0) {
//       return res.status(404).json({ msg: "Este email ja esta cadastrado." });
//     }

//     const senhaCriptografadaUpdate = await bcript.hash(senha, 10);

//     const alterandoUsuario = await pool.query(
//       `update usuarios 
//       set
//       nome = $1,
//       email = $2,
//       senha = $3
//       where id = $4; `,
//       [nome, email, senhaCriptografadaUpdate, req.usuario.id]
//     );
//     return res.status(201).json();
//   } catch (erro) {
//     return res.status(500).json(erro);
//   }
// };

module.exports = {
  deploy,
  // cadastrarUsuario,
  // login,
  // detalharPerfilUsuario,
  // atualizarPerfilUsuario,
};
