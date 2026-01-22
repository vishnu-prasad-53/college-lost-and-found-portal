import { useState } from "react";
import ItemCard from "../components/ItemCard";

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

function Home() {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter(i => i.type === filter);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>College Lost & Found</h1>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("lost")}>Lost</button>
        <button onClick={() => setFilter("found")}>Found</button>
      </div>

      {filteredItems.length === 0 ? (
        <p>No items posted yet.</p>
      ) : (
        filteredItems.map(item => (
          <ItemCard key={item.id} item={item} onDelete={deleteItem} />
        ))
      )}
    </div>
  );
}

export default Home;