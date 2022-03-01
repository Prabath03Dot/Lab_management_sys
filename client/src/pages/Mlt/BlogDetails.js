import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Footer from '../Imp/Footer';
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';


export default function BlogDetails() {
    const auth = getAuth();
    const {user, logOut } = useUserAuth();
    const [content, setContent] = useState(null);
    const { id } = useParams();
    
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
          //console.log("user signed In");
        } else {
            //console.log("user signed Out");
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
//var randomCon =  content[Math.floor(Math.random()*content.length)];
//console.log(randomCon.map(c => c.blogTitle ))
  return (
<div>

{/* Navigation Bar */}
<div>
    <div className=" bg-primary text-light ">
    <div className="row border-primary">
        <div className="col-md-5">
            <div className="row">
                <div className="col text-center"><i class="bi bi-telephone px-2"></i>0112222777</div>
                <div className="col"><i class="bi bi-envelope px-1"></i>meditech.cn@gmail.com</div>
            </div>
        </div>
        <div className="col-md-4 ms-auto text-sm-end px-5 text-center">
            <i className="bi bi-twitter px-2"></i>
            <i className="bi bi-instagram px-2"></i>
            <i className="bi bi-facebook px-2"></i>
        </div>
    </div>
    </div>


    <Navbar >
    <Container>
        <button className="btn btn-dark"><Link to="/" className="text-decoration-none text-light px-2"> Meditech Labs</Link></button>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className="d-flex">
        
            {user ? <div> <button type="button" onClick={handleLogout} className="btn btn-secondary mr-2 border border-0">Log Out</button> </div> : <div><button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="/login" >Log In
            </Link></button></div> }
            
            
            
            <form className="d-flex">
                {/* <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />  */}
                 <div className='text-center pt-1'>{user && user.email}</div> 
                
                {/* <button className="btn btn-outline-success border border-0" type="submit"><i class="bi bi-search"></i></button> */}
            </form>
        </div>
        
        </Navbar.Collapse>
    </Container>
    </Navbar>


    <nav className="navbar navbar-expand-lg navbar-light border">
    <div className="container-fluid">
        <Link className="navbar-brand" to="#"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto  ">

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tests
            </a>
            <ul className="dropdown-menu p-2 " aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item drp " to="/findtest">Test Directory</Link></li>
                {/* <li><Link className="dropdown-item drp" to="/appmnt">Make Appoitment</Link></li>
                <li><Link className="dropdown-item drp" to="/bulk">Bulk Test</Link></li> */}
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ask Experts
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink1">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Education
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink2">
                <li><Link className="dropdown-item drp" to="/blog">Blogs</Link></li>
                <li><Link className="dropdown-item drp" to="/blogEdit">Blog Edits</Link></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News & Events
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink3">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>

            {/* <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink4">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li> */}
        </ul>
        </div>
    </div>
    </nav>

    

</div>  

{/* Blog Section */}
<div>
    {content.filter(cnt => cnt._id == id )
    .map(cDetails => (
        <div key={cDetails._id}>
            <div className='container'> 
                <div className='container bg-light mt-3 p-3'>
                    <h2 className=' bg-light mt-3'> {cDetails.blogTitle} </h2> 
                    <div className=' bg-light mt-3 text-muted fst-italic text-end px-4'>  - By {cDetails.blogAuthor}</div>
                </div>
                <div className='container bg-light mt-3 p-3'>
                    <div className=' bg-light mt-3'> {cDetails.blogContent}</div>
                </div>
                <Editor
                    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
                    // onInit={(evt, editor) => {
                    //     setBlogContent(editor.getContent({format: 'html'}));
                    // }}
                    initialValue={cDetails.blogContent}
                    // onEditorChange={(newValue, editor) => {
                    // setValue(newValue);
                    // setBlogContent(editor.getContent({format: 'html'}));
                    // }}
                    init={{
                        height: 500,
                        menubar: false,
                        // toolbar: 'undo redo | formatselect | ' +
                        // 'bold italic forecolor backcolor | alignleft aligncenter ' +
                        // 'alignright alignjustify | bullist numlist outdent indent | ' +
                        // 'removeformat | blockquote	',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
        </div>
    ) )
    }
    
</div>

{/* <div className="card mb-3 container border-0 my-2" >
<div className="align-items-center justify-items-center ">
<div >
  <div className="card-body">
   {content.map(cList => {
       return(
           <div className="mb-3 bg-light bg-gradient p-5" key={cList._id}>
           <h5 className="card-title">{cList.blogTitle}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted fst-italic"> -By {cList.blogAuthor}</small></p>
                <Link className="text-dark py-2" to='/blogEdit'>Read More...</Link>
           </div>
       )
   })}
 </div>
</div>

</div>
</div> */}




{/* Footer */}
<Footer></Footer>
    </div>
  )
}
