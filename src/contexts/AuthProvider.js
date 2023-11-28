import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const authCtx = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      // console.log("current user", user);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    user: user,
    loading: loading,
    createUser: createUser,
    signIn: signIn,
    logout: logout,
  };
  return <authCtx.Provider value={authInfo}>{children}</authCtx.Provider>;
}
