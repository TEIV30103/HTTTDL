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
        dn(req,res)
    }
    
}

module.exports = new dangNhapController