import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate =useNavigate();
    return ( 
<div>
    <div className=" justify-content-center align-items-center mt-5 pt-3  text-secondary">
    <div className="">
        <center className='pt-3 fs-1 '>Page Restricted</center>
        <center className='pt-4 fs-1 '> or </center>
        <center className='pt-4 fs-1 '>404</center>
        <center className='fs-1 pb-3 '>Page not found</center>
    </div>
        <center className='pt-3 fs-3 text-primary text-decoration-underline' onClick={()=>navigate(-1)}>
            {/* <Link className='fs-3 pt-3' to={()=>navigate(-1)}></Link> */}
            <i className="bi bi-arrow-left fs-3"></i>  Go Back 
        </center>
        <center className='pt-3'><Link className='fs-3 pt-3' to='/home'><i className="bi bi-arrow-left fs-3"></i>  Redirect Back to Home Page </Link> </center>
        <center className='fs-4 text-secondary pt-3'>MediTech Labs</center>
    </div>
</div>
     );
}

export default Error;