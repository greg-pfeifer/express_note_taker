


const express = require('express')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 3000
const path = require('path')
let data = require('./db/db.json')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


