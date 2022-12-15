const express = require('express')
const AdminController = require('./controllers/admin/AdminController')
const BlogController = require('./controllers/admin/BlogController')
const { blogdisplay } = require('./controllers/admin/BlogController')
const CategoryController = require('./controllers/admin/CategoryController')
const FrontController = require('./controllers/FrontController')
const connectDB = require('./db/connect_db')
const app = express()
const port = 2147

// mongo db connection
connectDB()


//setup EJS
app.set('view engine','ejs')

//static files path
app.use(express.static('public'))

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

//admin category controller
app.get('/admin/categorydisplay',CategoryController.categorydisplay)

// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  

