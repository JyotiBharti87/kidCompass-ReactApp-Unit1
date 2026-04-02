//display kid Detail
function KidDetail({ kid, onClose }) {
  if (!kid) {
    return null;
  }

  return (
    <div className="detail-box">
      <h2>{kid.name}</h2>
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

      <button onClick={onClose}>Close Details</button>
    </div>
  );
}

export default KidDetail;
