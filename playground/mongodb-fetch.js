const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB");
  }
  console.log("Connected to MongoDB");
  const db = client.db("TodoApp");
  db.collection("Todos")
    .find()
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log(err);
      }
    );
    client.close()
});
