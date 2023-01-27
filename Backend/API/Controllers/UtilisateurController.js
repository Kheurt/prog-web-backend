
const Utilisateur = require('../../Database/Utilisateur')


//Creer un nouveau utilisateur
const store = (req, res, next) => {
    let utilisateur = Utilisateur({
        nom : req.body.nom,
        email : req.body.email,
        tel : req.body.tel,
        motdepasse : req.body.motdepasse
    })
    utilisateur.save()
    .then(response =>{
        res.json({
            message : 'NouveL UTILISATEUR ajouté !'
        })
    })
    .catch(error =>{
        res.json({
            message : 'Une erreur est survenue !'
        })
    })
}


//Afficher la liste d'utilisateur
const showAll=(req, res, next) => {
    Utilisateur.find()
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
    let nomuser = req.body.nom

    let utilisateurupdate = Utilisateur({
        nom : req.body.nom,
        email : req.body.email,
        tel : req.body.tel,
        motdepasse : req.body.motdepasse
    })

    Utilisateur.findByIdAndUpdate (nomuser, {$set : utilisateurupdate})
    .then(()=> {
        res.json({
            message : 'utilisateur modifié avec succèss !'
        })
    })
    .catch(error => {
        res.json({
            message : 'une erreur est survenue !'
        })
    })
}

// Supprimer un user
const destroy = (req, res, next) => {

    Utilisateur.findByIdAndRemove(nomuser)
    .then(() => {
        res.json({
            message : "Suppression de l'utilisateur avec succèss !"
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
   