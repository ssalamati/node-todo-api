const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB");
  }
  console.log("Connected to MongoDB");
  const db = client.db("TodoApp");
  db.collection("Todos").insertOne(
    {
      text: "Something to do",
      completed: false
    },
    (err, result) => {
      if (err) {
        console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.collection("Users").insertOne(
    {
      name:"Mohammad",
      age:"20",
      location: "tehran"

    },
    (err, result) => {
      if (err) {
        console.log("Unable to insert Users", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  client.close();
});
