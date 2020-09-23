const app = new(require("koa"))();
const { initRouter } = require("./router-loader");
app.use(initRouter().routes());
app.listen(3000);