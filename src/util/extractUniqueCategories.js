export function extractUniqueCategories(categoryArray) {
  // Flatten the array and split each item into individual category strings
  const allCategories = categoryArray
    .map((item) => item.split("/")) // Splits each string by '/'
    .flat(); // Flattens the array of arrays into a single array

  // Remove duplicates by converting to a Set and back to an array
  const uniqueCategories = [
    ...new Set(allCategories.map((category) => category.trim())),
  ]; // .map to trim spaces

  return uniqueCategories;
}
