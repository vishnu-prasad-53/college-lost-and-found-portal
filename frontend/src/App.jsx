import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyPosts from "./pages/MyPosts";
import ProtectedRoute from "./components/ProtectedRoute";

const DUMMY_ITEMS = [
  {
    id: "1",
    title: "Wallet",
    description: "Black leather wallet near library",
    type: "lost",
    contact: "1234567890",
    createdBy: { id: "1", name: "Demo User" },
    createdAt: Date.now(),
  },
];

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => setItems([...items, item]);

  const deleteItem = (id) =>
    setItems(items.filter(item => item.id !== id));

  const updateItem = (updated) =>
    setItems(items.map(i => i.id === updated.id ? updated : i));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            items={items}
            onDelete={deleteItem}
            onEdit={setEditingItem}
          />
        } />

        <Route path="/add" element={
          <ProtectedRoute>
            <AddItem
              onAdd={addItem}
              editingItem={editingItem}
              onUpdate={updateItem}
            />
          </ProtectedRoute>
        } />

        <Route path="/myposts" element={
          <ProtectedRoute>
            <MyPosts items={items} onDelete={deleteItem} />
          </ProtectedRoute>
        } />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;