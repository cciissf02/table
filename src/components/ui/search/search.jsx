import React, { useState } from "react";
import "./searchstyle.css";

const Search = ({ onSearchSend }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}`
    );

    if (response.ok) {
      onSearchSend(query);
    } else {
      console.error(
        "Ошибка при выполнении поискового запроса. Статус:",
        response.status
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="searchcontainer">
        <input
          type="text"
          placeholder="Введите текст"
          className="input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="button">
          Найти
        </button>
      </div>
    </div>
  );
};

export default Search;
