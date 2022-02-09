import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Context/userAuthContext";

const ProtectedRoutes = ({children}) => {
    let {user} = useUserAuth();
    if(!user){
        return <Navigate to="/login" />;
    }
    return children;
}
 
export default ProtectedRoutes;