import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function QuoteDetail() {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch(`https://dummyjson.com/quotes/${id}`);
        const data = await res.json();
        setQuote(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuote();
  }, [id]);

  if (!quote) return <p>Se încarcă...</p>;

  return (
    <div>
      <h2>Detalii citat</h2>
      <blockquote>"{quote.quote}"</blockquote>
      <p>
        <strong>- {quote.author}</strong>
      </p>
    </div>
  );
}

<button
  onClick={() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.find((q) => q.id === quote.id);
    if (!exists) {
      stored.push(quote);
      localStorage.setItem("favorites", JSON.stringify(stored));
      alert("Adăugat la favorite!");
    } else {
      alert("Deja în favorite!");
    }
  }}
>
  Adaugă la favorite
</button>;
