const AboutModel = require("../../models/about")
class AboutController{
    static aboutdisplay = async(req,res)=>{
        const aboutdata = await AboutModel.find();
        console.log(aboutdata)
        res.render("admin/about/aboutus", { ac: aboutdata });
    }

}
module.exports = AboutController