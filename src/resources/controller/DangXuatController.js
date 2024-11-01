
class dangXuatController{
    
    // [/GET] /dangxuat

        index(req,res){
            req.session.username = null
            req.session.arrTK = null
            res.redirect('dangNhap')
        }

}

module.exports = new dangXuatController