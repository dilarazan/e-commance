const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactMessage");

// POST: Yeni mesaj kaydet
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: "Mesaj kaydedildi" });
  } catch (err) {
    console.error("Mesaj kaydedilemedi:", err);
    res.status(500).json({ error: "Mesaj kaydedilemedi" });
  }
});

// GET: Mesajları getir
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: "Mesajlar alınamadı" });
  }
});

module.exports = router;
