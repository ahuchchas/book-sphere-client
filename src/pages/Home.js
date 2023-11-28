import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className=" max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to <span className=" text-emerald-700">Book Sphere</span>
          </h1>
          <p className="py-6">
            From here you can browse the awesome collection of books, Add new
            books, Update or Delete Existing Books. Please login to access all
            features.
          </p>
          <Link to={"/books"} className="btn btn-neutral">
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
