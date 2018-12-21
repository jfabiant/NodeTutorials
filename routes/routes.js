const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index', {})
})
router.get('/peliculas', (req, res)=>{
    res.render('peliculas', {})
})


module.exports = router;