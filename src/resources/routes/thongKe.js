var express = require('express')
var router = express.Router()

const thongKeController = require('../controller/thongKeController.js')

// router.use('/:slug',)

router.get('/',thongKeController.index)
router.post('/',thongKeController.thongKe)


module.exports = router