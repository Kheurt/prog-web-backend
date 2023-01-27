const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minLength: 3,
        uppercase: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        lowercase: true,
        trim: true
    },
    tel: {
        type: String,
    },
    motdepasse: {
        type: String,
        required: true,
    },
    
    
})

const Utilisateur = mongoose.model('utilisateur', userSchema)
module.exports = Utilisateur
