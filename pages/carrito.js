import { useState, useEffect } from "react";

export default function Carrito() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("travelcart") || "[]");
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("travelcart", JSON.stringify(cart));
  }, [cart]);

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i} style={{ marginBottom: "1rem" }}>
              <strong>{item.name}</strong> - ${item.price}
              <button
                onClick={() => removeFromCart(i)}
                style={{ marginLeft: "1rem", cursor: "pointer" }}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
