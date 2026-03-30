import KidCard from "./KidCard";

function KidList({ kids }) {
  if (kids.length === 0) {
    return <p>No kids match your filters.</p>;
  }

  return (
    <div className="card-grid">
      {kids.map((kid) => (
        <KidCard key={kid.id} kid={kid} />
      ))}
    </div>
  );
}

export default KidList;
