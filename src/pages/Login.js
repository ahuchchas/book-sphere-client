import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../contexts/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(authCtx);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/books");
      })
      .catch((error) => {
        alert("Login Failed! " + error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="mt-4 font-semibold">Login to continue</h1>
        <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={(event) => handleLogin(event)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral">
                Login
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

export default Login;
