const Joi = require("joi");

const HomeValidation = {
  show: {
    params: Joi.object({
      id: Joi.string().required(),
    }).required(),
  },

  register: {
    body: Joi.object({
      highlights: Joi.array()
        .items(
          Joi.object({
            title: Joi.string().required(),
            highlight: Joi.string().required(),
          })
        )
        .required(),
      publishers: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required(),
            publisher: Joi.string().required(),
          })
        )
        .required(),
      showNews: Joi.boolean().optional(),
    }),
  },

  update: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      highlights: Joi.array().items(
        Joi.object({
          title: Joi.string().optional(),
          highlight: Joi.string().optional(),
        })
      ),
      publishers: Joi.array().items(
        Joi.object({
          name: Joi.string().optional(),
          publisher: Joi.string().optional(),
        })
      ),
      showNews: Joi.boolean().optional(),
    }),
  },

  delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = HomeValidation;
