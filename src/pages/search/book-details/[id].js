import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import BookDetails from "../../../components/bookDetails";

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
      <button>
        <Link to="/search">Back to Search</Link>
      </button>
      {book !== null && !loading && <BookDetails book={book} />}
    </div>
  );
}
