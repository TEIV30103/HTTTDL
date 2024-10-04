const express = require('express')
const session = require('express-session');
const db = require('./connect_DB')

const app = express()

app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

function hangHoa(req,res){
    db.query('SELECT * FROM hanghoa', function(error, results, fields) {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        } else {
            var arr = results.map(result => result);
            req.session.arrHH = arr;
            // console.log(req.session.arrCH); 
            res.render('thongKe',{username:req.session.username , arrCH: req.session.arrCH , arrHH: req.session.arrHH});
        }
    });

}

module.exports = hangHoa