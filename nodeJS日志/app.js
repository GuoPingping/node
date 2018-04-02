//log工具
const logUtil = require('./utils/logUtil');

//记录日志
app.use(async(ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    var ms;
    try {
        //开始进入到下一个中间件
        await next();
        ms = new Date() - start;
        //记录响应日志
        logUtil.logResponse(ctx, ms);
        //注销 console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    } catch (error) {
        ms = new Date() - start;
        //记录异常日志
        logUtil.logError(ctx, error, ms);

    }
});

module.exports = app;