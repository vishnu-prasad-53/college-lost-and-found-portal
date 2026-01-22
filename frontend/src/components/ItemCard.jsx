import { useAuth } from "../context/AuthContext";

function ItemCard({ item, onDelete }) {
  const { user } = useAuth();

  return (
    <div className="card">
      <h3>{item.title}</h3>

      <span className={`badge ${item.type}`}>
        {item.type.toUpperCase()}
      </span>

      <p>{item.description}</p>
      <p><strong>Contact:</strong> {item.contact}</p>

      <div className="actions">
        <button>Contact</button>

        {user?.id === item.createdBy.id && (
          <button onClick={() => onDelete(item.id)}>Delete</button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;