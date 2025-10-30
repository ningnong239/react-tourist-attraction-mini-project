import TouristCard from "./TouristCard";

function TouristList({ places }) {
	if (!places || places.length === 0) {
		return (
			<div className="text-center py-16 text-gray-500">
				<div className="text-8xl mb-6">🔍</div>
				<p className="text-3xl font-medium">ไม่พบทริปที่ตรงกับคำค้นหา</p>
				<p className="text-xl text-gray-400 mt-3">ลองค้นหาด้วยคำอื่นดูนะครับ</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-100 max-w-7xl mx-auto">
			{places.map((place, i) => (
				<TouristCard key={i} place={place} />
			))}
		</div>
	);
}

export default TouristList;
