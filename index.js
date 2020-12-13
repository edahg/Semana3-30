const express = require('express')
//const morgan = require('morgan')
const bodyParser = require('body-parser')
const apiRouter = require('./routes')


const app = express();
app.use(bodyParser.json())

const controller = require('./controllers/controller.js')

app.get('/api', apiRouter)

app.set('PORT', 3000)

const port = 3000
app.listen(port, () => {
    console.log('Running on http://localhost:${port}')
})