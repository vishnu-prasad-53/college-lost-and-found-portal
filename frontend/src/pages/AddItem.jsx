import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function AddItem({ onAdd, editingItem, onUpdate, clearEdit }) {
  const { user } = useAuth();

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    contact: "",
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    }
  }, [editingItem]);

  const submit = (e) => {
    e.preventDefault();

    if (editingItem) {
      onUpdate(form);
      clearEdit();
    } else {
      onAdd({
        ...form,
        id: Date.now().toString(),
        createdBy: user,
        createdAt: Date.now(),
      });
    }

    setForm({
      title: "",
      description: "",
      type: "lost",
      contact: "",
    });
  };

  return (
    <div className="container">
      <h2>{editingItem ? "Edit Item" : "Add Item"}</h2>

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

        <button>{editingItem ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default AddItem;