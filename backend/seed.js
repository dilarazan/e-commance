// backend/seed.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/Product.js"; // Ürün modelin bu olmalı

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("MongoDB bağlantısı başarılı");

    await Product.deleteMany(); // Tüm ürünleri sil (temiz başlamak için)
    await Product.insertMany(products); // Yeni ürünleri ekle

    console.log("Ürünler başarıyla eklendi");
    process.exit();
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
    process.exit(1);
  });
