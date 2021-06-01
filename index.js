const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const characterRoutes = require("./routes/api/characters");

const app = express();

// body parser
//app.use(bodyParser.json({ extended: true }));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/characters", characterRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
