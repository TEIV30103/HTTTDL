
class dangXuatController{
    
    // [/GET] /dangxuat

        index(req,res){
            req.session.username = null
            res.redirect('dangNhap')
        }

}

module.exports = new dangXuatController