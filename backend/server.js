const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

const app = express()
dotenv.config() // To use .env file
connectDB()
app.use(express.json())

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


//User Routes
app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})