import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loggedUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithPopup = () => {
        return signInWithPopup(auth, provider)
    }
const logOut = () => {
    return signOut(auth)
}


    const authInfo = {
        user,
        logOut,
        loggedUser,
        loginWithPopup,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;