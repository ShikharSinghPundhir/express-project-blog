const express = require('express')
const app = express()
const port = 2147

// route
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/contact', (req, res) => {
  res.send('contact page')
})



// server create
app.listen(port, () => {
    console.log(`Server is running  localhost : ${port}`)
  })
  