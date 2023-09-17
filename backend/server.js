import express from "express";
import dotenv from "dotenv";

dotenv.config();

import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
