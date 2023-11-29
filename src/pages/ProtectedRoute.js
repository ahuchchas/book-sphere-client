import { useContext, useEffect } from "react";
import { authCtx } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(authCtx);
  //   console.log(user?.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      //   alert("Please login to continue!");
      return navigate("/login");
    }
  }, []);
  return children;
};

export default ProtectedRoute;
