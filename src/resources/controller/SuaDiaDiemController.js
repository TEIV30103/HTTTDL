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
            let maCH = req.body.maCH;
            let tenDiaDiem = req.body.tenDiaDiem;
            let kinhDo = req.body.kinhDo;
            let viDo = req.body.viDo;
            let hinhAnh = req.file ? req.file.filename : null;
            let diaChi = req.body.diaChi;
            let hinhAnhSua = req.body.hinhAnhSua;

            const fs = require('fs');
            const path = require('path');

            if (hinhAnh.includes(hinhAnhSua)){
                const oldImagePath = path.join(__dirname, '../public/img', hinhAnh);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Lỗi khi xóa hình ảnh cũ:', err);
                });

                sdd(maCH,tenDiaDiem,kinhDo,viDo,hinhAnhSua,diaChi,(error)=>{
                    if (error) throw error;
                    res.redirect('/');
                });
            }
            else{
                const oldImagePath = path.join(__dirname, '../public/img', hinhAnhSua);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Lỗi khi xóa hình ảnh cũ:', err);
                });

                sdd(maCH,tenDiaDiem,kinhDo,viDo,hinhAnh,diaChi,(error)=>{
                    if (error) throw error;
                    res.redirect('/');
                });
                
            }
        }

}

module.exports = new ThemDiaDiemController