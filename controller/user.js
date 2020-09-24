module.exports = (app) => ({
    index: async(ctx) => {
        // ctx.body = '首页Ctrl'
        const name = await app.$service.user.getName();
        // console.log("name", name);
        app.ctx.body = `ctrl ${name}`;
        // app.ctx.body = await app.$model.user.findAll();
    },
    detail: (ctx) => {
        app.ctx.body = "详细页面Ctrl";
    },
});