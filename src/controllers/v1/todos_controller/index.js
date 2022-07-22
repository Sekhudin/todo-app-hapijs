const TodosController = (req, res) => {
  return res.view("v1/todos", { title: "add todo" });
};

module.exports = {
  TodosController,
};
