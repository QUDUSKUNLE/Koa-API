class HomeController {

  static home(ctx, next) {
    ctx.body = {
      status: 'success',
      home: 'Welcome to koaJs'
    };
    next();
  }
}

module.exports = HomeController;
