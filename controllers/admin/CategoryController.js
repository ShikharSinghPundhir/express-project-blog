const CategoryModel=require('../../models/category')

class CategoryController{
    static categorydisplay=async(req,res)=>{
        const data=await CategoryModel.find()
        console.log(data)
        res.render('admin/category/categorydisplay')
    }
    
}
module.exports=CategoryController