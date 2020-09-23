const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
// 读取目录
function readFolder(dir, callBack) {
    // 获取文件夹绝对路径
    const dirPath = path.resolve(__dirname, dir);
    const files = fs.readdirSync(dirPath);

    // 循环文件夹目录
    files.forEach((fileName) => {
        fileName = fileName.replace(/\.js$/, "");
        const fileContent = require(dirPath + "/" + fileName);
        // console.log("fileFullPath", fileFullPath);
        callBack(fileName, fileContent);
    });
}

function initRouter(app) {
    const router = new Router();
    readFolder("routes", (fileName, fileContent) => {
        const prefix = fileName === "index" ? "" : "/" + fileName;
        const routes = fileContent(app);
        Object.keys(routes).forEach((key) => {
            const [method, path] = key.split(/\s/);
            // 注册路由
            router[method](prefix + path, fileContent()[key]);
            // router[method](prefix + path, async() => {});
        });
    });
    return router;
}
// initRouter();
module.exports = {
    initRouter,
};