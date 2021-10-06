import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchList from "./components/SearchList";

const App = () => {
  const [char, setChar] = useState([]);
  const [keyword, setKeyword] = useState("");
  console.log(char);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setChar(data.results));
  }, [keyword]);

  const filterSearch = () => {
    const filterSearched = char.filter((item) => {
      if (keyword === "") {
        return item;
      }
      const newFilterData = item.name
        .toLowerCase()
        .includes(keyword.toLowerCase());
      return newFilterData;
    });
    setChar(filterSearched);
  };
  return (
    <div className="App">
      <SearchList
        keyword={keyword}
        setKeyword={setKeyword}
        filter={filterSearch}
      />
      <Search char={char} />
    </div>
  );
};

export default App;
