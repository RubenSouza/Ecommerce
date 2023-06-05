const Joi = require("joi");

const GameValidation = {
  show: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },

  search: {
    query: Joi.object({
      search: Joi.string().required(),
      sort: Joi.string().optional(),
      page: Joi.number().optional(),
    }),
  },

  register: {
    body: Joi.object({
      name: Joi.string().required(),
      slug: Joi.string().required(),
      short_description: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      rating: Joi.number().required(),
      release_date: Joi.date().required(),
      cover: Joi.string().required(),
      gallery: Joi.array().items(Joi.string()).required(),
      categories: Joi.array().items(Joi.string()).required(),
      developers: Joi.array().items(Joi.string()).required(),
      publishers: Joi.array().items(Joi.string()).required(),
      platforms: Joi.array().items(Joi.string()).required(),
      system_requirement: Joi.object().required(),
    }),
  },

  update: {
    body: Joi.object({
      name: Joi.string().optional(),
      slug: Joi.string().optional(),
      short_description: Joi.string().optional(),
      description: Joi.string().optional(),
      price: Joi.number().optional(),
      rating: Joi.number().optional(),
      release_date: Joi.date().optional(),
      cover: Joi.string().optional(),
      gallery: Joi.array().items(Joi.string()).optional(),
      categories: Joi.array().items(Joi.string()).optional(),
      developers: Joi.array().items(Joi.string()).optional(),
      publishers: Joi.array().items(Joi.string()).optional(),
      platforms: Joi.array().items(Joi.string()).optional(),
      system_requirement: Joi.object().optional(),
    }),
  },

  delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = GameValidation;
