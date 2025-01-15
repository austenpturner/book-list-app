import * as React from "react";
import Layout from "../components/layout";
import BookList from "../components/bookList";
import Modal from "../components/modal";
import { useState } from "react";

export default function IndexPage() {
  const [open, setOpen] = useState(false);
  return (
    <Layout pageTitle="Book List">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-full"
        onClick={() => setOpen(true)}
      >
        add book
      </button>
      <BookList type={"to-read"} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>Hi from the modal!</p>
      </Modal>
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;
