import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
// import BookDetails from "../../../components/bookDetails";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import BookDetails from "../../../components/bookDetails";

export default function BookDetailsPage({ params }) {
  const id = params[`id`];
  const library = useSelector((state) => state.bookList.library);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    library.forEach((book) => {
      console.log(book.libraryId);
    });
    const fetchBookDetails = () => {
      const foundBook = library.find(
        (book) => String(book.libraryId) === String(id)
      );
      console.log(foundBook);
      if (foundBook) {
        setBook(foundBook);
        setLoading(false);
      } else {
        console.log("Book not found in library");
        setBook(null);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [library, id]);

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>Book details not found.</p>;
  }

  return (
    <div>
      <button className="mt-2.5 ml-2.5">
        <Link to="/library">
          <FaCircleArrowLeft className="h-8 w-8 text-slate-800 drop-shadow-lg hover:scale-105" />
        </Link>
      </button>
      {book !== null && !loading && (
        <BookDetails book={book} location="library" />
      )}
      {/* <h2>library book details</h2> */}
    </div>
  );
}
