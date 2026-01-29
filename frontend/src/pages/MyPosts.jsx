import { useAuth } from "../context/AuthContext";
import ItemCard from "../components/ItemCard";

function MyPosts({ items, onDelete, onEdit }) {
  const { user } = useAuth();

  const myItems = items.filter(
    item => item.createdBy.id === user.id
  );

  return (
    <div className="container">
      <h2>My Posts</h2>

      {myItems.length === 0 ? (
        <p>You haven’t posted any items yet.</p>
      ) : (
        myItems.map(item => (
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

export default MyPosts;