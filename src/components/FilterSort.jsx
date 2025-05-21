import styles from "../styles/FilterSort.module.css";

export default function FilterSort({ search, setSearch, sortBy, setSortBy }) {
  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Søg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Udvalg</option>
        <option value="author">Forfatter (A-Z)</option>
        <option value="length">Citatlængde</option>
      </select>
      
    </div>
  );
}
