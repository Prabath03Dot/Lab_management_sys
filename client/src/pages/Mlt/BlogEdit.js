import { Link, useNavigate, useHistory  } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Footer from '../Imp/Footer';
import { useEffect } from "react";
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import NavigationBar from "../Imp/NavigationBar";

export default function BlogEdit() {
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const [isError, setError] = useState(null);
    const [blogTitle, setBlogTitle] = useState("Melanina");
    const [blogAuthor, setBlogAuthor] = useState("james B");
    const [blogContent, setBlogContent] = useState();
    const [value, setValue] = useState();


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
            //setContent(editorRef.current.getContent());
            setBlogContent(editorRef.current.getContent())
        }

        try{
            await axios.post('https://lab-sys.herokuapp.com/createBlog',{
                blogTitle,
                blogAuthor,
                blogContent
            } )
            .then(res => {
              //console.log(blogTitle + 'Hri');
              //console.log(blogContent)
              //alert('<div className="bg-primary">ddddddd</div>');
              //toast('Post Created')
              toast.success('Content Logged', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              //navigate('/blog');            
              navigate('/blogEdit');            
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
<NavigationBar/>

{/* Blog Edits */}
<div className='container mt-3'>
  <h2 className="text-center py-2">Create A Blog</h2>
  <form onSubmit={log}>
    <input className="my-4 form-control" type="text" name="title" id="title" placeholder="Blog Title" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
    <input className="my-4 form-control" type="text" name="authorName" id="authorName" placeholder="Author Name"  value={blogAuthor} onChange={e => setBlogAuthor(e.target.value)}/>
   <Editor
    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
            onInit={(evt, editor) => {
                setBlogContent(editor.getContent({format: 'html'}));
            }}
          initialValue={value}
          onEditorChange={(newValue, editor) => {
        //setValue(newValue);
        setBlogContent(editor.getContent({format: 'html'}));
      }}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount directionality'
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
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
    <button type='submit' className="btn btn-primary mt-3" >Log editor content</button>   
  </form>
</div>
{/* {blogContent} */}
<ToastContainer 
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

{/* Footer */}
<Footer></Footer>
</div>
  )
}
