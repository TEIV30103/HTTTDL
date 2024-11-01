const path = require('path')
const express = require('express')
const session = require('express-session')
// const cookieSession = require('cookie-session')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const route = require('./resources/routes')
// const db = require('./resources/model/connect_DB')
const app = express()

const port = 3000

// app.use(cookieSession({
//     name: 'username',
//     keys: ['username'], // Thay thế bằng khóa bí mật của bạn
//     maxAge: 24 * 60 * 60 * 1000, // Thời gian sống của cookie (24 giờ)
// }));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



app.use(session(session.Cookie));
app.use(function (req, res, next) {
	res.locals.session = req.session;
	next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'resources/public')))

app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname,'resources/views'))

route(app) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})