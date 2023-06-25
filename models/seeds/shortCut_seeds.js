const mongoose = require('mongoose')
const shortCut = require('../shortCuts')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 1; i < 6; i++) {
    shortCut.create({ originURL: `https://lighthouse.alphacamp.co/courses/100/units/2090${i}` })
  }
  console.log('done')
})

