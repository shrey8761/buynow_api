const express = require("express");
const app = express();
const ProductsRoutes = require("./routes/ProductsRoutes");

// parse application/json
app.use(express.json());

app.use("/", ProductsRoutes);

module.exports = app;