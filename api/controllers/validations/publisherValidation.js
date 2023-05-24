const Joi = require("joi");

const PublisherValidation = {
  show: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      name: Joi.string().optional(),
      slug: Joi.string().optional(),
      games: Joi.array().items(Joi.string()).optional(),
    }),
  },

  register: {
    body: Joi.object({
      name: Joi.string().required(),
      slug: Joi.string().required(),
    }),
  },
  delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = PublisherValidation;
