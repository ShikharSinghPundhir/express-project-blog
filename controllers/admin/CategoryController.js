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
    }
    static categoryview =async(req,res)=>{
        // console.log(req.params.id)          //id get by params
        try{
                const result = await CategoryModel.findById(req.params.id)
                //console.log(result)
                res.render('admin/category/categoryview',{categoryview:result})
        }
        catch (err){
            console.log(err);
        }
    }
}
module.exports=CategoryController