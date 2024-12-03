const express = require('express')

const port = 8000

const app = express()

app.set('view engine', 'ejs')

const path = require('path')

const cookieParser = require('cookie-parser');

app.use(cookieParser())



constdb = require('./config/db')
const passport = require('passport')

const passportlocal = require('./config/paaportlocal')

const session = require('express-session')

app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))


app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setUser);
app.use(express.urlencoded())
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/indexroutes'))
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is runing', port);
})