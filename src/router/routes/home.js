const Router = require('koa-router');
const HomeController = require('../../controllers/HomeController');

const router = new Router();

router.get('/', HomeController.home);


module.exports = router;
