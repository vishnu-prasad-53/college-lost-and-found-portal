import React from "react";
import { useState } from "react";

function AddItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item submitted!\n${JSON.stringify(form, null, 2)}`);
    setForm({ title: "", description: "", type: "lost", contact: "" });
  };

  return (
    <div className="container">
      <h2>Add Lost/Found Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <br />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <br />
        <input
          name="contact"
          placeholder="Contact Info"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
}

export default AddItem;