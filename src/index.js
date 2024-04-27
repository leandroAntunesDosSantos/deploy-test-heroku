require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())



app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT }`)
})