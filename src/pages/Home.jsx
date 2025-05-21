import { useEffect, useState } from "react";
import QuoteList from "../components/QuoteList";
import FilterSort from "../components/FilterSort";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch("https://dummyjson.com/quotes");
        const data = await res.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Eroare la fetch:", error);
      }
    }

    fetchQuotes();
  }, []);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(random);
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <button onClick={getRandomQuote} className="glassy-button">
          🎲 Tilfældigt citat
        </button>
      </div>

      {randomQuote && <QuoteCard quote={randomQuote} />}

      <FilterSort
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <QuoteList quotes={quotes} search={search} sortBy={sortBy} />
    </>
  );
}

