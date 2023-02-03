import { useContext, createContext, useState } from "react";
import { authFirebase } from "../../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

  const login = (user,resetForm) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        setUser({
          email: userCredential.user.email,
          stateLogged: true,
          error: null,
        });
        resetForm();
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
    <Login.Provider value={{ newUser, user, loading, setLoading }}>
      {children}
    </Login.Provider>
  );
};
