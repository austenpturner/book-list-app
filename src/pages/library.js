import React from "react";
import LibraryList from "../components/libraryList";

export default function Library() {
  return (
    <div className="mt-14 min-h-[calc(100vh - 56px)]">
      <LibraryList />
    </div>
  );
}

export const Head = () => (
  <>
    <title>Library</title>
    <meta name="description" content="Your description" />
  </>
);
