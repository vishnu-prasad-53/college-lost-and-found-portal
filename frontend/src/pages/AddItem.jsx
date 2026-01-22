import { useState } from "react";

function AddItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    contact: "",
  });

  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ title: "", description: "", type: "lost", contact: "" });

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="container">
      <h2>Report {form.type === "lost" ? "Lost" : "Found"} Item</h2>

      {success && <p className="success">Item posted successfully!</p>}

      <form onSubmit={submit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          required
        />

        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <input
          placeholder="Contact info"
          value={form.contact}
          onChange={e => setForm({ ...form, contact: e.target.value })}
          required
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddItem;