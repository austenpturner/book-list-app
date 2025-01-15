import * as React from "react";
import Layout from "../components/layout";
import BookList from "../components/bookList";

const IndexPage = () => {
  return (
    <Layout pageTitle="Book List">
      <BookList type={"to-read"} />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
