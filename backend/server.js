const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')



const app = express()
dotenv.config() // To use .env file
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    console.log("'/' api is called")
    res.send({name:"anup", status:"OK"})
})
app.get('/api/notes', (req, res) => {
    console.log("'/api/notes' api called")
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id == req.params.id)
    console.log(`'/api/notes/${req.params.id}' api called`)
    res.send(note)
})
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})