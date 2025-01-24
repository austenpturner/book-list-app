import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { Link } from "gatsby";

export default function LibraryList() {
  //   const dispatch = useDispatch();
  const library = useSelector((state) => state.bookList.library);

  //   function handleRemoveBook(id) {
  //     dispatch(removeFromLibrary(id));
  //   }

  const buttonStyles =
    "text-white px-2 py-1 rounded-full absolute top-1.5 right-1 p-0 background-transparent cursor-pointer drop-shadow-lg hover:scale-105";

  function getButtonType(book) {
    if (book.read) {
      return (
        <button className={buttonStyles}>
          <MdOutlineCheckBox className="h-9 w-9" />
        </button>
      );
    } else if (book.currentlyReading) {
      return (
        <button className={buttonStyles}>
          <GoBook className="h-9 w-9" />
        </button>
      );
    } else {
      return (
        <button className={buttonStyles}>
          <MdCheckBoxOutlineBlank className="h-9 w-9" />
        </button>
      );
    }
  }

  useEffect(() => {
    console.log(library);
  }, [library]);

  const bookList = (
    <ul className="md:ml-20 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
      {library.map((book) => (
        <li key={book.libraryId} className="grid auto-rows-max gap-1">
          <div className="h-72 sm:h-80 md:h-64 relative overflow-hidden ">
            {getButtonType(book)}
            <Link to={`/library/book-details/${book.libraryId}`}>
              <img
                src={book.googleBooksData.image}
                alt="book cover"
                className="object-fill w-full"
              />
            </Link>
          </div>

          <div className="self-start text-center">
            <Link to={`/library/book-details/${book.libraryId}`}>
              <h3 className="font-semibold">{book.googleBooksData.title}</h3>
              <p>{book.googleBooksData.authors.join(", ")}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );

  return <div>{library.length === 0 ? <p>No books found</p> : bookList}</div>;
}
