import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-2xl font-bold text-emerald-950"
        >
          Book Sphere
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to={"/books"}>Browse books</Link>
          </li>
          <li>
            <a>Add book</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
