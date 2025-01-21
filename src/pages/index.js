import * as React from "react";
import Layout from "../layouts/index";

export default function IndexPage() {
  return (
    <Layout>
      <h1>home page</h1>
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;
