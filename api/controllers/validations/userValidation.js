const Joi = require("joi");

const UserValidation = {
  index: {
    params: Joi.object({
      id: Joi.string().alphanum().required(),
    }),
  },

  register: {
    body: Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().optional(),
    }),
  },

  update: {
    body: Joi.object({
      username: Joi.string().optional(),
      email: Joi.string().email().optional(),
      password: Joi.string().optional(),
      isAdmin: Joi.boolean().optional(),
    }),
  },

  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
};

module.exports = UserValidation;
