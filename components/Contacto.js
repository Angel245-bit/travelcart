import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito(null);

    const { data, error } = await supabase
      .from("contactos")
      .insert([{ nombre: formData.nombre, email: formData.email, mensaje: formData.mensaje }]);

    if (error) {
      setExito(false);
    } else {
      setExito(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
    setEnviando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        rows="4"
        value={formData.mensaje}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
      />
      <button
        type="submit"
        disabled={enviando}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {enviando ? "Enviando..." : "Enviar"}
      </button>

      {exito === true && (
        <p className="text-green-600 mt-2 text-center">¡Mensaje enviado con éxito!</p>
      )}
      {exito === false && (
        <p className="text-red-600 mt-2 text-center">Error al enviar, intentá nuevamente.</p>
      )}
    </form>
  );
}
