const Message = require('../../Database/Message')



//Creer un nouveau message
const store = (req, res, next) => {
    let message= Message({
        code  : req.body.code,
        telexp : req.body.exp,
        teldest : req.body.teldest,
        contenu : req.body.contenu
    })
    message.save()
    .then(response =>{
        res.json({
            message : 'NouveL MESSAGE ajouté !'
        })
    })
    .catch(error =>{
        res.json({
            message : 'Une erreur est survenue !'
        })
    })
}


//Afficher la liste de messages
const showAll=(req, res, next) => {
    Message.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'Une erreur est survenue'
        })
    })
}

// Modifier un utilisateur

const update = (req, res, next) => {
    let messageID = req.body.code

    let messageupdate = Message({
        code  : req.body.code,
        telexp : req.body.exp,
        teldest : req.body.teldest,
        contenu : req.body.contenu
    })

    Message.findByIdAndUpdate (messageID, {$set : messageupdate})
    .then(()=> {
        res.json({
            message : ' message modifie avec succèss !'
        })
    })
    .catch(error => {
        res.json({
            message : 'une erreur est survenue !'
        })
    })
}

// Supprimer un message
const destroy = (req, res, next) => {

    Message.findByIdAndRemove(messageID)
    .then(() => {
        res.json({
            message : "Suppression d'un message avec succèss !"
        })
    })
    .catch(error => {
        res.json({
            message : 'Une erreur est survenue !'
        })
    })
}


// exportation des fonctions
module.exports = {
    store, showAll, update, destroy
}
   