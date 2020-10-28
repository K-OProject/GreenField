const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Korfi");

module.exports.db = mongoose.connection;
