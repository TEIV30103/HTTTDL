var express = require('express')
var router = express.Router()

const DangXuatController = require('../controller/DangXuatController')

// router.use('/:slug',)

router.get('/',DangXuatController.index)


module.exports = router