import React, { createContext, useState, useContext, useEffect } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState({
    bookSearch: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Reset the search input if pathname doesn't start with /search/
    const pathname = window.location.pathname;
    console.log(pathname);
    if (!pathname.startsWith("/search/")) {
      setSearchInput({ bookSearch: "" });
      setSearchResults([]);
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, searchResults, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for consuming the context
export const useSearch = () => {
  return useContext(SearchContext);
};
