require('dotenv').config()
const express = require('express')

const knex = require('./conexao')

const app = express()

app.use(express.json())



app.get('/', async (req, res) => {
    try{
        const categoria = await knex('categorias')

        return res.json(categoria)
    }catch(error){
        console.log(error)
        return res.status(400).json({erro: error.message})
    }
})

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT }`)
})