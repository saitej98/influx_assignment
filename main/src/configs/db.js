const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://saiteja:saiteja123@cluster0.b1mxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
