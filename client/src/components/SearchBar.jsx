function SearchBar({ setQuery }) {
    return (
      <div className="flex flex-col mb-6">
        <label className="font-medium mb-1">ค้นหาที่เที่ยว</label>
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={(e) => setQuery(e.target.value)}
          className="border-b border-gray-400 p-2 focus:outline-none"
        />
      </div>
    );
  }
  
  export default SearchBar;
  