const express = require("express");
const router = express.Router();

const Character = require("../../models/Character");

// get all characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    if (!characters) throw Error("no characters");
    res.status(200).json(characters);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// get specific character
router.get("/:id", async (req, res) => {
  try {
    const character = await Character.findOne({
      label: req.params.id,
    });
    if (!character) throw Error("no character found");

    res.status(200).json(character);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// only admin, add character
router.post("/", async (req, res) => {
  const newChar = new Character({
    label: req.body.label,
    name: req.body.name,
    imgURL: req.body.imgURL,
    moves: req.body.moves,
  });

  try {
    const char = await newChar.save();
    if (!char) throw Error("whoops");
    res.status(200).json(char);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// add move to character
router.put("/:id", async (req, res) => {
  try {
    const character = await Character.findOne({
      label: req.params.id,
    });
    if (!character) throw Error("no such character");
    character.moves = [
      ...character.moves,
      {
        ...req.body,
      },
    ];
    await character.save();
    res.status(200).json(character);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// update character info
router.patch("/:id", async (req, res) => {
  try {
    const character = await Character.findOne({
      label: req.params.id,
    });
    if (!character) throw Error("no such character");
    character.name = req.body.name || character.name;
    character.imgURL = req.body.imgURL || character.imgURL;
    character.save();
    res.status(200).json(character);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// update move info
router.patch("/move/:id/:move_id", async (req, res) => {
  try {
    const character = await Character.findOne({
      label: req.params.id,
    });
    if (!character) throw Error("no such character");
    const moves = character.moves;
    const move = moves
      .map((m) => {
        return m.command;
      })
      .indexOf(req.params.move_id);
    //console.log(req.params.move_id);
    console.log(move);
    if (move < 0) throw Error("no such move");

    character.moves[move] = {
      ...character.moves[move].toObject(),
      ...req.body,
    };
    //console.log(moves[move]);

    await character.save();
    res.status(200).json(character);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// delete a character
router.delete("/:id", async (req, res) => {
  try {
    const char = await Character.findOne({
      command: req.params.move_id,
    });
    if (!char) throw Error("character does not exist");
    const removed = await char.remove();
    if (!removed) throw Error("sorry boss idk what happened");
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
