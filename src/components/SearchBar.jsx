export default function SearchBar() {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search destination..."
        className="form-control"
      />

      <button className="btn btn-warning">
        Search
      </button>

    </div>
  );
}