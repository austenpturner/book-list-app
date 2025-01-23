import React, { useContext } from "react";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { extractUniqueCategories } from "../util/extractUniqueCategories";
import { IoLibrary } from "react-icons/io5";
import { UIContext } from "../context/uiContext";

export default function BookDetails({ book, location }) {
  const dispatch = useDispatch();
  const { uiDispatch } = useContext(UIContext);
  const library = useSelector((state) => state.bookList.library);

  // console.log("book:", book);
  console.log("location:", location);

  function normalizeBookDetails(book, location) {
    if (location === "library") {
      return {
        image: book.googleBooksData.image,
        title: book.googleBooksData.title,
        authors: book.googleBooksData.authors,
      };
    } else if (location === "search") {
      return {
        image: book.volumeInfo?.imageLinks?.thumbnail || "No image available",
        title: book.volumeInfo?.title || "No title available",
        authors: book.volumeInfo?.authors || ["Unknown author"],
        categories: book.volumeInfo?.categories || [],
        description: book.volumeInfo?.description || "No description found",
      };
    }
    return {};
  }

  const bookDetails = normalizeBookDetails(book, location);

  // Utility to sanitize the description
  const getDescription = () => {
    return DOMPurify.sanitize(
      bookDetails.description || "No description found"
    );
  };

  function createLibraryObject(book) {
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

  function handleFindInLibrary(id) {
    return library.some((item) => item.googleBooksId === id);
  }

  function handleAddToLibrary(book) {
    uiDispatch({ type: "TOGGLE_MODAL", payload: { type: "add" } });
    dispatch(addToLibrary(createLibraryObject(book)));
  }

  const buttonStyles =
    "text-white absolute top-1.5 right-1 p-0 cursor-pointer drop-shadow-lg hover:scale-105";

  function getButtonType(book) {
    const id = location === "library" ? book.googleBooksId : book.id;
    const isInLibrary = handleFindInLibrary(id);

    return isInLibrary ? (
      <button className={buttonStyles}>
        <IoLibrary className="h-9 w-9" />
      </button>
    ) : (
      <button className={buttonStyles} onClick={() => handleAddToLibrary(book)}>
        <FaCirclePlus className="h-9 w-9" />
      </button>
    );
  }

  return (
    <div className="p-14 mx-auto grid grid-cols-3 gap-6 max-w-5xl">
      <div className="relative col-span-1">
        {getButtonType(book)}
        <img src={bookDetails.image} alt="book cover" className="w-full" />
      </div>
      <div className="col-span-2">
        <div className="mb-5">
          <h3 className="text-3xl font-semibold">{bookDetails.title}</h3>
          <p className="text-sm">
            {`by `}
            {bookDetails.authors.map((author, index) => (
              <span key={index}>
                {author}
                {index < bookDetails.authors.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
        {bookDetails.categories && (
          <div className="mb-5">
            <h5 className="mb-2.5 text-lg font-light">Categories:</h5>
            <ul className="flex flex-wrap gap-1.5">
              {extractUniqueCategories(bookDetails.categories).map(
                (category, index) => (
                  <li
                    key={index}
                    className="text-sm text-white bg-sky-400 p-1.5 rounded-md mb-1"
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {bookDetails.categories && (
          <div>
            <h5 className="mb-2.5 text-lg font-light">Description:</h5>
            <p
              className="text-base leading-6"
              dangerouslySetInnerHTML={{ __html: getDescription() }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
