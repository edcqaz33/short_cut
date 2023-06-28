const shortCuts = require("./shortCuts")

function randomURL(numOfURL) {
  const baseChars = '0123456789qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP'
  // 23456789qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP'
  let sURL = ''
  do {
    sURL = ''
    for (let i = 0; i < numOfURL; i++) {
      sURL += baseChars[Math.floor(Math.random() * baseChars.length)]
    }
    console.log('y')
  }
  while (shortCuts.findOne({ cuttedURL: sURL }))
  return sURL
}

module.exports = randomURL
