const CategoryModel=require('../../models/category')

class CategoryController{
    static categorydisplay=async(req,res)=>{
        const categorydata=await CategoryModel.find()
        // console.log(data)
        res.render('admin/category/categorydisplay',{cd:categorydata})
    }
    
    static categoryinsert=async (req,res)=>{
        try{
            const result = new CategoryModel({
                categoryname : req.body.categoryname
            });
            await result.save();
            res.redirect("/admin/categorydisplay")
        }
        catch(err){
            console.log(err);

        }
    };
}
module.exports=CategoryController