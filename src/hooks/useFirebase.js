import { useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');

        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to the database
        saveUser(email, name, 'POST');
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/');

      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));

  }
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);

        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
        // ...
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false))
      ;
  }

  //observer user state
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubsCribe;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  return {
    user,
    admin,
    token,
    registerUser,
    isLoading,
    authError,
    saveUser,
    signInWithGoogle,
    loginUser,
    logOut,
  }
};

export default useFirebase;