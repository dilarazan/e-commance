const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
  }
};

app.listen(port, () => {
  connect(); // Veritabanına bağlan
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});


// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

