const express = require('express')
const FrontController = require('./controllers/v/FrontController')
const app = express()
const port = 2147


//setup EJS
app.set('view engine','ejs')

// route
app.get('/',FrontController.home)
app.get('/about',FrontController.about)



// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  