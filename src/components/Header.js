import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCtx } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(authCtx);
  const navigate = useNavigate();
  // console.log(user?.uid, user?.email);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img
          src={require("./books.png")}
          alt="logo"
          className="w-[60px] rounded-full"
        />
        <Link
          to={"/"}
          className="btn btn-ghost text-2xl font-bold text-emerald-950"
        >
          Book Sphere
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          {user ? (
            <>
              <li>
                <Link to={"/books"}>Browse books</Link>
              </li>
              <li>
                <Link to={"/addBook"}>Add book</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                >
                  Logout ({user.email})
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
