import React from "react";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { addToLibrary } from "../store/slices/bookListSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { extractUniqueCategories } from "../util/extractUniqueCategories";

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

  function getUniqueCategories() {
    if (!book.volumeInfo.categories) {
      return "No categories found";
    } else {
      const uniqueCategories = extractUniqueCategories(
        book.volumeInfo.categories
      );
      return uniqueCategories;
    }
  }

  function getButtonStyles(type) {
    const typeStyles = [
      "text-white",
      "absolute",
      "top-1.5",
      "right-1",
      "p-0",
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

  // console.log(book.volumeInfo.categories);
  // const result = extractUniqueCategories(book.volumeInfo.categories);
  // console.log(result);

  return (
    <div className="p-14 mx-auto grid grid-cols-3 gap-6 max-w-5xl">
      <div className="relative col-span-1">
        <button
          className={getButtonStyles("add")}
          onClick={() => handleAddToLibrary()}
        >
          <FaCirclePlus className="h-8 w-8" />
        </button>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book cover"
          className="w-full"
        />
      </div>
      <div className="col-span-2">
        <div className="mb-5">
          <h3 className="text-3xl font-semibold">{book.volumeInfo.title}</h3>
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
        <div className="mb-5">
          <h5 className="mb-2.5 text-lg font-light">Categories:</h5>
          {book.volumeInfo.categories && (
            <ul className="flex flex-wrap gap-1.5">
              {getUniqueCategories().map((category, index) => (
                <li
                  key={index}
                  className="text-sm text-white bg-sky-400 p-1.5 rounded-md mb-1"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h5 className="mb-2.5 text-lg font-light">Description:</h5>
          <p
            className="text-base leading-6"
            dangerouslySetInnerHTML={{ __html: getDescription() }}
          />
        </div>
      </div>
    </div>
  );
}
