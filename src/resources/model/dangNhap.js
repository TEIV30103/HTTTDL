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

// function dangNhap(req,res){
//     let username = req.body.username;
//         let password = req.body.password;
//         // Ensure the input fields exist and are not empty
//         if (username && password) {
//             // Execute SQL query that'll select the account from the database based on the specified username and password
//             db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
//                 // If there is an issue with the query, output the error
//                 if (error) throw error;
//                 // If the account exists
//                 if (results.length > 0) {
//                     // Authenticate the user
//                     console.log(results[0].tenNguoiDung)
//                     req.session.username = results[0].tenNguoiDung;


//                     // Redirect to home page
//                     res.redirect('/');  
//                 } else {
//                     res.send('Incorrect Username and/or Password!');
//                 }
//             });
//         } else {
//             res.send('Please enter Username and Password!');
//         }
// }

function dangNhap(username,password,callback){
    db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], callback)
}


module.exports = dangNhap