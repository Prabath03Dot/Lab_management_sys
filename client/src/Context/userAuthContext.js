import { createContext,useState, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

import { auth } from '../pages/Firebase/Firebase';


const userAuthContext = createContext();

export function UserAuthContextProvider({ children}) {

    const [user, setUser] = useState("");

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }
//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);
      // console.log(currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

    return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut}}>
            {children}
    </userAuthContext.Provider>
    );
}

export function useUserAuth(){
    return useContext(userAuthContext);
}

