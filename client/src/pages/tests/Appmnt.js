import Footerr from "../Footer";
import NavBar from "../Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams } from "react-router-dom";

const Appmnt = () => {
    const [testList, setTestList] = useState([]);
    const { id } = useParams();
    //const [changeTest, setChangeTest] = useState();

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
                        <Link className="text-light" to={`/appmnt/${test.test_id}`}>Book test</Link>
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