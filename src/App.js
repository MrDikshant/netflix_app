import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import { auth } from './firebase';

// Redux Imports
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';

//Importing for routing
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  // A block of code that manages the login functionality
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        // Logged Out
        console.log('Logged Out')
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ?
          <LoginPage /> :
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
