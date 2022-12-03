const express = require('express')
const FrontController = require('./controllers/FrontController')
const app = express()
const port = 2147


//setup EJS
app.set('view engine','ejs')

//static files path
app.use(express.static('public'))

// route
app.get('/',FrontController.home)
app.get('/about',FrontController.about)
app.get('/team',FrontController.team)



// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  