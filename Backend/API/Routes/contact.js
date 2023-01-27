const express = require('express')
const router = express.Router()

const ContactController = require('../Controllers/ContactController')

router.post('/store', ContactControllerr.store)
router.get ('/', ContactController.showAll)
router.post ('/update', ContactController.update)
router.post('/delete',ContactController.destroy)

module.exports = router