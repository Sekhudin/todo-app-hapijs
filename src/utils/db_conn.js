const Mongoose = require("mongoose");

Mongoose.connect(
  "mongodb+srv://Sekhudin:sekhudin11121998@cluster0.n787bxx.mongodb.net/todoListApp?retryWrites=true&w=majority"
);
const db = Mongoose.connection;

module.exports = {
  Mongoose,
  db,
};
