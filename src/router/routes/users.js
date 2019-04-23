const Router = require('koa-router');

const Validate = require('../../middlewares/validateRequest');
const UsersController = require('../../controllers/UsersController');

const UsersRouter = new Router({ prefix: '/users' });

UsersRouter.post('/', Validate.validateRequest, UsersController.register);
UsersRouter.post('/signin', Validate.validateRequest, UsersController.signin);
UsersRouter.get('/:id', Validate.validateRequest, UsersController.user);
UsersRouter.get('/', UsersController.users);


module.exports = UsersRouter;
