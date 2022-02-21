import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Imp/Home';
import Login from './pages/signUpIn/Login';
import Admin from './pages/signUpIn/Admin';
import Error from './pages/Imp/Error';
import SignUp from './pages/signUpIn/SignUp';
import { UserAuthContextProvider } from './Context/userAuthContext';
import MainHome from './pages/Imp/Mainhome';
import ProtectedRoutes from './pages/ProtectedRoutes'
import FindTest from './pages/tests/FindTest';
import Appmnt from './pages/tests/Appmnt';
import BookTest from './pages/tests/BookTest';
import "@stripe/stripe-js";
import BulkTest from './pages/tests/BulkTest';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserReset from './pages/signUpIn/UserReset';


function App() {
  
  return (
      <Router>
        <UserAuthContextProvider>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/userReset" element={<UserReset />}></Route>
          <Route path="/findtest" element={<FindTest />}></Route>
          <Route path="/appmnt" element={<Appmnt />}></Route>
          {/* <Route path="/appmnt/:id" element={<BookTest />}></Route> */}
          <Route path="/bulk" element={<BulkTest />}></Route>

          <Route path="/home" element={
            <ProtectedRoutes>
              <MainHome></MainHome>
            </ProtectedRoutes>}>
          </Route>
          <Route path="/appmnt/:id" element={
            <ProtectedRoutes>
              <BookTest></BookTest>
            </ProtectedRoutes>}>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
        </UserAuthContextProvider>
      </Router>
    );
  


}

export default App;
