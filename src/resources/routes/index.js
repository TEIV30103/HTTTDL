const newRouter = require('./new')
const dangNhapRouter = require('./dangNhap')
const dangKyRouter = require('./dangKy')
const dangXuatRouter = require('./dangXuat')
const themDiaDiemRouter = require('./themDiaDiem')
const suaDiaDiemRouter = require('./suaDiaDiem')
const thongKeRouter = require('./thongKe')
const homeController = require('../controller/HomeController')
const sendUsername = require('../middleware/middleware')
function route(app){
    
    app.get('/', (req, res) => {
        if(req.session.username == null)
            res.redirect('/dangNhap')
        else{
            homeController.index(req, res)
        }

    })

    app.post('/', (req, res) => {
        homeController.xoaDiaDiem(req, res);
    })
    
    // app.use('/',dangNhapRouter)

    app.use('/new',newRouter)

    app.use('/dangnhap',dangNhapRouter)

    app.use('/dangKy',dangKyRouter)

    app.use('/dangXuat',dangXuatRouter)

    app.use('/themDiaDiem',themDiaDiemRouter)

    app.use('/suaDiaDiem',suaDiaDiemRouter)

    app.use('/thongKe',thongKeRouter)
}

module.exports = route
