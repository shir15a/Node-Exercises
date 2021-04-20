const express = require("express");
const bodyParser = require("body-parser");

const workersRoute = require("./Route/Worker");
const roomsRoute = require("./Route/Room");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/workers", workersRoute);
app.use("/api/rooms", roomsRoute);

app.listen(port, () => {
  console.log(`appleication start at ${port}`);
});