

class FrontController{


    static home=(req,res)=>{
       // res.send('homepage')
       res.render('home')

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




    
}
module.exports=FrontController