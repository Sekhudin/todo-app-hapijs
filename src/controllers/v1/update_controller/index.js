const { TodoModel } = require("../../../models/todo");

const UpdateController = async (req, res) => {
  const { id } = req.params;
  const { title, body, tags } = req.payload;
  const updateAt = new Date().toISOString();
  const arr_tags = tags.replace(/\s/g, "").split(",");

  let data = {};

  const find = { id: id };
  const update = {
    id: id,
    title: title,
    body: body,
    tags: arr_tags,
    updateAt: updateAt,
  };
  return await TodoModel.findOneAndUpdate(find, update, {
    returnOriginal: false,
  })
    .then((value) => {
      data.status = "succes";
      data.data = value;
      data.message = `catatan berhasil diperbarui`;
      return data;
    })
    .catch((err) => {
      data.status = "failed";
      data.data = null;
      data.message = `catatan gagal diperbarui`;
      return data;
    });
};

module.exports = {
  UpdateController,
};
