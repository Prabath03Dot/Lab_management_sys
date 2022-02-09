import { Link } from "react-router-dom"; 
import '../css/admin.css';

const Admin = () => {
    return ( 
<div className="admina h-100">
    <div className="mx-auto p-5 mb-1 h-100">
        <Link className="text-light" to='/'><i class="bi bi-arrow-left"></i> Back to home</Link>

        <div className="row align-middle py-5 px-3">
        <div className="col-md-5 container bg-light mx-auto my-auto text-center rounded py-5">
            <h3 className="pb-3">Admin Login</h3>
            <form className="p-3">
                <div className="form-group mb-4">
                    <input type="text" className="form-control" placeholder="Your Email" value="" />
                </div>
                <div className="form-group my-4">
                    <input type="password" className="form-control" placeholder="Your Password" value="" />
                </div>
                <div className="form-group my-4 ">
                    <input type="submit" className="btnSubmit btn-primary rounded" value="Login" />
                </div>
                <div className="form-group mb-4">
                    <a href="#" className="ForgetPwd">Forget Password?</a>
                </div>
            </form>
        </div>
        </div>
    </div>
</div>    

     );
}
 
export default Admin;