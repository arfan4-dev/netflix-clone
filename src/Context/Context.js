import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";
const authContext = createContext();

export const AuthenticationContext = ({ children }) => {
  const [users, setUsers] = useState();
  

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={{ users }}>
      {children}
    </authContext.Provider>
  );
};

// export function useUserAuth() {
//   return useContext(authContext);
// }