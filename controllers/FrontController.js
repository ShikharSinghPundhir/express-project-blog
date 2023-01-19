const AboutModel = require("../models/about");
const BlogModel = require("../models/Blog");
const categorymodel = require("../models/category");
const AdminModel = require("../models/admin");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class FrontController {
  static home = async (req, res) => {
    const data = await BlogModel.find().sort({ _id: -1 }).limit(6);
    //console.log(data)
    // res.send('homepage')
    res.render("home", { d: data });
  };

  static about = async (req, res) => {
    const aboutdata = await AboutModel.find();
    //console.log(aboutdata)
    res.render("about", { ab: aboutdata });
  };

  static contact = (req, res) => {
    res.render("contact");
  };

  static blog = async (req, res) => {
    const bloglist = await BlogModel.find();

    res.render("blog", { bb: bloglist });
  };

  static blogdetail = async (req, res) => {
    try {
      const category = await categorymodel.find().sort({ _id: -1 }).limit(6);
      const recentblog = await BlogModel.find().sort({ _id: -1 }).limit(6);
      const result = await BlogModel.findById(req.params.id);
      //console.log(result)
      res.render("blogdetail", {
        r: result,
        recentblog: recentblog,
        cat: category,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // admin login

  static login = (req, res) => {

    res.render("login",{message:req.flash("success"),message1:req.flash("error")});

  };
  static adminregister = async (req, res) => {
    res.render("register", { message: req.flash("error") });
  };

  static admininsert = async (req, res) => {
    try {
      //console.log(req.body)
      const { name, email, password, cpassword } = req.body;
      const admin = await AdminModel.findOne({ email: email });
      //console.log(admin)
      if (admin) {
        req.flash("error", "email already exists");
        res.redirect("/register");
      } else {
        if (name && email && password && cpassword) {
          if (password == cpassword) {
            try {
              const hashpassword = await bcrypt.hash(password,10)
              const result = new AdminModel({
                name: name,
                email: email,
                password: hashpassword,
              });
              await result.save();
              req.flash("success", "registration sucessuful  Please login ");
              res.redirect("/login");
            } catch (err) {
              console.log(err);
            }
          } else {
            req.flash("error", "Password and confirm password doesnot match");
            res.redirect("/register");
          }
        } else {
          req.flash("error", "All Field are required");
          res.redirect("/register");
        }
      }

      //
    } catch (err) {
      console.log(err);
    }
  };

  static verifylogin =async(req,res)=>{

    try{
      //console.log(req.body)
      const {email,password} =req.body
      if(email && password){
        const admin = await AdminModel.findOne({email:email})
        if(admin != null){
          const ismatched = await bcrypt.compare(password,admin.password)
          if(ismatched ){
            //token generate
            const token = jwt.sign({ id: admin._id }, 'shikhartcsdigitalcandidate700');
            //console.log(token)
            res.cookie('token',token)
            res.redirect("/admin/dashboard")

          }
          else{
            req.flash("error", " email or password not matched");
            res.redirect("/login");
          }
        } 
        else{
          req.flash("error", "  You are not registered");
          res.redirect("/login");
        }

      }
      else{
        req.flash("error", "All Field are required");
        res.redirect("/login");
      }
    }
    catch(err){
      console.log(err)
    }
  }



  static logout = async(req,res) =>{
    try{
      res.redirect('/login')

    }
    catch(err){
      console.log(err)
    }
  }



}
module.exports = FrontController;



//  $2b$10$X1srN2t.2BAXniV1qYNcmeJDiJDFMCkXesTC3CsZg5xVEDxmUIQWy



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzJkMDc0YjBiZmU5Zjg5OTUxMDBkZSIsImlhdCI6MTY3Mzk3MTU2MX0.9BI3Ls3OPk3Nm0eLxCGPaWFnF7d2j6i2UJ9yMrh0XuY