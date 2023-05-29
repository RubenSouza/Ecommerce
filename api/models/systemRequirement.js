const mongoose = require("mongoose");

const SystemRequirementSchema = new mongoose.Schema(
  {
    minimun: {
      os: { type: String, optional: true },
      processor: { type: String, optional: true },
      memory: { type: String, optional: true },
      graphics: { type: String, optional: true },
      directx: { type: String, optional: true },
      storage: { type: String, optional: true },
      "sound card": { type: String, optional: true },
    },
    recommended: {
      os: { type: String, optional: true },
      processor: { type: String, optional: true },
      memory: { type: String, optional: true },
      graphics: { type: String, optional: true },
      directx: { type: String, optional: true },
      storage: { type: String, optional: true },
      "sound card": { type: String, optional: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SystemRequirement", SystemRequirementSchema);
