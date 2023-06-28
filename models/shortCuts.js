const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortCutSchema = new Schema({
  originURL: { type: String, required: true },
  cuttedURL: { type: String },
})
module.exports = mongoose.model('shortCut', shortCutSchema)