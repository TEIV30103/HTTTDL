const dk = require('../model/dangKy')

class dangKyController{
    
    // [/GET] 

        index(req,res){
            if (req.session.username == null)
                res.render('dangKy')
            else 
                res.redirect('/');

        }

    // [/POST] /dangKy
        
    dangKy(req, res) {
        dk(req,res)
    }
    
}

module.exports = new dangKyController