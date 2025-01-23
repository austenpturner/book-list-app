import React from "react";
import { extractUniqueCategories } from "../util/bookUtils";

export default function CategoriesList({ categories }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {extractUniqueCategories(categories).map((category, index) => (
        <li
          key={index}
          className="text-sm text-white bg-sky-400 p-1.5 rounded-md mb-1"
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
