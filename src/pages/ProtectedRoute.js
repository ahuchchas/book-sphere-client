import { useContext } from "react";
import { authCtx } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(authCtx);
  //   console.log(user?.email);
  const navigate = useNavigate();

  if (!user) {
    //   alert("Please login to continue!");
    return navigate("/login");
  }

  if (loading) {
    return (
      <div className=" w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
