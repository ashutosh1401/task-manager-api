//Task App
const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5ed3ea864a6fda30d4d7c711"),
    //     },
    //     {
    //       $inc: {
    //         age: -18,
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // db.collection("users")
    //   .deleteOne({ _id: new ObjectID("5ed499e9059e524e9038e1fc") })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    db.collection("users")
      .deleteMany({ age: 18 })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    db.collection("tasks")
      .deleteOne({ description: "Maths Homework" })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
);
