module.exports = (app) => {
    return {
        /*  "get /": async(ctx) => {
                            ctx.body = "用户首页";
                        },
                        "get /detail": async(ctx) => {
                            ctx.body = "用户详细页面";
                        }, */
        "get /": app.$ctrl.user.index,
        "get /detail": app.$ctrl.user.detail,
    };
};