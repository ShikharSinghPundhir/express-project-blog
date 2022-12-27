const { findById } = require("../../models/Blog");
const BlogModel = require("../../models/Blog");

class BlogController {
  static blogdisplay = async (req, res) => {
    const blogdata = await BlogModel.find();
    //console.log(data)
    res.render("admin/blog/blogdisplay", { bd: blogdata });
  };
  static bloginsert = async (req, res) => {
    // console.log('hello')
    // console.log(req.body)
    try {
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
      });
      await result.save();
      //route url(app.js) in redirect
      res.redirect("/admin/blogdisplay");
    } catch (err) {
      console.log(err);
    }
  };
  static blogview = async (req, res) => {
    // console.log(req.params.id)          //id get by params
    try {
      const result = await BlogModel.findById(req.params.id);
      //console.log(result)
      res.render("admin/blog/blogview", { blogview: result });
    } catch (err) {
      console.log(err);
    }
  };
  static blogedit = async (req, res) => {
    // console.log(req.params.id)
    try {
      const result = await BlogModel.findById(req.params.id);
      //console.log(result)
      res.render("admin/blog/blogedit", { blogedit: result });
    } catch (err) {
      console.log(err);
    }
  };
  static blogupdate = async (req, res) => {
    try {
      // console.log(req.params.id)
      // console.log(req.body)
      const result = await BlogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
      });
      await result.save();
      res.redirect("/admin/blogdisplay");
    } catch (err) {
      console.log(err);
    }
  };
  static blogdelete = async (req,res)=>{
    try{
          const result = await BlogModel.findByIdAndDelete(req.params.id)
          res.redirect("/admin/blogdisplay");
    }
    catch(err){
      console.log(err)
    }
  }
}
module.exports = BlogController;
