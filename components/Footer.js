import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">TravelCart</h2>
          <p>Nuñez Angel</p>
          <p>Salta Capital, Argentina</p>
          <p>Tel: 387553618</p>
          <p>Email: nunezangel849@gmail.com</p>
        </div>
        <div className="flex gap-6 text-xl">
          <a
            href="https://instagram.com/nunezangel849"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/nunezangel849"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/nunezangel849"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-6 text-sm">
        &copy; {new Date().getFullYear()} TravelCart. Todos los derechos reservados.
      </p>
    </footer>
  );
}
