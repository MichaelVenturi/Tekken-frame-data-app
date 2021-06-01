const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Move = require("./Move").schema;

const CharacterSchema = new Schema({
  // for url (../api/armorKing)
  label: {
    type: String,
    required: true,
    unique: true,
  },
  // character name with space (Armor King)
  name: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  moves: {
    type: [Move],
    required: true,
    default: [],
  },
});

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;
