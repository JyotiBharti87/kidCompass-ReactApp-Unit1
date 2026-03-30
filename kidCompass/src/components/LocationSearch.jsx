function LocationSearch({ locationTerm, setLocationTerm }) {
  return (
    <div>
      <label htmlFor="locationSearch">Search by city or zip code: </label>
      <input
        id="locationSearch"
        type="text"
        value={locationTerm}
        onChange={(event) => setLocationTerm(event.target.value)}
        placeholder="Enter Chesterfield or 63011"
      />
    </div>
  );
}

export default LocationSearch;
