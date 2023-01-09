const express = require('express')

const connectDB = require('./db/connect_db')
const app = express()
const port = 2147
const bodyParser=require('body-parser')    

var session = require('express-session')
var flash = require('connect-flash');
const router = require('./routes/web')

// file uploader
const fileUpload = require("express-fileupload");

app.use(fileUpload({useTempFiles: true}));

// mongo db connection
connectDB()


//setup EJS
app.set('view engine','ejs')

//static files path
app.use(express.static('public'))

// body parser
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))



// messages
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));

app.use(flash());

// router linking
app.use('/',router)









// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  

