const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genre: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    genre: "Dystopian Fiction",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    genre: "Classic Romance",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    yearPublished: 1951,
    genre: "Literary Fiction",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
    genre: "Fantasy",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 1997,
    genre: "Fantasy",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979,
    genre: "Science Fiction Comedy",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    yearPublished: 1932,
    genre: "Dystopian Fiction",
  },
];
// Checks if year is provided
let year = process.argv[2];
if (isNaN(year)) {
  // If year is not provided, print error message
  console.log("Please provide a valid year.");
} else {
  const filter = books.filter(
    // Filters books by year published
    (books) => books.yearPublished >= parseInt(year)
  );
  // If no books are found, print error message
  if (filter.length === 0) {
    // If no books are found, print error message
    console.log(`No books found published after year ${year}.`);
  } else {
    // If books are found, print books
    /** Still prints books even if one number is inputed, doesn't revert back to error message in line 61, if less than four numbers are inputed **/
    console.log(`Books published after year ${year}:`);
    filter.forEach((books) =>
      // Prints books published after year input
      console.log(`${books.title} by ${books.author} (${books.yearPublished})`)
    );
  }
}
