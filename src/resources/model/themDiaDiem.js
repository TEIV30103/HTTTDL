const express = require('express')
const session = require('express-session');
const db = require('../model/connect_DB')

const app = express()

app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

function themDiaDiem(req,res){
    let maCH = req.body.maCH;
    let tenDiaDiem = req.body.tenDiaDiem;
    let kinhDo = req.body.kinhDo;
    let viDo = req.body.viDo;
    let hinhAnh = req.body.hinhAnh;
    let diaChi = req.body.diaChi;

    db.query('INSERT INTO cuahang (maCH ,tenCH, kinhDo, viDo, img, diaChi) VALUES (?, ?, ?, ?, ?, ?)', [maCH,tenDiaDiem, kinhDo, viDo, hinhAnh, diaChi], function(error, results, fields) {
        if (error) throw error;
        res.redirect('/');
    });
}
module.exports = themDiaDiem