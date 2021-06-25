const mongoose = require('mongoose')
const {Schema} = mongoose

const costScheme = new Schema({
    text: String,
    totalMoney: Number,
    date: String
})

module.exports = Cost = mongoose.model('costs', costScheme) //compiling schema into a Model