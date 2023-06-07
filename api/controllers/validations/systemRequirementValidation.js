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
        os: Joi.string().optional(),
        processor: Joi.string().optional(),
        memory: Joi.string().optional(),
        graphics: Joi.string().optional(),
        directx: Joi.string().optional(),
        storage: Joi.string().optional(),
      }),
      recommended: Joi.object({
        os: Joi.string().optional(),
        cpu: Joi.string().optional(),
        ram: Joi.string().optional(),
        gpu: Joi.string().optional(),
        vram: Joi.string().optional(),
        directx: Joi.string().optional(),
        storage: Joi.string().optional(),
      }),
    }),
  },
  update: {
    body: Joi.object({
      minimun: Joi.object({
        os: Joi.string().optional(),
        processor: Joi.string().optional(),
        memory: Joi.string().optional(),
        graphics: Joi.string().optional(),
        directx: Joi.string().optional(),
        storage: Joi.string().optional(),
      }),
      recommended: Joi.object({
        os: Joi.string().optional(),
        cpu: Joi.string().optional(),
        ram: Joi.string().optional(),
        gpu: Joi.string().optional(),
        vram: Joi.string().optional(),
        directx: Joi.string().optional(),
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
