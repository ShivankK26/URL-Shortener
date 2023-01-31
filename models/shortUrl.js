const mongoose = require('mongoose')
const shortId  = require('shortid')


const shortUrlSchema = new mongoose.Schema({

    //Here 'full' is the name of the column.
    full: {
        type: String,
        required: true
        },


    //Here 'short' is the name of the column.
    short: {
        type: String,
        required: true,
        //shortId.generate, this command will generate a shortID automatically.
        default: shortId.generate
        },


    //Here 'clicks' is the name of the column.
    clicks: {
        type: Number,
        required: true,
        //deafult: 0, will start the number of clicks from 0.
        default: 0
    }


})


module.exports = mongoose.model('ShortUrl',shortUrlSchema)