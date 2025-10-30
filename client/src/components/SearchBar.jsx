function SearchBar({ setQuery }) {
    return (
      <div className="flex flex-col mb-10 max-w-3xl mx-auto">
        <label className="font-semibold text-gray-700 mb-3 text-2xl">🔍 ค้นหาที่เที่ยว</label>
        <div className="relative">
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน... เช่น ทะเล ภูเขา วัด"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-md hover:shadow-lg bg-white"
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  