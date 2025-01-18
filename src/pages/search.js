import * as React from "react";
import Layout from "../components/layout";
// import BookList from "../components/bookList";
// import Modal from "../components/modal";
// import { useState } from "react";
import BookSearch from "../components/bookSearch";

export default function Search() {
  //   const [open, setOpen] = useState(false);
  return (
    <Layout>
      <div className="absolute top-[20%] m-auto -ml-20 w-full">
        <h2 className="text-blue-600 text-xl text-center mb-6">book search</h2>
        <BookSearch />
      </div>
    </Layout>
  );
}

export const Head = () => <title>Book Search</title>;
