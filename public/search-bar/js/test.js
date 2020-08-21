
const MongoClient = require('mongodb').MongoClient;

const dsn = 'mongodb://localhost:27017/temp'

MongoClient.connect(dsn, function (err, db) {
  if (err) throw err;
  console.log("connected successfully");
  db.close();
})
