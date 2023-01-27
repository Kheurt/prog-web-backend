const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        uppercase: true,
    },
    nom: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
    },
    
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact
