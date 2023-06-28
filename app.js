// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const shortCut = require('./models/shortCuts')
const randomURL = require('./models/randomURL')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static('public'))

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const originURL = req.body.originURL
  if (!originURL) return res.redirect("/")

  shortCut.findOne({ originURL: originURL })
    .then(URLdata =>
      URLdata ? URLdata : shortCut.create({ originURL, cuttedURL: randomURL(5) }))
    .then(URLdata => res.render('showShorten', { originURL: originURL, shortenURL: URLdata.cuttedURL, preURL: req.headers.origin }))
    .catch(error => console.error(error))
})

app.get('/:sURL', (req, res) => {
  const sURL = req.params.sURL
  shortCut.findOne({ cuttedURL: sURL }).then(URLdata => {
    if (URLdata) {
      res.redirect(URLdata.originURL)
    } else { res.render('error_sURL', { sURL: sURL, preURL: req.headers.host }) }
  }
  )
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})