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

    const searchString = query.toLowerCase();

    return data.filter((el) => {
      const { firstName, lastName, maidenName, age, gender, phone, address } =
        el;

      return (
        firstName.toLowerCase().includes(searchString) ||
        lastName.toLowerCase().includes(searchString) ||
        maidenName.toLowerCase().includes(searchString) ||
        String(age).toLowerCase().includes(searchString) ||
        gender.toLowerCase().includes(searchString) ||
        String(phone).toLowerCase().includes(searchString) ||
        (address && address.city.toLowerCase().includes(searchString)) ||
        (address && address.address.toLowerCase().includes(searchString))
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
