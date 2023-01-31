const express = require('express')
const app = express()
const cors = require('cors')
const users = require('./routes/users')

app.use(express.json())
app.use(cors())

app.use('/', users)

app.listen(8800)