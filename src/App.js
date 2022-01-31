import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import Error from './pages/error';

function App() {
  
    const [googleSignIn, setGoogleSignIn] = useState(true);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const uid = user.uid;
      // console.log(uid);
      return setGoogleSignIn(true);
      
    } 
    
    setGoogleSignIn(false);
    console.log(auth.onAuthStateChanged === 1);
    
});

  if (googleSignIn === true) {
    return (
      <Router>
  
  <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
  
      </Router>
    );
  }
  else{
    return (
      <Router>
  
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
  
      </Router>
    );
  }

}

export default App;
