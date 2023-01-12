const AboutModel = require('../models/about')
const BlogModel = require('../models/Blog')
const categorymodel = require('../models/category')
const AdminModel = require('../models/admin')

class FrontController{


    static home= async(req,res)=>{
        const data = await BlogModel.find()
        //console.log(data)
       // res.send('homepage')
       res.render('home',{d:data})

       

    }

    static about=async(req,res)=>{
        const aboutdata = await AboutModel.find()
        //console.log(aboutdata)
        res.render('about',{ab: aboutdata})
        
        
    }

    static  contact=(req,res)=>{
        
        res.render('contact')
    }

    static blog= async(req,res)=>{
        const bloglist = await BlogModel.find()

        res.render('blog',{bb:bloglist})
    }

    

    
    
    static blogdetail = async(req ,res) =>{
        try{
            const category =await categorymodel.find()
            const recentblog = await BlogModel.find()
            const result = await BlogModel.findById(req.params.id);
            //console.log(result)
            res.render("blogdetail",{r: result,recentblog:recentblog,cat:category});

        }
        catch(err){
            console.log(err)
        }
    }

// admin login  

    static login=(req,res)=>{

        res.render('login')
    }
    static adminregister=async(req,res)=>{

        res.render('register')
    }

    static admininsert=async(req,res)=>{
        try{
            //console.log(req.body)
            const{name,email,password,cpassword}=req.body

            const result= new AdminModel({
                name: name,
                email: email,
                password:password

            })
            await result.save();
            res.redirect("/login")

        }
        catch(err){
            console.log(err)
        }
        
    }




    
}
module.exports=FrontController