const express = require("express");
const router = express.Router();
const ProductsController = require("./../controller/ProductsController");

router.get("/list", ProductsController.list);
// router.post("/add", ProductController.add);
// router.delete("/delete", ProductController.delete);

module.exports = router;

