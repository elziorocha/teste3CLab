const routerDev = require("./devRoute.js");
const routerNivel = require("./nivelRoute.js");

module.exports = (app) => {
  app.use(routerDev);
  app.use(routerNivel);
};
