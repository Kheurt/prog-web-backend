const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        uppercase: true,
    },
    telexp: {
        type: String,
    },
    teldest: {
        type: String,
    },
    contenu: {
        type: String,
        required: true,
    },  
})

const Message = mongoose.model('message', messageSchema)
module.exports = Message
