/* const app = new(require("koa"))();
const { initRouter } = require("./router-loader");
app.use(initRouter().routes());
app.listen(3000); */

const Kkb = require("./kkb");
const app = new Kkb();
app.run(4000);