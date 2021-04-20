const express = require("express");
const router = express.Router();
const productControler = require("./../controllers/product.contorller");

router
  .get("/", (req, res) => {
    productControler.getAll(req, res);
  })
  .get("/active", (req, res) => {
    productControler.allActive(req, res);
  })
  .get("/range", (req, res) => {
    productControler.specificPriceRange(req, res);
  })
  .get("/:id", (req, res) => {
    productControler.getById(req, res);
  })
  .post("/", (req, res) => {
    productControler.create(req, res);
  });

module.exports = router;

