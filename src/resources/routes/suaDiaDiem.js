var express = require('express')
var router = express.Router()
var multer = require('multer')
var path = require('path')

const SuaDiaDiemController = require('../controller/SuaDiaDiemController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../public/img")); // Thư mục lưu trữ tệp tin
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +'-'+ file.originalname); // Đặt tên tệp tin
    }
});

const upload = multer({ storage: storage });


// router.use('/:slug',)

router.get('/',SuaDiaDiemController.index)
router.post('/', upload.single('hinhAnh') ,SuaDiaDiemController.SuaDiaDiem)

module.exports = router