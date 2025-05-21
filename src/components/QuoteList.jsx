import QuoteCard from "./QuoteCard";

export default function QuoteList({ quotes, search, sortBy }) {
  const filtered = quotes
    .filter(
      (q) =>
        q.quote.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "author") return a.author.localeCompare(b.author);
      if (sortBy === "length") return a.quote.length - b.quote.length;
      return 0;
    });

  return (
    <div>
      {filtered.map((q) => (
        <QuoteCard key={q.id} quote={q} />
      ))}
    </div>
  );
}
