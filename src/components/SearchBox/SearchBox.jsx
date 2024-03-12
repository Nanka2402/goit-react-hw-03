import css from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <form className={css.label}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </form>
  );
};
export default SearchBox;
