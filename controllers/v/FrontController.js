

class FrontController{


    static home=(req,res)=>{
       // res.send('homepage')
       res.render('home')

    }

    static about=(req,res)=>{
        // res.send('Aboutpage')
        res.render('about')
    }

    static  team=(req,res)=>{
        // res.send('Aboutpage')
        res.render('team')
    }

    
}
module.exports=FrontController