const express = require("express");
var cors = require('cors')
const connect = require("./src/configs/db");

const productController=require("./src/controllers/product.controller")

const app = express();
app.use(cors())

app.use(express.json());
app.use("/products", productController);



const PORT=process.env.PORT || 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
