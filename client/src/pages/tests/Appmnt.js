import Footerr from "../Imp/Footer";
import NavBar from "../Imp/Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams, useNavigate} from "react-router-dom";
import Userfront from "@userfront/react";
import NavigationBar from "../Imp/NavigationBar";


const Appmnt = () => {
    const [testList, setTestList] = useState([]);
    const { id } = useParams();

    Userfront.init("6bgm6jgb");
    const userFrontuser = Userfront.user;

    useEffect(() => {
      Axios.get("https://lab-sys.herokuapp.com/appmntt")
      .then((response) => {
          setTestList(response.data)
      })
      
    
    }, [])


    return ( 
    <div>

    {/* Navigation Bar */}
    <NavigationBar/>    

    
    <div className="container mt-5 p-3"> 
    <div className="fs-1 text-secondary p-2 mb-4">Test Appointments</div>
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
                <Link className="text-light" to={`/appmnt/${test.test_id}`}>Checkout</Link>
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