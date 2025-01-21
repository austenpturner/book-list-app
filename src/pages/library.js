import * as React from "react";
import Layout from "../layouts/index";
import BookList from "../components/bookList";

export default function Library() {
  return (
    <Layout>
      <BookList type="library" />
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Library</title>
    <meta name="description" content="Your description" />
  </>
);
