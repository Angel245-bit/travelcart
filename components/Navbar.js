import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 cursor-pointer">
          TravelCart
        </h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/">
              <span className="hover:text-blue-500 transition">Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="#tours">
              <span className="hover:text-blue-500 transition">Destinos</span>
            </Link>
          </li>
          <li>
            <Link href="#contacto">
              <span className="hover:text-blue-500 transition">Contacto</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

