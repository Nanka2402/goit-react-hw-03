const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Find contacts by name"
    />
  );
};
export default SearchBox;
