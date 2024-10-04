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

function xoaDiaDiem(req,res){
    let maCH = req.body.maCH;

    db.query('DELETE FROM cuahang WHERE maCH = ?', [maCH], function(error, results, fields) {
        if (error) throw error;
        res.redirect('/');
    });
}
module.exports = xoaDiaDiem