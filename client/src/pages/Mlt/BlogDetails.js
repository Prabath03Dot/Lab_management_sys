import '../../css/Navabr.css';
import { useState } from "react";
import Footer from '../Imp/Footer';
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Userfront from "@userfront/react";
import NavigationBar from '../Imp/NavigationBar';


export default function BlogDetails() {
    // const auth = getAuth();
    const [content, setContent] = useState(null);
    const { id } = useParams();
    
    // const roleAdmin = Userfront.user.hasRole("admin");
    const roleMlt = Userfront.user.hasRole("member");
    // const roleUser = !(roleMlt && roleAdmin);


    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       //console.log("user signed In");
    //     } else {
    //         //console.log("user signed Out");
    //     }
    //   });


    useEffect(() => {
        axios.get("https://lab-sys.herokuapp.com/blogList")
        .then((response) => {
            setContent(response.data)
            //console.log(response.data)
        })
        
      }, [])
      if (!content) return null;

  return (
<div>

{/* Navigation Bar */}
<NavigationBar/> 

{/* Blog Section */}
<div>
    {content.filter(cnt => cnt._id === id )
    .map(cDetails => (
        <div key={cDetails._id}>
            <div className='container mt-5 mb-4 p-4'> 
                <div className='container bg-light mt-3 p-3'>
                    <h2 className=' bg-light mt-3'> {cDetails.blogTitle} </h2> 
                    <div className=' bg-light mt-3 text-muted fst-italic px-4'>  - By {cDetails.blogAuthor}</div>
                </div>
                <div className='container mt-5'>
                    {/* <Editor
                    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
                    disabled={true}
                    initialValue={cDetails.blogContent}
                    
                    init={{                       
                        height: 500,
                        menubar: true,
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                /> */}

              {/* {convert(cDetails.blogContent)} */}
{/* {tinymce.get(cDetails.blogContent).getContent()} */}
<div style={{opacity:0.9}} dangerouslySetInnerHTML={{__html: cDetails.blogContent }} />

                </div> 

            { !roleMlt ? <div></div> : <button className='btn btn-primary btn-sm text-light mt-3 mx-2'>
                <Link className=' text-light text-decoration-none ' to={`/blog/${cDetails._id}/edit`}>Edit Blog Content</Link>
            </button>}  


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
