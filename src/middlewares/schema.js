const Joi = require('joi');

const schema = {
  register: Joi.object().keys(
    {
      email: Joi.string().email().required(),
      first_name: Joi.string().min(4).required(),
      last_name: Joi.string().min(4).required(),
      phone_number: Joi.string().min(11).max(11).required(),
      password: Joi.string().min(6).alphanum().required(),
      is_admin: Joi.boolean()
    }
  ),

  user: Joi.object().keys(
    {
      id: Joi.number().integer().required(),
    }
  ),

  signin: Joi.object().keys(
    {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).alphanum().required()
    }
  )
}


module.exports = schema;
