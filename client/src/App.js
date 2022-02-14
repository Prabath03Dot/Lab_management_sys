import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import { UserAuthContextProvider } from './Context/userAuthContext';
import MainHome from './pages/Mainhome';
import ProtectedRoutes from './pages/ProtectedRoutes'
import FindTest from './pages/tests/FindTest';
import Appmnt from './pages/tests/Appmnt';
import BookTest from './pages/BookTest';


function App() {
  
  return (
      <Router>
        <UserAuthContextProvider>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/findtest" element={<FindTest />}></Route>
          <Route path="/appmnt/*" element={<Appmnt />}></Route>
          <Route path="/appmnt/:id" element={<BookTest />}></Route>

          <Route path="/home" element={
          <ProtectedRoutes>
            <MainHome></MainHome>
          </ProtectedRoutes>}>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        </UserAuthContextProvider>
      </Router>
    );
  


}

export default App;
