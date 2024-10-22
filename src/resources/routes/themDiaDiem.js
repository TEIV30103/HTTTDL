var express = require('express')
var router = express.Router()
var multer = require('multer')
var path = require('path')

const ThemDiaDiemController = require('../controller/ThemDiaDiemController')

// router.use('/:slug',)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../public/img")); // Thư mục lưu trữ tệp tin
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +'-'+ file.originalname); // Đặt tên tệp tin
    }
});

const upload = multer({ storage: storage });

router.get('/',ThemDiaDiemController.index)
router.post('/', upload.single('hinhAnh') ,ThemDiaDiemController.themDiaDiem)

module.exports = router