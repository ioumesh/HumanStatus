import React from "react";
import ProfileCard from "./ProfileCard";

const Search = ({ char }) => {
  return (
    <>
      <div>
        <h2>Total Human - {char.length}</h2>
        <div>{char && char.map((item) => <ProfileCard key={item.id} item={item}/>)}</div>
      </div>
    </>
  );
};

export default Search;
