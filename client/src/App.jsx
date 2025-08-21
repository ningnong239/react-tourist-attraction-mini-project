import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TouristList from "./components/TouristList";
import mockPlaces from "./mockData";

function App() {
  const [query, setQuery] = useState("");

  console.log("mockPlaces:", mockPlaces); // Debug log

  const filteredPlaces = mockPlaces.filter((place) =>
    place.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log("filteredPlaces:", filteredPlaces); // Debug log

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-sky-600 mb-6">
        เที่ยวไหนดี
      </h1>

      {/* Search */}
      <SearchBar setQuery={setQuery} />

      {/* List */}
      <TouristList places={filteredPlaces} />
    </div>
  );
}

export default App; 
