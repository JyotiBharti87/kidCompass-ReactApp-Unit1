// Displays full details for a selected kid using (id)

import { useParams, useNavigate } from "react-router-dom";
import kidsData from "../KidsData.json";
import "../App.css";
import Button from "./Button";

function KidDetailPage() {
  const { id } = useParams(); // Get the kid ID from the URL
  const navigate = useNavigate();

  const kid = kidsData.find((k) => k.id === Number(id)); // Find the matching kid from JSON data

  if (!kid) {
    return (
      <main className="app">
        <Button
          text="⬅ Back"
          className="back-btn"
          onClick={() => navigate(-1)} // Navigate back to previous page
        />
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
          <strong>About:</strong> {kid.about}
        </p>
        <table className="kid-table">
          <tbody>
            <tr>
              <th>Age</th>
              <td>{kid.age}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{kid.gender}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{kid.city}</td>
            </tr>
            <tr>
              <th>Zip Code</th>
              <td>{kid.zipCode}</td>
            </tr>
          </tbody>
        </table>

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
