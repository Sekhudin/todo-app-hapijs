const { TodoModel } = require("../../../models/todo");

const DeleteController = async (req, res) => {
  const { id } = req.params;
  let data = {};

  return await TodoModel.findOneAndDelete({ id: id })
    .then((value) => {
      data.status = "succes";
      data.message = `catatan "${value.title}" berhasil dihapus`;
      return data;
    })
    .catch((err) => {
      data.status = "failed";
      data.message = "catatan gagal dihapus";
      return data;
    });
};

module.exports = {
  DeleteController,
};
