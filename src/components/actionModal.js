import React from "react";

export default function ActionModal({ action, book }) {
  function getActionHeader() {
    switch (action) {
      case "add":
        return "New book added!";
      case "mark-reading":
        return "New book started!";
      case "mark-read":
        return "Congratulations!";
      default:
        return "";
    }
  }

  console.log(book);

  function getActionDescription() {
    switch (action) {
      case "add":
        return `You added ${
          book.googleBooksData.title
        } by ${book.googleBooksData.authors.join(", ")} to your library.`;
      case "mark-reading":
        return `You started reading ${
          book.googleBooksData.title
        } by ${book.googleBooksData.authors.join(", ")}.`;
      case "mark-read":
        return `You finished reading ${
          book.googleBooksData.title
        } by ${book.googleBooksData.authors.join(", ")}.`;
      default:
        return "";
    }
  }

  return (
    <div>
      <h2 className="text-blue-600 text-lg md:text-xl text-center mb-6">
        {getActionHeader()}
      </h2>
      <p>{getActionDescription()}</p>
      <button>post to profile</button>
      <div>
        <img src={book.googleBooksData.image} alt="book cover" />
        <h3>{book.googleBooksData.title}</h3>
        <p>{`by ${book.googleBooksData.authors.join(", ")}`}</p>
      </div>
    </div>
  );
}
