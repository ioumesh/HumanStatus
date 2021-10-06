import React from "react";
const SearchList = ({ keyword, setKeyword, filter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    filter();
  };
  return (
    <>
      <div className="search">
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            id="search-box"
            placeholder="search by name"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">Search</button>
          <button onClick={() => setKeyword("")} className="clear-search">
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchList;
