const BlogModel = require('../models/Blog')

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

    static blog=(req,res)=>{

        res.render('blog')
    }

    static login=(req,res)=>{

        res.render('login')
    }

    static blogdetail = async(req ,res) =>{
        try{
            const result = await BlogModel.findById(req.params.id);
            console.log(result)
            res.render("blogdetail",{r: result});
        }
        catch(err){
            console.log(err)
        }
    }




    
}
module.exports=FrontController