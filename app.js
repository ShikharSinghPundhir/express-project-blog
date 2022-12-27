const express = require('express')
const AdminController = require('./controllers/admin/AdminController')
const BlogController = require('./controllers/admin/BlogController')
const { blogdisplay } = require('./controllers/admin/BlogController')
const CategoryController = require('./controllers/admin/CategoryController')
const FrontController = require('./controllers/FrontController')
const connectDB = require('./db/connect_db')
const app = express()
const port = 2147
const bodyParser=require('body-parser')    
const CategoryModel = require('./models/category')

// file uploader
const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles: true}));

// mongo db connection
connectDB()


//setup EJS
app.set('view engine','ejs')

//static files path
app.use(express.static('public'))

// body parser
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

// route
//front controller
app.get('/',FrontController.home)
app.get('/about',FrontController.about)
app.get('/contact',FrontController.contact)
app.get('/blog',FrontController.blog)
app.get('/login',FrontController.login)


// admin controller 
app.get('/admin/dashboard',AdminController.Dashboard)

//admin blog controller
app.get('/admin/blogdisplay',BlogController.blogdisplay)
app.post('/bloginsert',BlogController.bloginsert)
app.get('/admin/blogview/:id',BlogController.blogview)
app.get('/admin/blogedit/:id',BlogController.blogedit)
app.post('/blogupdate/:id',BlogController.blogupdate)
app.get('/admin/blogdelete/:id',BlogController.blogdelete)

//admin category controller
app.get('/admin/categorydisplay',CategoryController.categorydisplay)
app.post('/categoryinsert',CategoryController.categoryinsert)
app.get('/admin/categoryview/:id',CategoryController.categoryview)
app.get('/admin/categoryedit/:id',CategoryController.categoryedit)
app.post('/categoryupdate/:id',CategoryController.categoryupdate)
app.get('/admin/categorydelete/:id',CategoryController.categorydelete)

// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  

