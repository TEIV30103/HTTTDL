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
            let maCH = req.body.maCH;
            let tenDiaDiem = req.body.tenDiaDiem;
            let kinhDo = req.body.kinhDo;
            let viDo = req.body.viDo;
            let hinhAnh = req.file ? req.file.filename : null;
            let diaChi = req.body.diaChi;
            tdd(maCH,tenDiaDiem,kinhDo,viDo,hinhAnh,diaChi,(error)=>{
                if (error) throw error;
                res.redirect('/');
            });
        }

}

module.exports = new ThemDiaDiemController