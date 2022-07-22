const Hapi = require("@hapi/hapi");
const Handlebars = require("handlebars");
const Vision = require("@hapi/vision");
const Inert = require("@hapi/inert");
const { db } = require("./src/utils/db_conn");
const v1_routes = require("./src/routes/v1");

// const host = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 5000;

const serverRun = async () => {
  const myServer = Hapi.server({
    // host: host,
    port: port,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // midleware
  await myServer.register(Vision);
  await myServer.register(Inert);

  myServer.views({
    engines: {
      html: Handlebars,
    },
    relativeTo: __dirname,
    path: __dirname + "/src/views",
  });

  // routing
  myServer.route(v1_routes);

  // run server and connect database
  await myServer.start();
  db.on("error", () => console.log("Cannot connect to database!!!"));
  db.once("open", function callback() {
    console.log("Succes to connect database!");
  });
  console.log(
    `Hapi! run in ${myServer.info.host} on port: ${myServer.info.port}`
  );
};
serverRun();
