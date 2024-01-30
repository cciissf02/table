import React, { useState, useEffect } from "react";
import useServerData from "../../hook/useServerData";
import Table from "../ui/table/table";
import Search from "../ui/search/search";

function Home() {
  const [rowItem, setRowItem] = useState("");
  const [rowIsClicked, setRowIsClicked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { contactData, isLoading } = useServerData("url");

  const resetSearch = () => {
    setSearchResults([]);
  };

  const getFilteredData = (data, query) => {
    if (!query) {
      return data;
    }
    return data.filter((el) => {
      const searchString = String(query).toLowerCase();
      return (
        el["firstName"].toLowerCase().includes(searchString) ||
        el["lastName"].toLowerCase().includes(searchString) ||
        el["maidenName"].toLowerCase().includes(searchString) ||
        String(el["age"]).toLowerCase().includes(searchString) ||
        el["gender"].toLowerCase().includes(searchString) ||
        String(el["phone"]).toLowerCase().includes(searchString) ||
        (el["address"] &&
          el["address"]["city"].toLowerCase().includes(searchString)) ||
        (el["address"] &&
          el["address"]["address"].toLowerCase().includes(searchString))
      );
    });
  };

  const onSearchSend = (text) => {
    setSearchResults(getFilteredData(contactData, text));
  };

  const detailRow = (row) => {
    setRowIsClicked(true);
    setRowItem(row);
  };

  useEffect(() => {
    document.title = "Table Task";
  }, []);

  return (
    <div>
      <Search onSearchSend={onSearchSend} resetSearch={resetSearch} />

      <Table
        contactData={searchResults.length > 0 ? searchResults : contactData}
        modalItemData={rowItem}
        detailRow={detailRow}
        isLoading={isLoading}
        onSearchSend={onSearchSend}
      />
    </div>
  );
}

export default Home;
