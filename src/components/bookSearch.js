import React, { useContext, useState } from "react";
import CommonForm from "./commonForm";
import { bookSearchControls } from "../config/bookListConfig";
import { BsSearch } from "react-icons/bs";
import { UIContext } from "../context/uiContext";
import BookList from "./bookList";
import { useSearch } from "../context/searchContext";

const key = process.env.GOOGLE_API_KEY;

export default function BookSearch() {
  // const [searchInput, setSearchInput] = useState(initialState);
  // const [bookResults, setBookResults] = useState([]);
  const { searchInput, setSearchInput, searchResults, setSearchResults } =
    useSearch();
  const [loading, setLoading] = useState(false);
  const { uiDispatch } = useContext(UIContext);

  function handleSearchInput(e) {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(searchInput);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput.bookSearch}&key=${key}`;

    setLoading(true);
    uiDispatch({ type: "BOOK_SEARCH_SUBMITTED", payload: true });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      if (result) {
        // console.log(result.items);
        const filteredBooks = result.items.filter(
          (item) =>
            item.volumeInfo.authors &&
            item.volumeInfo.authors.length > 0 &&
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.thumbnail
        );
        // console.log(filteredBooks);
        setSearchResults(filteredBooks);
        // setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   console.log("results:", searchResults);
  //   console.log("search input:", searchInput);
  // }, [searchResults, searchInput]);

  const bookList = (
    <ul>{loading ? <p>Loading...</p> : <BookList books={searchResults} />}</ul>
  );

  return (
    <div>
      <CommonForm
        formControls={bookSearchControls}
        formData={searchInput}
        setFormData={handleSearchInput}
        onSubmit={handleSubmit}
        btnIcon={<BsSearch />}
      />
      {searchResults.length > 0 && bookList}
    </div>
  );
}
