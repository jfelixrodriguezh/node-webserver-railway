const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Jose Felix Rodriguez',
    titulo: 'Curso de Node'
  })
})


app.get('/saludo', (req, res) => {
  res.send('Hola Node')
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jose Felix Rodriguez',
        titulo: 'Curso de Node'
      })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jose Felix Rodriguez',
        titulo: 'Curso de Node'
      })
})

app.get('*', (req, res) => {
  //res.send('404|Not found')
  res.sendFile( __dirname + '/public/404.html')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})