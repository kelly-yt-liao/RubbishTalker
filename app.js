
// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbishTalk = require('./generateRubbishTalk.js')
// create a variable to store career infos
const careerList = require('./careers.json')

// Create an web app by Express
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting for the existing files
app.use(express.static('public'))

// setting for the bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

// routes setting using index template with replicate partial template content.
app.get('/', (req, res) => {
  // past the career data into the 'index' partial template
  res.render('index', { careers: careerList.results })
})

app.post('/', (req, res) => {
  let rubbish = generateRubbishTalk(req.body)
  // put both careers and rubbish params in partial index template in the post process.
  res.render('index', { careers: careerList.results, rubbish: rubbish })
})

// start and listen on the Express server from a port at local side
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})


