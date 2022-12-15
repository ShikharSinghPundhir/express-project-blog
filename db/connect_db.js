const mongoose = require('mongoose')


const connectDB=()=>{
    return mongoose.connect('mongodb://localhost:27017/Blogwebsite')

    .then(()=>{
        console.log('Connection succesfull')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB