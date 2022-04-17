import { Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Footer from '../Imp/Footer';
import React, {useEffect} from 'react';
import axios from 'axios';
import NavBar from '../Imp/Navbar'
import NavigationBar from "../Imp/NavigationBar";
import Userfront from "@userfront/react";

export default function Blog() {

    const [content, setContent] = useState(null);
    const roleMlt = Userfront.user.hasRole("member");


    useEffect(() => {
        axios.get("https://lab-sys.herokuapp.com/blogList")
        .then((response) => {
            setContent(response.data)
            console.log(response.data)
        })
        
      }, [])
   

  return (
<div>

{/* Navigation Bar */}
<NavigationBar/>

{/* Blog Section */}

<div className="p-4 container mt-5 mb-4">
<div className='fs-1 text-secondary'>Blog Section</div>
{roleMlt &&
<div className="mt-3  text-secondary fst-italic"> <Link className="mt-3  text-secondary fst-italic" to="/blogEdit">Create Blog</Link><i class="bi bi-link-45deg"></i> </div> }
<div className="card mb-3  border-0 my-5" >
<div className="align-items-center justify-items-center ">
<div>
  <div className="card-body ">
   { !content ? <div className='text-center fs-3 mt-5 pt-5 text-secondary' ><div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> : content.map(cList => {
       return(
           <div className="mb-3  bg-gradient p-5 rounded shadow bg-body  border-start  border-primary border-4" key={cList._id}>
           <h5 className="card-title fs-1 text-secondary mb-4 fst-italic">{cList.blogTitle}</h5>
                <p className="card-text"><small className="text-muted "> -By {cList.blogAuthor}</small></p>
                <button className="btn btn-primary" ><Link className="text-light py-2 text-decoration-none" to={`/blog/${cList._id}`}>Read the article</Link></button>
                
           </div>
       )
   })}
 </div>
</div>

</div>
</div>
</div>



{/* Footer */}
<Footer></Footer>
    </div>
  )
}
