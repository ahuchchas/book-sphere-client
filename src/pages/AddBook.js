import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../serverUrl";
import { authCtx } from "./../contexts/AuthProvider";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = useContext(authCtx);

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publishedYear = form.publishedYear.value;
    // console.log(title, author, genre, publishedYear);
    const book = {
      title: title,
      author: author,
      genre: genre,
      publishedYear: publishedYear,
      user: user.email,
    };
    fetch(`${serverUrl}/books/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("book added");
        navigate("/books");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="mt-4 font-semibold">Provide details about the book</h1>
        <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={(event) => handleAddBook(event)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                type="text"
                name="author"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year of Publishing</span>
              </label>
              <input
                type="number"
                name="publishedYear"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral">
                Add Book
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
