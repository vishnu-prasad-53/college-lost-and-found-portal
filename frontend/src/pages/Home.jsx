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

function Home({ items, onDelete, onEdit }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item => {
    const matchesFilter =
      filter === "all" || item.type === filter;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      <h1>College Lost & Found</h1>

      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {["all", "lost", "found"].map(t => (
          <button
            key={t}
            className={filter === t ? "active" : ""}
            onClick={() => setFilter(t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {filteredItems.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}


export default Home;