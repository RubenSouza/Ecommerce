const mongoose = require("mongoose");

const SystemRequirementSchema = new mongoose.Schema(
  {
    minimun: {
      os: { type: String, required: true },
      cpu: { type: String, required: true },
      ram: { type: String, required: true },
      gpu: { type: String, required: true },
      vram: { type: String, required: true },
      directX: { type: String, required: true },
      storage: { type: String, required: true },
    },
    recommended: {
      os: { type: String, required: true },
      cpu: { type: String, required: true },
      ram: { type: String, required: true },
      gpu: { type: String, required: true },
      vram: { type: String, required: true },
      directX: { type: String, required: true },
      storage: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SystemRequirement", SystemRequirementSchema);
