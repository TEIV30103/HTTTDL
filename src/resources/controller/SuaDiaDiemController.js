const sdd = require('../model/suaDiaDiem')
class ThemDiaDiemController{
    
    // [/GET] /dangxuat

        index(req,res){
            if(req.session.username == null)
                res.redirect('/dangNhap')
            else 
                res.render('themDiaDiem',{username:req.session.username,arrCH:req.session.arrCH})
        }

        SuaDiaDiem(req,res){
            sdd(req,res);
            res.redirect('/');
        }

}

module.exports = new ThemDiaDiemController