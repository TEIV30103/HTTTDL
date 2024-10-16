// const express = require('express')
// const session = require('express-session');
// const db = require('../model/connect_DB')

// const app = express()

// app.use(express.json());
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

const dn = require('../model/dangNhap')

class dangNhapController{
    
    // [/GET] /dangnhap

        index(req,res){
            if (req.session.username == null)
                res.render('dangNhap')
            else 
                res.redirect('/');

        }

    // [/POST] /dangnhap
        
    dangNhap(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        dn(username,password,(error,results)=>{
            if (error) throw error;
            if (results.length > 0) {
                console.log(results[0].tenNguoiDung)
                req.session.username = results[0].tenNguoiDung;
                res.redirect('/');  
            }
        })
    }
    
}

module.exports = new dangNhapController