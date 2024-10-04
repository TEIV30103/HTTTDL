const tdd = require('../model/themDiaDiem')
class ThemDiaDiemController{
    
    // [/GET] /dangxuat

        index(req,res){
            if(req.session.username == null)
                res.redirect('/dangNhap')
            else 
                res.render('themDiaDiem',{username:req.session.username,arrCH:req.session.arrCH})
        }

        themDiaDiem(req,res){
            tdd(req,res);
        }

}

module.exports = new ThemDiaDiemController