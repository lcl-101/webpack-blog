const mongoose = require('./config');
const Schema = mongoose.Schema;

let assistant = new Schema({
  name: String
})

module.exports = mongoose.model('Assistant', assistant);
