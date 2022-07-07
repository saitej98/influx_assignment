const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
   
    code: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("product",productSchema)