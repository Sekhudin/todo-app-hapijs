const { NotFoundController } = require("./404_controller");
const { TodosController } = require("./todos_controller");
const { CreateController } = require("./create_controller");
const { DeleteController } = require("./delete_controller");
const { ReadController } = require("./read_controller");
const { UpdateController } = require("./update_controller");
const { HomeController } = require("./home_controller");

module.exports = {
  NotFoundController,
  TodosController,
  CreateController,
  DeleteController,
  ReadController,
  UpdateController,
  HomeController,
};
