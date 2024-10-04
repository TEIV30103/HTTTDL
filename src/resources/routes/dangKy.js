var express = require('express')
var router = express.Router()

const DangKyController = require('../controller/DangKyController')

// router.use('/:slug',)

router.get('/',DangKyController.index)
router.post('/',DangKyController.dangKy)


module.exports = router