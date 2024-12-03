const express=require('express')

const routes=express.Router()

const { categoryPage } = require('../controller/categorycontroller')

routes.get('/categoryPage',categoryPage)

 module.exports=routes