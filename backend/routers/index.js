const routerDev = require("./devRoute.js");
const routerNivel = require("./nivelRoute.js");

module.exports = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerDev);
  app.use(routerNivel);
};
