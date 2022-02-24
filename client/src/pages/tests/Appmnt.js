import Footerr from "../Imp/Footer";
import NavBar from "../Imp/Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams, useNavigate} from "react-router-dom";
import { useUserAuth } from "../../Context/userAuthContext";
import { onAuthStateChanged,getAuth } from "firebase/auth";



const Appmnt = () => {
    const [testList, setTestList] = useState([]);
    const { id } = useParams();
    //const [changeTest, setChangeTest] = useState();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {logIn} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const {user, logOut } = useUserAuth();

    const handleSubmit = async (e)=>{
        //e.preventDefault();
        setError("");
        if(!user){
            try{
                await logIn(email, password);
                navigate("/appmnt");
            }
            catch (err){
                setError(err.message);
            } 
        }else{
            //navigate(`/appmnt/${test.test_id}`);
            navigate("/appmnt");
        }
        
    }


    useEffect(() => {
      Axios.get("http://localhost:5000/appmntt")
      .then((response) => {
          setTestList(response.data)
      })
      
    
    }, [])


    return ( 
        <div>
            <NavBar></NavBar>
            {id}
            <div className="text-center fs-3 p-2 mt-3">Test Appointments</div>
            <div className="container mt-3 p-3 ml-3"> 
            <Table hover>
                <thead>
                    <tr>
                    <th className="text-center">Test ID</th>
                    <th className="text-center">Test Name</th>
                    <th className="text-center">Book the test</th>
                    </tr>
                </thead>
                <tbody>
                    {testList.map((test) => {
                        return (
                    <tr key={test.test_id}>
                        <td className="text-center">{test.test_id} </td>
                        <td>{test.testName} </td>
                        <td className="text-center"><button value={test.test_id} className="btn btn-primary btn-sm px-3 text-light">
                        <Link className="text-light" to={`/appmnt/${test.test_id}`} onClick={handleSubmit}>Checkout</Link>
                        </button></td>
                    </tr>  
             )
                    } )} 

                </tbody>
            </Table>            
            </div>






            <Footerr></Footerr>
        </div>
     );
}
 
export default Appmnt;