module.exports = (app) => ({
    "get /": async(ctx) => {
        ctx.body = "用户首页";
    },
    "get /detail": async(ctx) => {
        ctx.body = "用户详细页面";
    },
    /* "get /": app.$ctrl.home.index,
                  "get /detail": app.$ctrl.home.detail, */
});