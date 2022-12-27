const { findById } = require("../../models/Blog");
const BlogModel = require("../../models/Blog");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dyxgn3lxm",
  api_key: "534928392931183",
  api_secret: "kMQ2veL-RNoYwJwZ_zhRFNJkXuk",
  // secure: true
});

class BlogController {
  static blogdisplay = async (req, res) => {
    const blogdata = await BlogModel.find();
    //console.log(data)
    res.render("admin/blog/blogdisplay", { bd: blogdata });
  };
  static bloginsert = async (req, res) => {
    // console.log('hello')
    // console.log(req.body)
    // console.log(req.files.image)
    const file = req.files.image;
    const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "blogs_image",
    });
    // console.log(myimage)
    try {
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
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
  static blogdelete = async (req, res) => {
    try {
      const result = await BlogModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin/blogdisplay");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = BlogController;
