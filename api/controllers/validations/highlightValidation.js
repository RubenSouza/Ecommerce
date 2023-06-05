const Joi = require("joi");

const HighlightValidation = {
  show: Joi.object({
    id: Joi.string().required(),
  }),
  register: Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required(),
    cover: Joi.string().required(),
    short_description: Joi.string().required(),
  }),
  update: Joi.object({
    name: Joi.string().optional(),
    link: Joi.string().optional(),
    cover: Joi.string().optional(),
    short_description: Joi.string().optional(),
  }),
  delete: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = HighlightValidation;
