import express from 'express'
import fileUpload  from 'index.html';
const app = express()

app.use(express.static(__dirname + '/index.html'));
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/about', function (req, res) {
//   res.send('about page')
// })

// app.get('/services', function (req, res) {
//   res.send('services page')
// })
// app.get('/home', function (req, res) {
//   res.send('home page')
// })
app.get('/', function (req, res) {
  res.sendFile(`{'content-type','text.html'}`)
})

app.listen(3000, function (req, res){
  console.log("server start")
})