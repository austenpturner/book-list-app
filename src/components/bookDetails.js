import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { normalizeBookDetails, createLibraryObject } from "../util/bookUtils";
import { IoLibrary } from "react-icons/io5";
import { UIContext } from "../context/uiContext";
import CategoriesList from "./categoriesList";
import BookDescription from "./bookDescription";

export default function BookDetails({ book, location }) {
  const dispatch = useDispatch();
  const { uiDispatch } = useContext(UIContext);
  const library = useSelector((state) => state.bookList.library);
  const bookDetails = normalizeBookDetails(book, location);

  function handleFindInLibrary(id) {
    return library.some((item) => item.googleBooksId === id);
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
    "text-white absolute top-1.5 right-1 p-0 cursor-pointer drop-shadow-lg hover:scale-105";

  function getButtonType(book, location) {
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
        {getButtonType(book, location)}
        <img src={bookDetails.image} alt="book cover" className="w-full" />
      </div>
      <div className="col-span-2">
        <div className="mb-5">
          <h3 className="text-3xl font-semibold">{bookDetails.title}</h3>
          <p>{bookDetails.authors.join(", ")}</p>
        </div>
        {bookDetails.categories && (
          <CategoriesList categories={bookDetails.categories} />
        )}
        {bookDetails.description && (
          <BookDescription description={bookDetails.description} />
        )}
      </div>
    </div>
  );
}
