const helper = {
  validationError: (ctx, error) => {
    ctx.status = 422;
    ctx.body = {
      status: 'error',
      response: error.details[0].message,
      message: 'Bad request',
    }
    return ctx;
  }
}


module.exports = helper;
