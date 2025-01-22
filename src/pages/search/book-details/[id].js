import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import BookDetails from "../../../components/bookDetails";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function BookDetailsPage({ params }) {
  const id = params[`id`];
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(id);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();
        // console.log(data);
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

  return (
    <div>
      <button className="mt-2.5 ml-2.5">
        <Link to="/search">
          <FaCircleArrowLeft className="h-8 w-8 text-slate-800 drop-shadow-lg hover:scale-105" />
        </Link>
      </button>
      {book !== null && !loading && <BookDetails book={book} />}
    </div>
  );
}
