import { useState } from "react";
import ItemCard from "../components/ItemCard";

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
        onChange={e => setSearch(e.target.value)}
      />

      <div className="filters">
        {["all", "lost", "found"].map(type => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p>No matching items found.</p>
      ) : (
        filteredItems.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default Home;