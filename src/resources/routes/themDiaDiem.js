var express = require('express')
var router = express.Router()

const ThemDiaDiemController = require('../controller/ThemDiaDiemController')

// router.use('/:slug',)

router.get('/',ThemDiaDiemController.index)
router.post('/',ThemDiaDiemController.themDiaDiem)

module.exports = router