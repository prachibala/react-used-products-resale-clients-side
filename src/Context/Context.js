import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
} from "firebase/auth";
const auth = getAuth(app);
// Context
export const AuthContext = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // CREATE-USER
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // UPDATE USER
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };
    // SIGNIN
    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Google Signin
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const googleSignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // LOgOUT
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        createUser,
        signin,
        googleSignin,
        updateUser,
        loading,
        logOut,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;
