import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { Link } from "gatsby";
import { UIContext } from "../context/uiContext";

export default function BookList({ books }) {
  const { uiDispatch } = useContext(UIContext);
  const dispatch = useDispatch();
  const library = useSelector((state) => state.bookList.library);

  // console.log(library);

  function handleFindInLibrary(id) {
    const match = library.findIndex((book) => book.googleBooksId === id);
    if (match !== -1) {
      return true;
    }
  }

  function createLibraryObject(book) {
    console.log(book);
    const bookObject = {
      libraryId: Date.now(),
      googleBooksId: book.id,
      googleBooksData: {
        image: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
      },
      dateAdded: Date.now(),
      read: false,
      currentlyReading: false,
      rating: null,
      review: null,
      lists: ["library"],
    };
    return bookObject;
  }

  function handleAddToLibrary(book) {
    const libraryBook = createLibraryObject(book);
    uiDispatch({
      type: "TOGGLE_MODAL",
      payload: { type: "add", content: libraryBook },
    });
    dispatch(addToLibrary(libraryBook));
  }

  const buttonStyles =
    "text-white px-2 py-1 rounded-full absolute top-1.5 right-1 p-0 background-transparent cursor-pointer drop-shadow-lg hover:scale-105";

  function getButtonType(book) {
    if (handleFindInLibrary(book.id)) {
      return (
        <button className={buttonStyles}>
          <IoLibrary className="h-9 w-9" />
        </button>
      );
    } else {
      return (
        <button
          className={buttonStyles}
          onClick={() => handleAddToLibrary(book)}
        >
          <FaCirclePlus className="h-9 w-9" />
        </button>
      );
    }
  }

  useEffect(() => {
    console.log(library);
  }, [library]);

  const bookList = (
    <ul className="md:ml-20 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
      {books.map((book) => (
        <li key={book.id} className="grid auto-rows-max gap-1">
          <div className="h-72 sm:h-80 md:h-64 relative overflow-hidden ">
            {getButtonType(book)}
            <Link to={`/search/book-details/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
                className="object-fill w-full"
              />
            </Link>
          </div>

          <div className="self-start text-center">
            <Link to={`/search/book-details/${book.id}`}>
              <h3 className="font-semibold">{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors.join(", ")}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div>{books.length === 0 ? <p>No books found</p> : bookList}</div>;
}
