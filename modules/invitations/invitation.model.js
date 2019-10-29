const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const invitationSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('invitations', invitationSchema);