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

function dangKy(req,res){
    let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        db.query('INSERT INTO user (username ,password, tenNguoiDung) VALUES (?, ?, ?)', [username, password, name], function(error, results, fields) {
            if (error) throw error;
            res.redirect('/');
        });
}

module.exports = dangKy