import { useContext, createContext, useState, useEffect } from "react";
import { authFirebase } from "../../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = createContext();

export const useLoginContext = () => {
  return useContext(Login);
};

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    stateLogged: false,
    email: null,
    error: null,
  });

  const [loading, setLoading] = useState(false);

  const logout = () => {
    setUser({
      email: null,
      stateLogged: false,
      error: null,
    });
    sessionStorage.removeItem("sessionActive");
  };

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user && sessionStorage.getItem("sessionActive") != null) {
        // User is signed in, see docs for a list of available properties
        setUser({ stateLogged: true, email: user.email, error: null });
      } else {
        // User is signed out
        logout();
      }
    });
  }, []);

  const newUser = (newUserRegister, resetForm, alertRegister) => {
    createUserWithEmailAndPassword(
      authFirebase,
      newUserRegister.email,
      newUserRegister.password
    )
      .then((userCredential) => {
        // Signed in
        setUser({
          email: userCredential.user.email,
          stateLogged: true,
          error: null,
        });
        resetForm();
        alertRegister();
      })
      .catch((error) => {
        setUser({
          email: null,
          stateLogged: false,
          error: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = (user, resetForm, navigate) => {
    signInWithEmailAndPassword(authFirebase, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        setUser({
          email: userCredential.user.email,
          stateLogged: true,
          error: null,
        });
        sessionStorage.setItem(
          "sessionActive",
          JSON.stringify(userCredential.user.accessToken)
        );
        resetForm();
        navigate("/products");
      })
      .catch((error) => {
        setUser({
          email: null,
          stateLogged: false,
          error: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Login.Provider
      value={{ newUser, user, loading, setLoading, login, logout }}
    >
      {children}
    </Login.Provider>
  );
};
