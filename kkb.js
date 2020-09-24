const koa = require("koa");
const {
    initRouter,
    initController,
    initService,
    //   loadConfig,
    // initSchedule,
} = require("./kkb-loader");

class Kkb {
    constructor(conf) {
        this.$app = new koa(conf);

        // loadConfig(this);

        this.$service = initService();

        this.$ctrl = initController(this); // 加载ctrl

        this.$router = initRouter(this);
        this.$app.use(this.$router.routes());

        // initSchedule();
    }
    run(port) {
        this.$app.listen(port, () => {
            console.log("服务器启动 端口：" + port);
        });
    }
}
module.exports = Kkb;