import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/QuoteCard.module.css";

const bgClasses = [
  styles.bg1,
  styles.bg2,
  styles.bg3,
  styles.bg4,
  styles.bg5,
  styles.bg6,
];

export default function QuoteCard({ quote }) {
  const randomIndex = quote.id % bgClasses.length;
  const bgClass = bgClasses[randomIndex];

  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    return stored.some((q) => q.id === quote.id);
  });

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updated = stored.filter((q) => q.id !== quote.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      stored.push(quote);
      localStorage.setItem("favorites", JSON.stringify(stored));
      setIsFavorite(true);
    }
  };

  return (
    <div className={`${styles.card} ${bgClass}`}>
      <p className={styles.quote}>"{quote.quote}"</p>
      <p className={styles.author}>
        <strong>- {quote.author}</strong>
      </p>

      {/* Buton pentru copiere */}
      <button onClick={copyToClipboard} className="glassy-button">
        {copied ? "✅ Copiat!" : "📋 Copiază"}
      </button>

      {/* Buton pentru favorite */}
      <button onClick={handleFavorite} className="glassy-button">
        {isFavorite ? "💔 Fjern fra favoritter" : "❤️ Tiløj til favoritter"}
      </button>

      {/* Link spre detalii */}
      <Link className={styles.link} to={`/quote/${quote.id}`}>
        Vezi detalii
      </Link>
    </div>
  );
}
