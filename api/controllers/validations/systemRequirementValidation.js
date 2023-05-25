const Joi = require("joi");

const SystemRequirementValidation = {
  show: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  register: {
    body: Joi.object({
      minimun: Joi.object({
        os: Joi.string().required(),
        cpu: Joi.string().required(),
        ram: Joi.string().required(),
        gpu: Joi.string().required(),
        vram: Joi.string().required(),
        directX: Joi.string().required(),
        storage: Joi.string().required(),
      }),
      recommended: Joi.object({
        os: Joi.string().required(),
        cpu: Joi.string().required(),
        ram: Joi.string().required(),
        gpu: Joi.string().required(),
        vram: Joi.string().required(),
        directX: Joi.string().required(),
        storage: Joi.string().required(),
      }),
    }),
  },
  update: {
    body: Joi.object({
      minimun: Joi.object({
        os: Joi.string().optional(),
        cpu: Joi.string().optional(),
        ram: Joi.string().optional(),
        gpu: Joi.string().optional(),
        vram: Joi.string().optional(),
        directX: Joi.string().optional(),
        storage: Joi.string().optional(),
      }),
      recommended: Joi.object({
        os: Joi.string().optional(),
        cpu: Joi.string().optional(),
        ram: Joi.string().optional(),
        gpu: Joi.string().optional(),
        vram: Joi.string().optional(),
        directX: Joi.string().optional(),
        storage: Joi.string().optional(),
      }),
    }),
  },
  delete: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = SystemRequirementValidation;
