import React from "react";
import BookList from "../components/bookList";

export default function Library() {
  return (
    <div className="mt-14 min-h-[calc(100vh - 56px)]">
      <BookList type="library" />
    </div>
  );
}

export const Head = () => (
  <>
    <title>Library</title>
    <meta name="description" content="Your description" />
  </>
);
