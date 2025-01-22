import React from "react";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { addToLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";

export default function BookDetails({ book }) {
  const dispatch = useDispatch();

  function handleAddToLibrary() {
    dispatch(addToLibrary(book));
    console.log("added to library");
  }

  function getDescription() {
    if (!book.volumeInfo.description) {
      return "No description found";
    } else {
      const sanitizedDescription = DOMPurify.sanitize(
        book.volumeInfo.description
      );
      return sanitizedDescription;
    }
  }

  function getButtonStyles(type) {
    const typeStyles = [
      "text-white",
      "px-2",
      "py-1",
      "rounded-full",
      "absolute",
      "top-1.5",
      "right-1",
      "p-0",
      "background-transparent",
      "cursor-pointer",
      "drop-shadow-lg",
      "hover:scale-105",
    ];
    // switch (type) {
    //   case "library":
    //     typeStyles.push("bg-red-500");
    //     break;
    //   case "search":
    //     typeStyles.push("bg-blue-500");
    //   default:
    //     break;
    // }
    return typeStyles.join(" ");
  }

  //   console.log(book);

  return (
    <div className="p-14 grid grid-cols-3 gap-5">
      <div className="relative col-span-1">
        <button
          className={getButtonStyles("add")}
          onClick={() => handleAddToLibrary()}
        >
          <FaCirclePlus />
        </button>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book cover"
          className="w-full"
        />
      </div>
      <div className="col-span-2">
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p className="text-sm">
            {`by `}
            {book.volumeInfo.authors.map((author, index) => (
              <span key={index}>
                {author}
                {index < book.volumeInfo.authors.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h4>Categories:</h4>
          {book.volumeInfo.categories ? (
            <ul>
              {book.volumeInfo.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          ) : (
            <p>no categories found</p>
          )}
        </div>
        <div>
          <h4>Description:</h4>
          <p dangerouslySetInnerHTML={{ __html: getDescription() }} />
        </div>
      </div>
    </div>
  );
}
