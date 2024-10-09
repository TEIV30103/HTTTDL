var express = require('express')
var router = express.Router()

const SuaDiaDiemController = require('../controller/SuaDiaDiemController')

// router.use('/:slug',)

router.get('/',SuaDiaDiemController.index)
router.post('/',SuaDiaDiemController.SuaDiaDiem)

module.exports = router