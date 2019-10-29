require('dotenv').config();
// exports.mongoDBUrl = 'mongodb://localhost:27017/invitation-form';
exports.mongoDBUrl = 'mongodb://admin:asdzxc123@ds141168.mlab.com:41168/invitation-db';

exports.nodeMailerCreds = {
  user: process.env.EMAIL,
  pass: process.env.PASS
};