function TouristCard({ place }) {
  // ป้องกันกรณี place ไม่มีข้อมูลหรือข้อมูลไม่ครบ
  if (!place) return null;

  const { title, description, url, tags, photos } = place;

  // ป้องกันกรณี photos หรือ tags ไม่มีข้อมูล
  const mainPhoto = photos && photos.length > 0 ? photos[0] : "";
  const smallPhotos = photos && photos.length > 1 ? photos.slice(1, 4) : [];
  const tagList = tags || [];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 mb-8 border-4 border-gray-300">
      <div className="flex flex-col md:flex-row">
        {/* รูปภาพหลัก (ด้านซ้าย) */}
        <div className="md:w-1/3 relative border-r-2 border-gray-200 min-h-[120px]">
          {mainPhoto ? (
            <img
              src={mainPhoto}
              alt={title}
              className="w-full h-32 md:h-full object-cover"
            />
          ) : (
            <div className="w-full h-32 md:h-full bg-gray-200 flex items-center justify-center text-gray-400">
              ไม่มีรูปภาพ
            </div>
          )}
          {/* Overlay สำหรับ tags */}
          <div className="absolute top-2 left-2">
            {tagList.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* เนื้อหาการ์ด (ด้านขวา) */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              {title || "ไม่มีชื่อสถานที่"}
            </h3>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {description || "ไม่มีรายละเอียด"}
            </p>

            {/* รูปภาพเล็ก 3 รูป */}
            <div className="flex gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
              {smallPhotos.length > 0 ? (
                smallPhotos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${title}-${i}`}
                    className="w-16 h-16 object-cover rounded-lg border-2 border-white shadow-sm"
                  />
                ))
              ) : (
                <span className="text-gray-400 text-sm">ไม่มีรูปภาพเพิ่มเติม</span>
              )}
            </div>

            {/* Tags */}
            <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-sm font-medium text-blue-800 mr-3">หมวดหมู่:</span>
              {tagList.length > 0 ? (
                tagList.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm text-blue-700 hover:text-blue-900 hover:underline cursor-pointer mr-3 px-2 py-1 bg-white rounded-full border border-blue-300"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">ไม่มีหมวดหมู่</span>
              )}
            </div>
            {/* ฟอร์มแสดงความคิดเห็น ถูกนำออก */}
          </div>

          {/* ปุ่มอ่านต่อ */}
          <div className="flex justify-end">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                อ่านต่อ
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristCard;  
