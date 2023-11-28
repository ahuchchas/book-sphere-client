import React, { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: 1951,
      genre: "Fiction",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
      genre: "Fiction",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
      genre: "Dystopian",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
      genre: "Classic",
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishedYear: 1937,
      genre: "Fantasy",
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813,
      genre: "Romance",
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publishedYear: 1954,
      genre: "Fantasy",
    },
    {
      id: 8,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publishedYear: 1997,
      genre: "Fantasy",
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      publishedYear: 1932,
      genre: "Dystopian",
    },
    {
      id: 10,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      publishedYear: 2003,
      genre: "Mystery",
    },
    {
      id: 11,
      title: "The Shining",
      author: "Stephen King",
      publishedYear: 1977,
      genre: "Horror",
    },
    {
      id: 12,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      publishedYear: 2008,
      genre: "Dystopian",
    },
    {
      id: 13,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: 1851,
      genre: "Adventure",
    },
    {
      id: 14,
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      publishedYear: 1950,
      genre: "Fantasy",
    },
    {
      id: 15,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      publishedYear: 1967,
      genre: "Magical Realism",
    },
    {
      id: 16,
      title: "Frankenstein",
      author: "Mary Shelley",
      publishedYear: 1818,
      genre: "Gothic Fiction",
    },
    {
      id: 17,
      title: "The Road",
      author: "Cormac McCarthy",
      publishedYear: 2006,
      genre: "Post-Apocalyptic",
    },
    {
      id: 18,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      publishedYear: 2005,
      genre: "Mystery",
    },
    {
      id: 19,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      publishedYear: 1847,
      genre: "Gothic Fiction",
    },
    {
      id: 20,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishedYear: 1988,
      genre: "Philosophical Fiction",
    },
  ]);
  return (
    <div>
      <h1 className="m-8 text-center font-bold text-xl">
        Books in the collection
      </h1>
      <div className="m-4 mx-auto grid lg:grid-cols-2 gap-4 max-w-screen-md">
        {books.map((book) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>Author: {book.author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
