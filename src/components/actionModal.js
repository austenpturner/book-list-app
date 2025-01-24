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
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-blue-600 text-lg md:text-xl text-center my-2.5 md:mb-6">
        {getActionHeader()}
      </h2>
      <p className="md:w-4/5 text-center">{getActionDescription()}</p>
      <button className="uppercase text-blue-500 bg-white font-semibold drop-shadow-lg hover:scale-105 my-6 py-2 px-6 rounded-xl border border-slate-400">
        post to profile
      </button>
      <div className="flex flex-col items-center mt-2">
        <img src={book.googleBooksData.image} alt="book cover" />
        <h3 className="text-center mt-2.5">{book.googleBooksData.title}</h3>
        <p className="text-center text-sm">{`by ${book.googleBooksData.authors.join(
          ", "
        )}`}</p>
      </div>
    </div>
  );
}
