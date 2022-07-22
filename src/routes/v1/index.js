const v1_controllers = require("../../controllers/v1");
const path = require("path");

const v1_routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return res.redirect("/home");
    },
  },
  {
    method: "GET",
    path: "/home",
    handler: v1_controllers.HomeController,
  },
  {
    method: "GET",
    path: "/todos",
    handler: v1_controllers.TodosController,
  },
  {
    method: "GET",
    path: "/todos/{id}",
    handler: (req, res) => {
      return res.view("v1/todos", { title: "update" });
    },
  },
  {
    method: "GET",
    path: "/v1/todos/{id?}",
    handler: v1_controllers.ReadController,
  },
  {
    method: "POST",
    path: "/v1/todos",
    options: {
      payload: {
        multipart: true,
      },
      handler: v1_controllers.CreateController,
    },
  },
  {
    method: "PUT",
    path: "/v1/todos/{id}",
    options: {
      payload: {
        multipart: true,
      },
      handler: v1_controllers.UpdateController,
    },
  },
  {
    method: "DELETE",
    path: "/v1/todos/{id}",
    handler: v1_controllers.DeleteController,
  },
  {
    method: "*",
    path: "/{p*}", // catch-all path
    handler: v1_controllers.NotFoundController,
  },
  // static folder
  {
    method: "GET",
    path: "/public/{p*}",
    handler: {
      directory: {
        path: path.join(__dirname, "../../../public"),
      },
    },
  },
];

module.exports = v1_routes;
