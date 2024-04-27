import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signOut,GithubAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase.config';
import toast from 'react-hot-toast';

export const ContextApi = createContext(null);

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const [err, setErr] = useState(null)
    const [user, setUser] = useState();

    const auth = getAuth(app);

    const registerWithEmail = (email, password, name, PhotoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, PhotoURL)

    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const signInWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }

    const singInWithGitHub = () => {
        setLoading(true)
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        setReload(false)

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
                setErr(null)
                console.log(user)

            } else {

            }
        });

        return (() => {
            unSubscribe();
        })

    }
        , [reload])

    // const updateUserInfo = (displayName, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: displayName, photoURL: photo
    //     })

    // }


    const signOutfromLogin = () => {
        toast.success('Signed Out Successfully')
        return signOut(auth)
    }


    const ContextValue = {
        auth,
        user,
        loading,
        setReload,
        setLoading,
        setUser,
        registerWithEmail,
        login,
        signOutfromLogin,
        signInWithGoogle,
        singInWithGitHub,
        // updateUserInfo,
        setErr,
        err,
    }

    return (
        <ContextApi.Provider value={ContextValue}>
            {children}
        </ContextApi.Provider>
    )
}
