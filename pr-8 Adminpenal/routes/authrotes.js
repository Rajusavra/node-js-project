const express=require('express')
const { registerpage, registerusers, loginpage, dashpage, loginusers, logout, emailverifition, email, otppage, otppost, newpass, newpasspage, viewpropage, viewprofile, changepass, changepassword  } = require('../controller/authcontroller')

const routes=express.Router()

const passport=require('passport')
routes.get('/',loginpage)
routes.get('/res',registerpage)
routes.post('/insert', registerusers)
routes.post('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),loginusers)
routes.get('/dash',passport.checkUser,dashpage)
routes.get('/logout',logout)
routes.get('/emailverifition', emailverifition)
routes.post('/email', email)
routes.get('/otp',otppage)
routes.post('/otppost', otppost)
routes.get('/newpasspege',newpasspage)
routes.post('/newpass', newpass)


// viewpropage

routes.get('/viewpropage',viewpropage)
routes.post('/viewprofile',viewprofile)
// new password
routes.get('/changepass',changepass)
routes.post('/changepassword',changepassword)

module.exports=routes