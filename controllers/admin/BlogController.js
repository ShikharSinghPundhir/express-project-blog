const BlogModel=require('../../models/Blog')

class BlogController{
    static blogdisplay=async(req,res)=>{
        const data=await BlogModel.find()
        console.log(data)
        res.render('admin/blog/blogdisplay')
    }
    
}
module.exports=BlogController


