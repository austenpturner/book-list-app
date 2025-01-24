// Util function to get unique categories from an array of category strings
export function extractUniqueCategories(categoryArray) {
  const allCategories = categoryArray.map((item) => item.split("/")).flat();
  const uniqueCategories = [
    ...new Set(allCategories.map((category) => category.trim())),
  ];
  return uniqueCategories;
}

// Util function to normalize book details based on location
export function normalizeBookDetails(book, location) {
  if (location === "library") {
    return {
      image: book.googleBooksData.image,
      title: book.googleBooksData.title,
      authors: book.googleBooksData.authors,
    };
  } else if (location === "search") {
    return {
      image: book.volumeInfo?.imageLinks?.thumbnail || "No image available",
      title: book.volumeInfo?.title || "No title available",
      authors: book.volumeInfo?.authors || ["Unknown author"],
      categories: book.volumeInfo?.categories || [],
      description: book.volumeInfo?.description || "No description found",
    };
  }
  return {};
}

// Util function to create a library object from a book
export function createLibraryObject(book) {
  const bookObject = {
    libraryId: Date.now(),
    googleBooksId: book.id,
    googleBooksData: {
      image: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
    },
    dateAdded: Date.now(),
    read: false,
    currentlyReading: false,
    rating: null,
    review: null,
    lists: ["library"],
  };
  return bookObject;
}
