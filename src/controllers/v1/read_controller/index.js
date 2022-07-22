const { TodoModel } = require("../../../models/todo");

const ReadController = async (req, res) => {
  const { id } = req.params;
  let data = {};
  return await TodoModel.find(id ? { id: id } : null)
    .then((value) => {
      if (value.length < 1 || !value) {
        throw "data not found";
      }
      data.status = "succes";
      data.data = value;
      data.message = "berhasil mendapatkan catatan";
      return res.response(data).code(200);
    })
    .catch((err) => {
      data.status = "failed";
      data.data = null;
      data.message = err;
      return res.response(data);
    });
};

module.exports = {
  ReadController,
};
