import express from 'express'

const app = express()

const PORT = 10000 

app.listen(10000, () => {
    console.log(`functionando en el puerto ${PORT}`)
})