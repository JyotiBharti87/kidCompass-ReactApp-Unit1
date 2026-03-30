import { useState } from "react";
import kidsData from "../kidsData.json";
import LocationSearch from "./LocationSearch";
import FilterBar from "./FilterBar";
import KidList from "./KidList";
import "../App.css";

function BrowsePage() {
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedAge, setSelectedAge] = useState("All");

  const filteredKids = kidsData.filter((kid) => {
    const matchesLocation =
      kid.city.toLowerCase().includes(locationTerm.toLowerCase()) ||
      kid.zipCode.includes(locationTerm);

    let matchesAge = true;

    if (selectedAge === "2-5") {
      matchesAge = kid.age >= 2 && kid.age <= 5;
    } else if (selectedAge === "6-9") {
      matchesAge = kid.age >= 6 && kid.age <= 9;
    } else if (selectedAge === "10-14") {
      matchesAge = kid.age >= 10 && kid.age <= 14;
    }

    return matchesLocation && matchesAge;
  });

  return (
    <main className="app">
      <div className="logo-header">
        <div className="logo-circle">🧭</div>
        <div className="logo-text">
          <span>KidCompass</span>
          <span>Find friends, families, and fun nearby</span>
        </div>
      </div>

      <p>Search kids by city or zip code and filter by age.</p>

      <div className="controls">
        <LocationSearch
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
        />

        <FilterBar selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
      </div>

      <KidList kids={filteredKids} />
    </main>
  );
}

export default BrowsePage;
