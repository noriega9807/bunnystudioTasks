const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const helmet = require("helmet")
const userAPI = require('./api/user')
const taskAPI = require('./api/task')

const app = express()

app.use(express.json())
app.use(helmet());
app.use(
    cors({
        origin: [
            'http://localhost',
            'http://localhost:3000',
            'http://localhost:3002'
        ],
        credentials: true
    })
)
app.use(userAPI)
app.use(taskAPI)

module.exports = app