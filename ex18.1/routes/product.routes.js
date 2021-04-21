const express = require("express");
const router = express.Router();
const productControler = require("../controllers/product.contorller");

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
  })
  .put("/update/:id", (req, res) => {
    productControler.updateActive(req, res);
  })
  .delete("/:id", (req,res)=>{
    productControler.deleteById(req,res)
  })
  .delete("/", productControler.deleteAll);

module.exports = router;

// {
//   "name": "iphone XS MAXxx",
//   "category": "phones",
//   "isActive": true,
//   "details": {
//       "description": "iPhone 12 Proo Max",
//       "price": 7000,
//       "images": [
//           "https://www.idigital.co.il/files/iphone12/iphone12/iPhone_12_Lineup_Screen__WWEN.jpg",
//           "https://www.idigital.co.il/files/iphone12/iphone12pro-max/iPhone_12_Pro_Max_Lineup_Screen__WWEN.jpg"
//       ],
//       "phone": "0564345654"
//   }
// }