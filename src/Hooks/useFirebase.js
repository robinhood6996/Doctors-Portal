import React, { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
//initialize firebase app
initializeFirebase()
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [autherror, setAuthError] = useState('');

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                //set name and email to state:
                const newUser = { email: email, displayName: name };
                setUser(newUser);
                //Send to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    //Email password signin option
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    //Google provider
    const signinWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                const destination = location?.state?.from;
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    //Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        autherror,
        signinWithGoogle
    }
};

export default useFirebase;