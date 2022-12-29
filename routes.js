const router = require('express').Router()
const debug = require('debug')

router.get('/', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

module.exports = router