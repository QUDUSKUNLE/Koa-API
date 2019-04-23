const KoaRouter = require('koa-router');

const HomeRouter = new KoaRouter();
const UsersRouter = new KoaRouter();

const home = require('./routes/home');
const users = require('./routes/users');

HomeRouter.use(home.routes()).use(home.allowedMethods());
UsersRouter.use(users.routes()).use(users.allowedMethods());


const routes = app => {
  app
    .use(HomeRouter.routes())
    .use(UsersRouter.routes())
}


module.exports = routes;
