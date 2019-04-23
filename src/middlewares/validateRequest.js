const Joi = require('joi');

const schema = require('./schema');
const helper = require('../helpers');

class Validate {

  static async validateRequestBody(ctx) { 
    let requestMethods = {};
    Object.assign(requestMethods, { method: ctx.request.method });
    let validate;
    for (const method in requestMethods) {
      switch (requestMethods[method]) {
        case 'POST':
          if (ctx.request.url === 'user') {
            validate = await Joi.validate(ctx.request.body, schema.register);
          } else if (ctx.request.url === '/users/signin') {
            validate = await Joi.validate(ctx.request.body, schema.signin);
          }
          break;
        case 'GET': 
          validate = await Joi.validate(ctx.params, schema.user);
          break;
        default:
      }
    }
  
    return validate;
  }

  static async validateRequest(ctx, next) {
    try {
      const response = await Validate.validateRequestBody(ctx);
      if (response) return next();
    } catch (error) {
      helper.validationError(ctx, error);
    }
  }
}


module.exports = Validate;
