import { useParams, useNavigate } from "react-router-dom";
import kidsData from "../kidsData.json";
import "../App.css";

function KidDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const kid = kidsData.find((k) => k.id === Number(id));

  if (!kid) {
    return (
      <main className="app">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <p>Kid not found.</p>
      </main>
    );
  }

  return (
    <main className="app">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="detail-box">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${kid.name}`}
          alt={kid.name}
          className="detail-image"
        />

        <h1>{kid.name}</h1>
        <p>
          <strong>Age:</strong> {kid.age}
        </p>
        <p>
          <strong>Gender:</strong> {kid.gender}
        </p>
        <p>
          <strong>City:</strong> {kid.city}
        </p>
        <p>
          <strong>Zip Code:</strong> {kid.zipCode}
        </p>
        <p>
          <strong>About:</strong> {kid.about}
        </p>

        <strong>Hobbies:</strong>
        <ul>
          {kid.hobbies &&
            kid.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
      </div>
    </main>
  );
}

export default KidDetailPage;
