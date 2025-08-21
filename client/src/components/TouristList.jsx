import TouristCard from "./TouristCard";

function TouristList({ places }) {
	if (!places || places.length === 0) {
		return (
			<div className="text-center py-10 text-gray-500">ไม่พบทริปที่ตรงกับคำค้นหา</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{places.map((place, i) => (
				<TouristCard key={i} place={place} />
			))}
		</div>
	);
}

export default TouristList;
