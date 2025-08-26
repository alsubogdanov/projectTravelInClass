import React, { useState } from "react";
import { Link } from "react-router-dom";

function FormMulti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState({ class: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name);
    console.log(e.target);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // updating a specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if checkbox false
    if (!formData.agree) {
      setStatus({ class: "error", msg: "Need agree with conditions" });
      setTimeout(() => setStatus({ class: "", msg: "" }), 3000);
      return;
    }

    //if checkbox checked
    setStatus({ class: "successfully", msg: "Data was send" });
    setFormData({
      name: "",
      email: "",
      message: "",
      agree: false,
    });
    setSubmitted(true);
    setTimeout(() => setStatus({ class: "", msg: "" }), 3000);
    console.log(formData);
  };

  return (
    <section className="contact mb7">
      <div className="container">
        <div className="contact__form d-flex g2">
          <div className="contact_desc w50">
            <h2 className="section_title accent mb1">Get In Touch</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="contact__desc-data mt2">
              <div className="contact__desc-item  d-flex g1 mb1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                  ></path>
                </svg>
                <p>+1650-243-0000</p>
              </div>
              <div className="contact__desc-item d-flex g1 mb1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                  ></path>
                </svg>
                <p>info@yourcompany.com</p>
              </div>
              <div className="contact__desc-item d-flex g1 mb1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                  ></path>
                </svg>
                <p>North Melbourne VIC 3051, Australia</p>
              </div>
            </div>
          </div>
          <div className="contact__form-full w50">
            <h2 className="section_title accent mb1">Send A Message</h2>
            <form onSubmit={handleSubmit} className="form__full">
              <div className="d-flex g2 mb1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              />
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree">
                I agree all the <Link to="#">Terms and Conditions</Link>
              </label>
              <button
                type="submit"
                className="main_btn w100 mt1"
                disabled={submitted}
              >
                Submit
              </button>
              <p className={`${status.class} mt2 msg-status`}>{status.msg}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormMulti;
