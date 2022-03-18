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
import NavigationBar from "../Imp/NavigationBar";


export default function Blog() {
    const auth = getAuth();
    const {user, logOut } = useUserAuth();
    const [content, setContent] = useState(null);
    
    
    const handleLogout =  async () => {
        try{
            await logOut();
            // navigate('/');
            
        }catch(err){
            console.log(err.message)
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user signed In");
        } else {
            console.log("user signed Out");
        }
      });


    useEffect(() => {
        axios.get("http://localhost:5000/blogList")
        .then((response) => {
            setContent(response.data)
            console.log(response.data)
        })
        
      }, [])
      if (!content) return null;

  return (
<div>

{/* Navigation Bar */}
<NavigationBar/> 

{/* Blog Section */}


<div className="card mb-3 container border-0 my-2" >
<div className="align-items-center justify-items-center ">
<div >
  <div className="card-body ">
   {content.map(cList => {
       return(
           <div className="mb-3 bg-light bg-gradient p-4 rounded shadow bg-body" key={cList._id}>
           <h5 className="card-title fs-2 border-bottom border-2">{cList.blogTitle}</h5>
                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                <p className="card-text"><small className="text-muted fst-italic"> -By {cList.blogAuthor}</small></p>
                <button className="btn btn-primary" ><Link className="text-light py-2 text-decoration-none" to={`/blog/${cList._id}`}>Read the article</Link></button>
                
           </div>
       )
   })}
 </div>
</div>

</div>
</div>





{/* Footer */}
<Footer></Footer>
    </div>
  )
}
