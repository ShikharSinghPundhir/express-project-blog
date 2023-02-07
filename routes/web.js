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
router.get('/admin/blogdisplay',admin_auth,BlogController.blogdisplay)
router.post('/bloginsert',admin_auth,BlogController.bloginsert)
router.get('/admin/blogview/:id',admin_auth,BlogController.blogview)
router.get('/admin/blogedit/:id',admin_auth,BlogController.blogedit)
router.post('/blogupdate/:id',admin_auth,BlogController.blogupdate)
router.get('/admin/blogdelete/:id',admin_auth,BlogController.blogdelete)
//admin about page 
router.get('/admin/aboutus',admin_auth,AboutController.aboutdisplay)
router.get('/admin/aboutedit/:id',admin_auth,AboutController.aboutedit)
router.post('/aboutupdate/:id',admin_auth,AboutController.aboutupdate)

//admin category controller
router.get('/admin/categorydisplay',admin_auth,CategoryController.categorydisplay)
router.post('/categoryinsert',admin_auth,CategoryController.categoryinsert)
router.get('/admin/categoryview/:id',admin_auth,CategoryController.categoryview)
router.get('/admin/categoryedit/:id',admin_auth,CategoryController.categoryedit)
router.post('/categoryupdate/:id',admin_auth,CategoryController.categoryupdate)
router.get('/admin/categorydelete/:id',admin_auth,CategoryController.categorydelete)

//admin contact controller
router.get('/admin/contactdisplay',admin_auth,ContactController.contactview)

//contact page 
router.post('/contactinsert',admin_auth,ContactController.contactadd)



module.exports = router