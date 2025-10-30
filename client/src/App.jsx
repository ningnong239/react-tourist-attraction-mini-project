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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10 pt-8">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            เที่ยวไหนดี
          </h1>
          <p className="text-gray-600 text-2xl">ค้นพบสถานที่ท่องเที่ยวสุดพิเศษ</p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <SearchBar setQuery={setQuery} />
        </div>

        {/* List */}
        <TouristList places={filteredPlaces} />
      </div>
    </div>
  );
}

export default App; 
