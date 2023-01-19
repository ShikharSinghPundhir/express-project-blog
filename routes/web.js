const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/admin/AdminController')

const BlogController = require('../controllers/admin/BlogController')
const { blogdisplay } = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const FrontController = require('../controllers/FrontController')
const CategoryModel = require('../models/category')
const ContactController = require('../controllers/admin/ContactController')
const AboutController = require('../controllers/admin/AboutController')
const { about } = require('../controllers/FrontController')
const admin_auth = require ('../middleware/auth')

// route
//front controller
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/contact',FrontController.contact)
router.get('/blog',FrontController.blog)
router.get('/login',FrontController.login)
router.get('/blogdetail/:id',FrontController.blogdetail)
router.get('/register',FrontController.adminregister)
router.post('/adminregister',FrontController.admininsert)
router.post('/verify_login',FrontController.verifylogin)
router.get('/logout',FrontController.logout)



// admin controller 
router.get('/admin/dashboard',admin_auth,AdminController.Dashboard)


//admin blog controller
router.get('/admin/blogdisplay',BlogController.blogdisplay)
router.post('/bloginsert',BlogController.bloginsert)
router.get('/admin/blogview/:id',BlogController.blogview)
router.get('/admin/blogedit/:id',BlogController.blogedit)
router.post('/blogupdate/:id',BlogController.blogupdate)
router.get('/admin/blogdelete/:id',BlogController.blogdelete)
//admin about page 
router.get('/admin/aboutus',AboutController.aboutdisplay)
router.get('/admin/aboutedit/:id',AboutController.aboutedit)
router.post('/aboutupdate/:id',AboutController.aboutupdate)

//admin category controller
router.get('/admin/categorydisplay',CategoryController.categorydisplay)
router.post('/categoryinsert',CategoryController.categoryinsert)
router.get('/admin/categoryview/:id',CategoryController.categoryview)
router.get('/admin/categoryedit/:id',CategoryController.categoryedit)
router.post('/categoryupdate/:id',CategoryController.categoryupdate)
router.get('/admin/categorydelete/:id',CategoryController.categorydelete)

//admin contact controller
router.get('/admin/contactdisplay',ContactController.contactview)

//contact page 
router.post('/contactinsert',ContactController.contactadd)



module.exports = router