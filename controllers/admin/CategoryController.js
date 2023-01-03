const CategoryModel=require('../../models/category')
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "dyxgn3lxm",
    api_key: "534928392931183",
    api_secret: "kMQ2veL-RNoYwJwZ_zhRFNJkXuk",
    // secure: true
  });

class CategoryController{
    static categorydisplay=async(req,res)=>{
        const categorydata=await CategoryModel.find()
        // console.log(data)
        res.render('admin/category/categorydisplay',{cd:categorydata})
    }
    
    static categoryinsert = async (req,res)=>{
        //console.log(req.files.image)
        const file =req.files.image;
        const myimages =await cloudinary.uploader.upload(file.tempFilePath,{
            folder: "category_image"
        });
        //console.log(myimages)
        try{
            const result = new CategoryModel({
                categoryname : req.body.categoryname,
                image: {
                    public_id: myimages.public_id,
                    url: myimages.secure_url,
                },
            });
            await result.save();
            res.redirect("/admin/categorydisplay")
        }
        catch(err){
            console.log(err);

        }
    };
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
    static categoryedit =async(req,res)=>{
        //console.log(req.params.id)
        try {
            const result = await CategoryModel.findById(req.params.id);
            //console.log(result)
            res.render("admin/category/categoryedit", { categoryedit: result });
          } catch (err) {
            console.log(err);
          }
    
    }
    static categoryupdate = async(req,res)=>{
        try{
                const result = await CategoryModel.findByIdAndUpdate(req.params.id, {
                categoryname: req.body.categoryname,
            })
            await result.save();
            res.redirect("/admin/categorydisplay");
        }
        catch(err){
            console.log(err)
        }
    }
    static categorydelete = async (req,res)=>{
        try{
              const result = await CategoryModel.findByIdAndDelete(req.params.id)
              res.redirect("/admin/categorydisplay");
        }
        catch(err){
          console.log(err)
        }
      }
}
module.exports=CategoryController