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
import Userfront from "@userfront/react";
import NavigationBar from '../Imp/NavigationBar';

export default function BlogDetails() {
    const auth = getAuth();
    const {user, logOut } = useUserAuth();
    const [content, setContent] = useState(null);
    const { id } = useParams();
    
    const roleAdmin = Userfront.user.hasRole("admin");
    const roleMlt = Userfront.user.hasRole("member");
    const roleUser = !(roleMlt && roleAdmin);
    // console.log(roleUser);
    // console.log(roleMlt);
    // console.log(roleAdmin);
    
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
            //console.log(response.data)
        })
        
      }, [])
      if (!content) return null;
//var randomCon =  content[Math.floor(Math.random()*content.length)];
//console.log(randomCon.map(c => c.blogTitle ))
  return (
<div>

{/* Navigation Bar */}
<NavigationBar/> 

{/* Blog Section */}
<div>
    {content.filter(cnt => cnt._id === id )
    .map(cDetails => (
        <div key={cDetails._id}>
            <div className='container'> 
                <div className='container bg-light mt-3 p-3'>
                    <h2 className=' bg-light mt-3'> {cDetails.blogTitle} </h2> 
                    <div className=' bg-light mt-3 text-muted fst-italic text-end px-4'>  - By {cDetails.blogAuthor}</div>
                </div>
                <div className='container mt-5'>
                    <Editor
                    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
                    disabled={true}
                    initialValue={cDetails.blogContent}
                    init={{                       
                        height: 500,
                        menubar: true,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                </div> 

                { (!roleAdmin && roleUser) && ( <button className='btn btn-primary text-light mt-3 mx-2'>
                    <Link className=' text-light text-decoration-none ' to={`/blog/${cDetails._id}/edit`}>Edit Blog Content</Link>
                </button>)}  
                {/* { !roleAdmin ?  ( <button className='btn btn-primary text-light mt-3 mx-2'>
                    <Link className=' text-light text-decoration-none ' to={`/blog/${cDetails._id}/edit`}>Edit Blog Content</Link>
                </button>): <></> }  */}
                {/* { (roleUser && !roleAdmin ) ?  ( <button className='btn btn-primary text-light mt-3 mx-2'>
                    <Link className=' text-light text-decoration-none ' to={`/blog/${cDetails._id}/edit`}>Edit Blog Content</Link>
                </button>): <></> }  */}

            </div>
        </div>
    ) )
    }
    
</div>



{/* Footer */}
<Footer></Footer>
    </div>
  )
}
