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
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        dk(username,password,name,(error)=>{
            if (error) throw error;
            res.redirect('/');
        })
    }
    
}

module.exports = new dangKyController