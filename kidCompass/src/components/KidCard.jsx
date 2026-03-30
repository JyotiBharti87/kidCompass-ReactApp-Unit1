import { useNavigate } from "react-router-dom";

function KidCard({ kid }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <span className="kid-badge">{kid.age} years old</span>

      <img
        src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${kid.name}`}
        alt={kid.name}
      />

      <h3>{kid.name}</h3>
      <p>City: {kid.city}</p>
      <p>Zip Code: {kid.zipCode}</p>

      <button onClick={() => navigate(`/kid/${kid.id}`)}>View Details</button>
    </div>
  );
}

export default KidCard;
