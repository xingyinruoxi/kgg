const { initRouter } = require("./router-loader");
const Koa = require("koa");
class Kkb {
    constructor() {
        this.$app = new Koa();
        this.$router = initRouter();
        this.$app.use(this.$router.routes());
    }
    run(port) {
        this.$app.listen(port, () => {
            console.log("服务器启动 端口：" + port);
        });
    }
}
module.exports = Kkb;