const BlogModel=require('../../models/Blog')

class BlogController{
    static blogdisplay=async(req,res)=>{
        const blogdata=await BlogModel.find()
        //console.log(data)
        res.render('admin/blog/blogdisplay',{bd:blogdata})
    }
    static bloginsert=async(req,res)=>{
        // console.log('hello')
        // console.log(req.body)
        try{
            const result=new BlogModel({
                title:req.body.title,
                description:req.body.description
            })
            await result.save()
            //route url(app.js) in redirect
            res.redirect('/admin/blogdisplay')


        }catch(err){
            console.log(err)
        }
       
    }
}
module.exports=BlogController


