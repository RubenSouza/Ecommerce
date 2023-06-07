const Joi = require("joi");

const HighlightValidation = {
  show: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  register: {
    body: Joi.object({
      title: Joi.string().required(),
      link: Joi.string().required(),
      short_description: Joi.string().required(),
      cover: Joi.string().required(),
      badge: Joi.string().required(),
      badge_color: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      title: Joi.string().optional(),
      link: Joi.string().optional(),
      short_description: Joi.string().optional(),
      cover: Joi.string().optional(),
      badge: Joi.string().required(),
      badge_color: Joi.string().required(),
    }),
  },
  delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = HighlightValidation;
