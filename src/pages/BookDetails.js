import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md text-justify">
          <h1 className="text-2xl font-bold pb-2 border-0 border-b-2 border-emerald-800">
            Book details
          </h1>
          <p className="py-2 font-semibold">
            <span className="text-xl font-bold">Title: </span>
            {book.title}
          </p>
          <p className="py-2 font-semibold">
            <span className="text-xl font-bold">Author: </span>
            {book.author}
          </p>
          <p className="py-2 font-semibold">
            <span className="text-xl font-bold">Genre: </span>
            {book.genre}
          </p>
          <p className="py-2 font-semibold">
            <span className="text-xl font-bold">Published in: </span>
            {book.publishedYear}
          </p>
          <div className="flex justify-between py-8">
            <button
              className="btn btn-neutral w-[100px]"
              onClick={() => navigate("/editBook", { state: book })}
            >
              Edit
            </button>
            <button className="btn btn-error w-[100px] ml-4">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
