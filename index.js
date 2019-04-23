
class Server {

  static startServer() {
    const Koa = require('koa');
    const koaBody = require('koa-body');
    const dotenv = require('dotenv');

    dotenv.config();
    
    const route = require('./src/router');
    
    const app = new Koa();
    app.use(koaBody());


    app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
    });

    app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
    
    route(app);
  
    app.listen(3000, () => console.log(
      `server is running on port ${process.env.PORT}`
    )).on('error', err => console.error(err));
  }
}


module.exports = Server.startServer();
