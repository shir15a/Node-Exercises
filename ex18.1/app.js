const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const productsRouter = require("./routes/product.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/products", productsRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connect");
  });

app.listen(process.env.PORT || 8000, () => {
  console.log(`Application start at ${process.env.PORT || 8000}`);
})