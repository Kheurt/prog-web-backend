// Importation des biblioteques
const express = require('express')
const mongoose = reqquire('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


// Configuration des variables d'environement1
dotenv.config({
    path : "./config/.env"
})

// Importation des routes
const UtilisateurRoute = require('./Routes/utilisateur')
const MessageRoute = require('./Routes/message')
const ContactRoute = require('./Routes/contact')


// Connexion a la BD
const DBURL = process.env.DBURL || 'mongodb://localhost:27017/srvedcaDB'

mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.once('open', ()=>{
    console.log('Database Connection Established!')
})

db.on('error', (err)=>{
    console.log(err)
})


// Creation du serveur express
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}...`)
})


// Utilisation des routes dans le serveur
app.use('/api/contact', ContactRoute)
app.use('/api/message', MessageRoute)
app.use('/api/utiisateur', UtilisateurRoute)
