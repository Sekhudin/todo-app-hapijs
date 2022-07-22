const { Mongoose } = require("../../utils/db_conn");
const Schema = Mongoose.Schema;

const Todo_schema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: String, required: true }],
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
});

const TodoModel = Mongoose.model("Todo", Todo_schema);

module.exports = {
  TodoModel,
};
