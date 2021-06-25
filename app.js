const express = require('express')
const cors = require('cors') // промежуточное по ???
const bodyParser = require('body-parser')  // анализ входящих запросов
const mongoose = require('mongoose')
const app = express();  // создание приложения

const uri = "mongodb+srv://admin:user@cluster0.jelur.mongodb.net/cost-accounting?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const apiRoutes = require('./routes/routes')

app.use(cors())
app.use(bodyParser.json())
app.use('/', apiRoutes) // запуска роута

app.listen(5000, () => {
    try {
        console.log('started')
    } catch (e) {
        console.log(e)
    }
})