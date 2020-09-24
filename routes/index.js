module.exports = (app) => ({
    "get /": async(ctx) => {
        app.ctx.body = "首页";
    },
    "get /detail": async(ctx) => {
        app.ctx.body = "详细页面";
    },
    /*  "get /": app.$ctrl.home.index,
                  "get /detail": app.$ctrl.home.detail, */
});