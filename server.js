


const express = require('express')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 3000
const path = require('path')
let data = require('./db/db.json')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/notes.html'))
})

app.get('/api/notes', (req, res) => res.json(data))

app.post('/api/notes', (req, res) => {
    let noteToSave = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()
        }
        let parsedArray = data
        parsedArray.push(noteToSave)
        console.log(noteToSave)
        fs.writeFile('./db/db.json', JSON.stringify(parsedArray), (err) => {
            if (err)
            return console.log(err)
        })
        res.json(parsedArray)
        })

app.listen(PORT, () => {
    console.log('Server running')
})
