import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Log in user with email and password
    const loggedUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log in user with Google popup
    const loginWithPopup = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Update user profile with name and photo
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    useEffect(() => {
        // Check for changes in the user's authentication state
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // Make a post request to the server to retrieve JWT token
                axios.post('https://bristo-boss-server-mominulhouqe.vercel.app/jwt', { email: currentUser.email })
                    .then((response) => {
        
                        localStorage.setItem('access-token', response.data.token);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });

        // Unsubscribe from the onAuthStateChanged listener when component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        logOut,
        loggedUser,
        loginWithPopup,
        createUser,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
