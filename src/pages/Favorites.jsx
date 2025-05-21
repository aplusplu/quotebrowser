import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2 style={{ marginBottom: "2rem" }}>📌 Citate Favorite</h2>
      {favorites.length === 0 ? (
        <p>Nu ai adăugat încă niciun citat la favorite.</p>
      ) : (
        favorites.map((quote) => <QuoteCard key={quote.id} quote={quote} />)
      )}
    </div>
  );
}
