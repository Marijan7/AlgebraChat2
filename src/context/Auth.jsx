import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const userContext = createContext();
export const AuthContextProvider = ({ children }) => {
      const [user, setUser] = useState({});
      const logOut = () => {
            return signOut(auth);
      };

      const logIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      };

      const signUp = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
      };

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
                  setUser(currentUser)
            );
      }, []);
      return (
            <userContext.Provider value={{ signUp, logIn, logOut, user }}>
                  {children}
            </userContext.Provider>
      );
};

export const UserAuth = () => {
      return useContext(userContext);
};
