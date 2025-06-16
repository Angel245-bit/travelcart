import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [tours, setTours] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchTours();

    // Cargar carrito desde localStorage al iniciar
    const savedCart = JSON.parse(localStorage.getItem("travelcart") || "[]");
    setCart(savedCart);
  }, []);

  async function fetchTours() {
    const { data, error } = await supabase.from("tours").select("*");
    if (error) {
      console.error("Error al cargar tours:", error);
    } else {
      setTours(data);
    }
  }

  function addToCart(tour) {
    const newCart = [...cart, tour];
    setCart(newCart);
    localStorage.setItem("travelcart", JSON.stringify(newCart));
  }

  return (
    <div>
      <header style={{ padding: "1rem", backgroundColor: "#0070f3", color: "white" }}>
        <h1>TravelCart - Paquetes turísticos</h1>
      </header>

      <main style={{ padding: "1rem" }}>
        <h2>Paquetes disponibles</h2>
        <div className="tours-container">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img
                src={tour.image_url}
                alt={tour.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{tour.name}</h3>
              <p>{tour.description}</p>
              <p><b>Precio:</b> ${tour.price}</p>
              <button onClick={() => addToCart(tour)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0070f3", color: "white", padding: "1rem", textAlign: "center", marginTop: "2rem" }}>
      <p>Contacto: Nuñez Angel | Tel: 387553618 | Email: nunezangel849@gmail.com | Salta Capital, Argentina</p>
      <p>
        Seguinos en:&nbsp;
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "1rem" }}>
          Facebook
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "1rem" }}>
          Instagram
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          Twitter
        </a>
      </p>
    </footer>
  );
}
