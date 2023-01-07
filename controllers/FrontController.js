const BlogModel = require('../models/Blog')
const categorymodel = require('../models/category')

class FrontController{


    static home= async(req,res)=>{
        const data = await BlogModel.find()
        console.log(data)
       // res.send('homepage')
       res.render('home',{d:data})

       

    }

    static about=(req,res)=>{
        
        res.render('about')
    }

    static  contact=(req,res)=>{
        
        res.render('contact')
    }

    static blog= async(req,res)=>{
        const bloglist = await BlogModel.find()

        res.render('blog',{bb:bloglist})
    }

    static login=(req,res)=>{

        res.render('login')
    }

    static blogdetail = async(req ,res) =>{
        try{
            const category =await categorymodel.find()
            const recentblog = await BlogModel.find()
            const result = await BlogModel.findById(req.params.id);
            console.log(result)
            res.render("blogdetail",{r: result,recentblog:recentblog,cat:category});

        }
        catch(err){
            console.log(err)
        }
    }




    
}
module.exports=FrontController