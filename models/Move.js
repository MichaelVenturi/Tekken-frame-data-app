const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoveSchema = new Schema({
  command: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },
  startup: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  hit: {
    type: String,
    required: true,
  },
  counterHit: {
    type: String,
    required: true,
  },
  properties: {
    type: [String],
    required: true,
    default: [],
  },
});

const Move = mongoose.model("move", MoveSchema);

module.exports = Move;
