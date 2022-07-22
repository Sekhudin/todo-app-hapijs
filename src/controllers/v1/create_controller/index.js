const { nanoid } = require("nanoid");
const { TodoModel } = require("../../../models/todo");

const CreateController = async (req, res) => {
  const { title, body, tags, ...pays } = req.payload;
  const createAt = new Date().toISOString();
  const updateAt = new Date().toISOString();
  const arr_tags = tags.replace(/\s/g, "").split(",");
  const id = nanoid(15);

  const myTodo = new TodoModel({
    id: id,
    title: title,
    body: body,
    tags: arr_tags,
    createAt: createAt,
    updateAt: updateAt,
  });

  let data = {};
  return await myTodo
    .save()
    .then((value) => {
      data.status = "succes";
      data.message = "Berhasil Menambahkan catatan";
      return res.response(data).code(200);
    })
    .catch((err) => {
      data.status = "failed";
      data.message = err.message;
      return res.response(data).code(409);
    });
};

module.exports = { CreateController };
