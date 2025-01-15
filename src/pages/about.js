import * as React from "react";
import Layout from "../components/layout";
import BookList from "../components/bookList";

const AboutPage = () => {
  return (
    <Layout pageTitle="Books Completed">
      <BookList />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
