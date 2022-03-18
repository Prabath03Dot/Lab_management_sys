import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
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
import BulkTestForm from './pages/tests/BulkTestForm';
import Blog from './pages/Mlt/Blog';
import BlogEdit from './pages/Mlt/BlogEdit';
import BlogDetails from './pages/Mlt/BlogDetails';
import Edit from './pages/Mlt/Edit';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { ProtectedRoute } from './pages/Imp/PrivateRoutes';
import { LoginForm, LogoutButton, SignupForm } from './pages/signUpIn/useFront';
import { RequireAuth } from './pages/signUpIn/userFrontProtected';
//import Loading from './pages/Imp/Loading';
// import SignupForm, LoginForm , PasswordResetForm from "../signUpIn/useFront";
import Userfront from "@userfront/react";
import RestrictPage from './pages/Imp/RestrictPage';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
      return <div><div className="justify-items-center align-items-center">Loading...</div></div> ;
    }

    const roleAdmin = Userfront.user.hasRole("admin");
    const roleMlt = Userfront.user.hasRole("member");
  // if(){
  //   console.log('ddddd');
  // }
  
  return (
      <Router>
        <UserAuthContextProvider>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/userReset" element={<UserReset />}></Route> */}

          {/* Login/signUp */}
          <Route path="/useLogin" element={<LoginForm />}></Route>
          <Route path="/useSignUp" element={<SignupForm />}></Route>

          <Route path="/home" element={
            <RequireAuth> <MainHome></MainHome> </RequireAuth>
          } ></Route>

          <Route path="/findtest" element={
            <RequireAuth>
              <FindTest></FindTest>
            </RequireAuth>
          }></Route>

          {!roleMlt && <Route path="/appmnt" element={
            <RequireAuth>
              <Appmnt></Appmnt>
            </RequireAuth>
          }></Route>}

          {!roleMlt && <Route path="/appmnt/:id" element={
            <RequireAuth>
              <BookTest></BookTest>
            </RequireAuth>
          }></Route>}

          <Route path="/bulk" element={
            <RequireAuth>
              <BulkTest></BulkTest>
            </RequireAuth>
          }></Route>

          {!roleMlt && <Route path="/bulkform" element={
            <RequireAuth>
              <BulkTestForm></BulkTestForm>
            </RequireAuth>
          }></Route>}




          {/* <Route path="/home" element={
            <ProtectedRoutes>
              <MainHome></MainHome>
            </ProtectedRoutes>}>
          </Route> */}
          {/* <Route path="/appmnt" element={
            <ProtectedRoutes>
              <Appmnt></Appmnt>
            </ProtectedRoutes>}>
          </Route> */}

          {/* <Route path="/appmnt" element={<ProtectedRoute component={Appmnt} />} /> */}
          {/* <Route path="/appmnt" element={
            <RequireAuth> 
              <Appmnt></Appmnt> 
            </RequireAuth>
          }></Route> */}
          {/* <Route path="/restricted" element={<RestrictPage />}></Route> */}
{/* {!roleAdmin ? <Route path="/restricted" element={<RestrictPage />}></Route>: <Route path="/appmnt" 
          element={
            <RequireAuth>
              <Appmnt></Appmnt>
            </RequireAuth>
          }></Route>} */}
          {roleAdmin && (<Route path="/appmnt" element={
            <RequireAuth>
              <Appmnt></Appmnt>
            </RequireAuth>
          }></Route>)}

          {/* <Route path="/bulkform" element={
            <RequireAuth>
              <BulkTestForm></BulkTestForm>
            </RequireAuth>
          }></Route> */}

      


          {/* <Route path="/home" element={<ProtectedRoute component={MainHome} />}></Route> */}
          {/* <Route path="/appmnt/:id" element={<ProtectedRoute component={BookTest} />}></Route> */}
          {/* <Route path="/bulkform" element={<ProtectedRoute component={BulkTestForm} />}></Route> */}
          
          

       {/* {<ProtectedRoute component={Teleporter} />} */}
          {/* <Route path="/appmnt/:id" element={
            <ProtectedRoutes>
              <BookTest></BookTest>
            </ProtectedRoutes>}>
          </Route> */}

          {/* <Route path="/bulkform" element={
            <ProtectedRoutes>
              <BulkTestForm></BulkTestForm>
            </ProtectedRoutes>}>
          </Route> */}

          {/* MLT Routes */} 
          <Route path="/blog" element={
            <RequireAuth>
              <Blog></Blog>
            </RequireAuth>
          }></Route>

          <Route path="/blog/:id" element={<BlogDetails />}></Route> 

          { roleMlt && <Route path="/blog/:id/edit" element={
            <RequireAuth>
              <Edit></Edit>
            </RequireAuth>
          }></Route>}
          
          { roleMlt && <Route path="/blogEdit" element={
            <RequireAuth>
              <BlogEdit></BlogEdit>
            </RequireAuth>
          }></Route>}



          <Route path="*" element={<Error />}></Route>       
        </Routes>

        </UserAuthContextProvider>


      </Router>
    );
  


}

export default App;
