const express = require('express')
const router = express.Router()

const UtilisateurController = require('../Controllers/UtilisateurController')

router.post('/store', UtilisateurController.store)
router.get ('/', UtilisateurController.showAll)
router.post ('/update', UtilisateurController.update)
router.post('/delete',UtilisateurController.destroy)

module.exports = router