const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortenedUrl: String,
  urlCode: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("urls", UrlSchema);
