function TouristCard({ place }) {
	if (!place) return null;

	const { title, description, url, tags, photos } = place;
	const mainPhoto = photos && photos.length > 0 ? photos[0] : "";
	const tagList = tags || [];

	return (
		<div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition p-3 flex flex-col">
			<div className="w-full h-28 rounded-md overflow-hidden bg-gray-100 mb-3">
				{mainPhoto ? (
					<img src={mainPhoto} alt={title} className="w-full h-full object-cover" />
				) : (
					<div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">ไม่มีรูป</div>
				)}
			</div>

			<div className="flex-1">
				<h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{title || "ไม่มีชื่อสถานที่"}</h3>
				<p className="mt-1 text-xs text-gray-600 line-clamp-2">{description || ""}</p>
				{tagList.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1">
						{tagList.slice(0, 3).map((tag, i) => (
							<span key={i} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full border border-gray-200">
								{tag}
							</span>
						))}
					</div>
				)}
			</div>

			{url ? (
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-3 inline-flex items-center justify-center text-xs font-medium text-blue-600 border border-blue-300 hover:bg-blue-50 rounded-md px-3 py-1"
				>
					อ่านต่อ
				</a>
			) : null}
		</div>
	);
}

export default TouristCard;  
