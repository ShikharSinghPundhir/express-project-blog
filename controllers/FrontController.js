

class FrontController{


    static home=(req,res)=>{
       // res.send('homepage')
       res.render('home')

    }

    static about=(req,res)=>{
        
        res.render('about')
    }

    static  team=(req,res)=>{
        
        res.render('team')
    }

    
}
module.exports=FrontController