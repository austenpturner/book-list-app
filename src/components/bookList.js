import * as React from "react";

const BookList = ({ type }) => {
  return (
    <div>
      <h2>{type === "to-read" ? "Books to read" : "Books I've read"}</h2>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
    </div>
  );
};

export default BookList;
