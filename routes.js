const router = require('express').Router()
const debug = require('debug')

router.get('/', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.get('/', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/login', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/signup', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/password-reset', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/new-contact', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/import', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.get('/contacts', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.post('/send', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

router.get('/messages', (req, res)=>{
    debug.log("Access to / ")
    res.end('<h1 align="center">WELLCOME TO THE PROJECT BACKEND</h1>')
})

module.exports = router