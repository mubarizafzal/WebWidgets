
const MongoClient = require('mongodb').MongoClient;

const dsn = 'mongodb://localhost:27017/temp'

function insertMongodb (collection, data) {
  const promisedInsert = [];

  Object.keys(data).forEach( (key) => {
    promisedInsert.push(
      collection.insertOne({date: key, value: data[key]}) // return promise?
    );
  });
  return Promise.all(promisedInsert);
}

MongoClient.connect(dsn, function (err, db) {
  if (err) throw err;
  console.log("connected successfully");
  db.close();
})
