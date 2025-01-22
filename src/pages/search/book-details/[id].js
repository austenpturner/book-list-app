import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Link } from "@reach/router";

export default function BookDetails({ params }) {
  const id = params[`id`];
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();
        console.log(data);
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>Book details not found.</p>;
  }

  const sanitizedDescription = DOMPurify.sanitize(book.volumeInfo.description);

  return (
    <div>
      <button>
        <Link to="/search">Back to Search</Link>
      </button>
      <div className="p-14 grid grid-cols-3 gap-5">
        <div className="relative col-span-1">
          <button className={getButtonStyles("add")}>add</button>
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
            <ul>
              {book.volumeInfo.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Description:</h4>
            <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          </div>
        </div>
      </div>
    </div>
  );
}
