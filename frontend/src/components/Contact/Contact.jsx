import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMsg("Mesajınız başarıyla iletildi!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Mesaj gönderilemedi", error);
      setSuccessMsg("Mesaj gönderilemedi!");
    }
  };

  return (
    <section className="contact">
    <div className="contact-top">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.193742225794!2d29.088381975350458!3d37.78549911154294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fb5238ca73b%3A0x159421cb8e9bdbd4!2sDenizli%20%C5%9Eehirleraras%C4%B1%20Otob%C3%BCs%20Terminali!5e0!3m2!1str!2str!4v1745308967252!5m2!1str!2str"
          width="100%"
          height="500"
          style={{ border: "0" }} // Burada, style özelliğini bir nesne olarak yazmalısınız.
          allowFullScreen={true} // 'allowFullScreen' özelliği için doğru yazım
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // referrerpolicy -> referrerPolicy olmalı.
        ></iframe> {/* iframe kapanışı doğru yapıldı */}
      </div>
    </div>

      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle İletişime Geçin</h4>
            <h2>İletişim Formu</h2>
            <p>Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz.</p>
          </div>

          <div className="contact-elements">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label>
                  Adınız<span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  E-posta<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  Konu<span>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  Mesajınız<span>*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-sm form-button" type="submit">
                Mesaj Gönder
              </button>

              {successMsg && <div className="success-msg">{successMsg}</div>}
            </form>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>LOS WEDDİNG</strong>
                  <p className="contact-street">
                    İzmir / Türkiye
                  </p>
                  <a href="tel:+905555555555">Telefon: +90 555 555 55 55</a>
                  <a href="mailto:info@los.com">
                    E-posta: info@los.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>Çalışma Saatleri</strong>
                  <p className="contact-date">Pzt - Cuma: 10:00 - 18:00</p>
                  <p>Hafta Sonu: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
