const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  prince: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, //é o id que o mongoose coloca automaticamente no banco
    ref: "User"
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
