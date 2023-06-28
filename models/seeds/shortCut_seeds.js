const shortCut = require('../shortCuts')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 1; i < 6; i++) {
    shortCut.create({ originURL: `https://lighthouse.alphacamp.co/courses/100/units/2090${i}` })
  }
  console.log('done')
})

