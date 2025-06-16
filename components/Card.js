export default function Card({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={tour.image_url}
        alt={tour.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm">{tour.description}</p>
      </div>
    </div>
  );
}
