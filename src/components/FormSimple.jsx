import { useState } from "react";

function FormSimple() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState({ class: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value); //abc
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the entered input value in an alert
    // alert("Form submitted with input: " + inputValue);
    setStatus({ class: "successfully", msg: "Data was send" });
    setInputValue("");
    setSubmitted(true);
    setTimeout(() => setStatus({ class: "", msg: "" }), 3000);

    // setStatus({ class: "error", msg: "Try again" });
  };

  return (
    <div className="form__simple">
      <h2 className="section_title">Subscribe to Our Newsletter</h2>
      <p>Get latest news, updates and deals directly mailed to your inbox</p>
      <form onSubmit={handleSubmit} className="d-flex f-column g2">
        <input
          type="text"
          placeholder="Your email address here"
          value={inputValue}
          disabled={submitted}
          onChange={handleChange} // Update the inputValue state on change
        />
        <button
          type="submit"
          className={`main_btn ${submitted ? "no-active" : ""}`}
          disabled={submitted}
        >
          Subscribe
        </button>
        <p className={status.class}>{status.msg}</p>
      </form>
    </div>
  );
}

export default FormSimple;
