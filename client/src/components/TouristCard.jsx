function TouristCard({ place }) {
  // ป้องกันกรณี place ไม่มีข้อมูลหรือข้อมูลไม่ครบ
  if (!place) return null;

  const { title, description, url, tags, photos } = place;

  // ป้องกันกรณี photos หรือ tags ไม่มีข้อมูล
  const mainPhoto = photos && photos.length > 0 ? photos[0] : "";
  const smallPhotos = photos && photos.length > 1 ? photos.slice(1, 4) : [];
  const tagList = tags || [];

  // สร้างอาร์เรย์รูปภาพทั้งหมด (รูปหลัก + รูปเล็ก)
  const allPhotos = photos && photos.length > 0 ? photos.slice(0, 4) : [];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* รูปภาพทั้งหมดแนวนอน (ด้านบน) */}
      <div className="relative">
        <div className="flex gap-1 h-32 overflow-hidden">
          {allPhotos.length > 0 ? (
            allPhotos.map((photo, i) => (
              <div key={i} className="relative group flex-1 overflow-hidden">
                <img
                  src={photo}
                  alt={`${title}-${i}`}
                  className="w-full h-full object-cover"
                />
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                )}
              </div>
            ))
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
              ไม่มีรูปภาพ
            </div>
          )}
        </div>
        
        {/* Overlay สำหรับ tags */}
        <div className="absolute top-2 left-2">
          {tagList.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-1 py-0.5 rounded-full mr-1 mb-1 shadow-lg backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* เนื้อหาการ์ด (ด้านล่าง) */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50">
        <div className="flex-grow">
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 pb-2 border-b-2 border-gray-200">
            {title || "ไม่มีชื่อสถานที่"}
          </h3>
          
          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
            {description || "ไม่มีรายละเอียด"}
          </p>

          {/* Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tagList.length > 0 ? (
                tagList.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs text-blue-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 cursor-pointer px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-xs">ไม่มีหมวดหมู่</span>
              )}
            </div>
          </div>
        </div>

        {/* ปุ่มอ่านต่อ */}
        <div className="flex justify-center mt-4 pt-4 border-t border-gray-200">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md w-full justify-center"
            >
              <span>อ่านต่อ</span>
              <span>→</span>
            </a>
          
          ) : null}
        </div>
        <div className="w-full h-8 bg-white"></div>
      </div>
    </div>
  );
}

export default TouristCard;  
