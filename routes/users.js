let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo-album')
//Homework print a message in terminal as database connected whenever the database gets connected//
let userSchema = mongoose.Schema({
  name: String,
  avatar: String
})

module.exports = mongoose.model('photo', userSchema)