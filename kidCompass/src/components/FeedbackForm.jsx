import { useState } from "react";
import "../App.css";

export default function FeedbackForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Feedback submitted!");
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
    setOpen(false); //form will close after submiit
  };
  return (
    <>
      <button className="feedback-btn" onClick={() => setOpen(true)}>
        Feedback
      </button>

      {open && (
        <div className="feedback-modal">
          <div className="card">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖️
            </button>

            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                Feedback:
                <textarea
                  maxLength="200"
                  name="feedback"
                  placeholder="Please enter your feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={5}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <div className="preview-feedback">
              <h2>Preview:</h2>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Feedback: {formData.feedback}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
