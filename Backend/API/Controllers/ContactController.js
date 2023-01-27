
const Contact = require('../../Database/Contact')



//Creer un nouveau contact
const store = (req, res, next) => {
    let contact = Contact({
        nom : req.body.nom,
        code : req.body.code,
        tel : req.body.tel
    })
    contact.save()
    .then(response =>{
        res.json({
            message : 'Nouveau contact ajouté !'
        })
    })
    .catch(error =>{
        res.json({
            message : 'Une erreur est survenue !'
        })
    })
}


//Afficher la liste des contacts
const showAll=(req, res, next) => {
    Contact.find()
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

// Modifier un contact

const update = (req, res, next) => {
    let contactID = req.body.code

    let contactupdate = Contact({
        nom : req.body.nom,
        code : req.body.code,
        tel : req.body.tel
    })

    Contact.findByIdAndUpdate (contactID, {$set : contactupdate})
    .then(()=> {
        res.json({
            message : 'contact modifié avec succèss !'
        })
    })
    .catch(error => {
        res.json({
            message : 'une erreur est survenue !'
        })
    })
}

// Supprimer un contact
const destroy = (req, res, next) => {

    Contact.findByIdAndRemove(contactID)
    .then(() => {
        res.json({
            message : "Suppression du contact avec succèss !"
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
   