import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import ReadListBook from "../ReadListBook/ReadListBook";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-[100px]">
      <h3 className="font-bold text-[40px] text-center mb-9">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.bookId}>
            <Book book={book}></Book>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
