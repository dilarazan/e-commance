import { useState } from "react";
import PropTypes from "prop-types";
import "./Dialog.css";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
  const [email, setEmail] = useState("");
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleCheckboxChange = (event) => {
    setDontShowAgain(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    if (dontShowAgain) {
      localStorage.setItem("dialog", JSON.stringify(true));
    }

    setIsDialogShow(false);
  };

  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/img/mega-menu.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>NEWSLETTER</h3>
            </div>
            <p className="popup-text">
              Sign up to our newsletter and get exclusive deals you won’t find anywhere else!
            </p>
            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Email Address Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                SUBSCRIBE
              </button>
              <label>
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={handleCheckboxChange}
                />
                <span>Don’t show this popup again</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={() => setIsDialogShow(false)}></div>
    </div>
  );
};

Dialog.propTypes = {
  isDialogShow: PropTypes.bool,
  setIsDialogShow: PropTypes.func,
};

export default Dialog;
