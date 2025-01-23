import React from "react";

export default function AuthorsList({ authors }) {
  return (
    <p className="text-sm">
      by{" "}
      {authors.map((author, index) => (
        <span key={index}>
          {author}
          {index < authors.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}
