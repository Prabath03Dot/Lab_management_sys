import { Link, useNavigate, useHistory  } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Footer from '../Imp/Footer';
import {EditorState,convertToRaw} from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from "react";
//import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

export default function BlogEdit() {
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const [isError, setError] = useState(null);
    const [content, setContent] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [blogAuthor, setBlogAuthor] = useState();
    const [blogContent, setBlogContent] = useState();
    

    const auth = getAuth();
    const {user, logOut } = useUserAuth();
    
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

    
    const log = async (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setContent(editorRef.current.getContent());
            //setBlogContent(editorRef.current.getContent())
        }

        try{
            await axios.post('http://localhost:5000/createBlog',{
                blogTitle,
                blogAuthor,
                blogContent
            } )
            .then(res => {
              const data = res.data;
            //   setInvoice({
            //     firstName: setFirstName,
            //     lastName: setLastName,
            //     phoneNumber : setPhoneNumber,
            //     email : setEmail
            //   })
              console.log(blogTitle + 'Hri');
              //console.log(blogContent)
              
            }).catch((error) => {
              if (error.response) {
                console.log(error.response);
                console.log("server responded::BlogRoute");
              } else if (error.request) {
                console.log("network error ::BlogRoute");
              } else {
                console.log(error);
              }
            })
          }catch(error){
            console.log(error);
          }

      
    };

      
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

{/* Blog Edits */}
<div className='container mt-3'>
  <h2 className="text-center py-2">Create A Blog </h2>
  <form onSubmit={log}>
    <input className="my-4 form-control" type="text" name="title" id="title" placeholder="Blog Title" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
    <input className="my-4 form-control" type="text" name="authorName" id="authorName" placeholder="Author Name"  value={blogAuthor} onChange={e => setBlogAuthor(e.target.value)}/>
   <Editor
    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
            onInit={(evt, editor) => {
                setContent(editor.getContent({format: 'text'}));
            }}
          initialValue="<p>This is the initial content of the editor.</p>"
          onEditorChange={(newValue, editor) => {
        //setValue(newValue);
        setContent(editor.getContent({format: 'text'}));
      }}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | blockquote	',
            menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
    insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
            },
            toolbar_mode: 'floating',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
    <button type='submit' className="btn btn-primary mt-3" >Log editor content</button>   
  </form>

</div>

{content}


{/* Footer */}
<Footer></Footer>
</div>
  )
}
