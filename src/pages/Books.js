import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../serverUrl";
import { authCtx } from "./../contexts/AuthProvider";

const Books = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [records, setRecords] = useState([]);
  const { user } = useContext(authCtx);
  useEffect(() => {
    fetch(`${serverUrl}/books/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setRecords(data);
      });
  }, []);
  const filterByTitle = (event) => {
    setRecords(
      books.filter((book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const filterByAuthor = (event) => {
    setRecords(
      books.filter((book) =>
        book.author.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const filterByGenre = (event) => {
    setRecords(
      books.filter((book) =>
        book.genre.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  if (books.length === 0) {
    return (
      <div className=" w-full min-h-screen flex justify-center items-center">
        <span className=" font-bold text-xl">
          There is no books in your collection!
        </span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-base-200">
      <h1 className="text-center font-bold text-xl">Books in the collection</h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-black m-2 p-1 rounded"
          placeholder="Search by Title"
          onChange={filterByTitle}
        />
        <input
          type="text"
          className="border border-green-900 m-2 p-1 rounded"
          placeholder="Search by Author"
          onChange={filterByAuthor}
        />
        <input
          type="text"
          className="border border-blue-900 m-2 p-1 rounded"
          placeholder="Search by Genre"
          onChange={filterByGenre}
        />
      </div>
      <div className="m-4 mx-auto grid lg:grid-cols-2 gap-4 max-w-screen-md">
        {records.map((book) => (
          <div key={book._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p className=" font-semibold">Author: {book.author}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-neutral"
                  onClick={() =>
                    navigate(`/books/${book._id}`, { state: book })
                  }
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
