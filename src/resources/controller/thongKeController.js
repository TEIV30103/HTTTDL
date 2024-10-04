const hh = require('../model/hangHoa')
const tk = require('../model/thongKe')

class thongKeController{
    
    // [/GET] /dangnhap

        index(req,res){
            if (req.session.username == null)
                res.redirect('/dangNhap')
            else{
                hh(req,res)
            }

        }

    // [/POST] /dangnhap
        
    thongKe(req, res) {
        tk(req,res)
    }
    
}

module.exports = new thongKeController