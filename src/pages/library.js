import * as React from "react";
import Layout from "../components/layout";
import BookList from "../components/bookList";

export default function Library() {
  return (
    <Layout>
      <BookList />
      <BookList type={"to-read"} />
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Library</title>
    <meta name="description" content="Your description" />
  </>
);
