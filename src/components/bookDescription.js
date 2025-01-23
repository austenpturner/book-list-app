import React from "react";
import DOMPurify from "dompurify";

export default function BookDescription({ description }) {
  return (
    <div>
      <h5 className="mb-2.5 text-lg font-light">Description:</h5>
      <p
        className="text-base leading-6"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      />
    </div>
  );
}
