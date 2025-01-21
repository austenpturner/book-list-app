import React, { useContext } from "react";
import Layout from "../layouts/index";
import BookSearch from "../components/bookSearch";
import { UIContext } from "../context/uiContext";

export default function Search() {
  const { state } = useContext(UIContext);

  console.log(state.bookSearchSubmitted);

  return (
    <Layout>
      <div
        className={`absolute m-auto md:-ml-20 w-full transition-top ease-in-out delay-100 ${
          state.bookSearchSubmitted ? "top-20" : "top-[20%]"
        } `}
      >
        <h2
          className={`${
            state.bookSearchSubmitted
              ? "hidden"
              : "text-blue-600 text-lg md:text-xl text-center mb-6"
          } `}
        >
          book search
        </h2>
        <BookSearch />
      </div>
    </Layout>
  );
}

export const Head = () => <title>Book Search</title>;
