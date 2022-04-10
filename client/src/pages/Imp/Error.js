import { useNavigate } from "react-router-dom";
import '../../css/error.css';

const Error = () => {
    const navigate = useNavigate();
    return ( 
<div className="pt-5 pb-5 bg-danger " id="error">
    <div className=" justify-content-center align-items-center mt-5 pt-3  text-light opacity-75">
    <div className="">
        <center className='pt-3 fs-1 '>Page Restricted</center>
        <center className='pt-4 fs-1 '> or </center>
        <center className='fs-1 pb-3 pt-4 mb-4'>Page not found</center>
    </div>
        <center className='pt-5 mt-4 fs-3 text-dark text-decoration-underline' onClick={()=>navigate(-1)}>
            <i className="bi bi-arrow-left fs-3"></i>  Go Back 
        </center>
        <center className='fs-4 text-light pt-3'>MediTech Labs</center>
    </div>
</div>
     );
}

export default Error;