import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function timeAgo(timestamp) {
  const days = Math.floor((Date.now() - timestamp) / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

function ItemCard({ item, onDelete, onEdit }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <span className={`badge ${item.type}`}>
        {item.type.toUpperCase()}
      </span>

      <p>{item.description}</p>
      <p><strong>Contact:</strong> {item.contact}</p>

      <div className="actions">
        <a href={item.contact.includes("@")
          ? `mailto:${item.contact}`
          : `tel:${item.contact}`}
        >
          <button>Contact</button>
        </a>

        {user?.id === item.createdBy.id && (
          <>
            <button onClick={() => setConfirm(true)}>Delete</button>

            {confirm && (
              <div className="modal-backdrop">
                <div className="modal">
                  <p>Are you sure?</p>
                  <div className="actions">
                    <button
                      onClick={() => {
                        onEdit(item);
                        navigate("/add");
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => onDelete(item.id)}>Yes</button>
                    <button onClick={() => setConfirm(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <p className="date">Posted {timeAgo(item.createdAt)}</p>
    </div>
  );
}

export default ItemCard;