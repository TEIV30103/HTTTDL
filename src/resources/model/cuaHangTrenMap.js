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

// function cuaHangTrenMap(req,res){
//     db.query('SELECT * FROM cuahang', function(error, results, fields) {
//         if (error) {
//             console.error('Error fetching data:', error);
//             res.status(500).send('Error fetching data');
//         } else {
//             var arr = results.map(result => result);
//             req.session.arrCH = arr;
//             // console.log(req.session.arrCH); 
//             res.render('home',{username:req.session.username , arrCH: req.session.arrCH});
//         }
//     });

// }

function cuaHangTrenMap(callback) {
    db.query('SELECT * FROM cuahang', callback);
}

module.exports = cuaHangTrenMap