import Footerr from "../Footer";
import NavBar from "../Navbar";

const FindTest = () => {
    return (
        <div> 
        <NavBar></NavBar>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        <Footerr></Footerr>
        </div>
     );
}
 
export default FindTest;