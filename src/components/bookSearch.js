import * as React from "react";
import CommonForm from "./commonForm";
import { bookSearchControls } from "../config/bookListConfig";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToRead } from "../store/slices/bookListSlice";
import { BsSearch } from "react-icons/bs";

const initialState = {
  bookSearch: "",
};

const key = process.env.GOOGLE_API_KEY;

export default function BookSearch() {
  const [searchInput, setSearchInput] = useState(initialState);
  const [bookResults, setBookResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
    // console.log(url);

    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      if (result) {
        console.log(result.items.volumeInfo);
        setBookResults(result.items);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleAddBook(bookData) {
    // console.log(bookData);
    const book = {
      id: bookData.id,
      title: bookData.volumeInfo.title,
    };
    dispatch(addToRead(book));
  }

  return (
    <div>
      <CommonForm
        formControls={bookSearchControls}
        formData={searchInput}
        setFormData={handleSearchInput}
        onSubmit={handleSubmit}
        btnIcon={<BsSearch />}
      />
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          bookResults.map((book) => {
            const { title } = book.volumeInfo;
            const { thumbnail } = book.volumeInfo.imageLinks;
            return (
              <li key={book.id}>
                {/* <img src={thumbnail} alt="book cover" /> */}
                {title}
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-full"
                  onClick={() => handleAddBook(book)}
                >
                  add book
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
