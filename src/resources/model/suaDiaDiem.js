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

function suaDiaDiem(req,res){
    let maCH = req.body.maCH;
    let tenDiaDiem = req.body.tenDiaDiem;
    let kinhDo = req.body.kinhDo;
    let viDo = req.body.viDo;
    let hinhAnh = req.body.hinhAnh;
    let diaChi = req.body.diaChi;

    db.query('UPDATE cuahang SET tenCh= ?,diaChi=?,img=?,kinhDo=?,viDo= ?WHERE maCH = ?', [tenDiaDiem,  diaChi , hinhAnh, kinhDo, viDo, maCH], function(error, results, fields) {
        if (error) throw error;
    });
}
module.exports = suaDiaDiem