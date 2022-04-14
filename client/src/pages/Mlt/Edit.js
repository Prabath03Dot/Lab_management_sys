import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState, useRef } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Footer from '../Imp/Footer';
import React, {useEffect} from 'react';
import axios from 'axios';
import { Link , useParams,useNavigate } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import NavigationBar from '../Imp/NavigationBar';

export default function Edit() {
    const editorRef = useRef(null);
    
    const { id } = useParams();
    const [newBlogTitle, setNewBlogTitle] = useState('');
    const [newBlogAuthor, setNewBlogAuthor] = useState('');
    const [newBlogContent, setNewBlogContent] = useState('');
    const navigate = useNavigate();
    const [content, setContent] = useState();

    useEffect(() => {
        axios.get("https://lab-sys.herokuapp.com/blogList")
        .then((response) => {
            setContent(response.data)
            setNewBlogTitle(response.data.blogTitle)
            setNewBlogAuthor(response.data.blogAuthor)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
            })
    }, [])

    const handleDelete = (id) => {
        alert("Are you shure want the delete?")
        axios.delete(`https://lab-sys.herokuapp.com/delete/${id}`)
        .then(res => {
            console.log(res.data)
            navigate('/blog')
        }).catch((error) => {
            console.log(error)
            })
    }

    const log = async(e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setNewBlogContent(editorRef.current.getContent())
        }
        try{
            await axios.put(`https://lab-sys.herokuapp.com/updateblog/${id}`, {
                newBlogTitle,
                newBlogAuthor,
                newBlogContent
            }).then(response => {
                console.log(response.data);
                console.log('Blog successfully updated')
                //setContent(response.data)
                navigate('/blog')
            }).catch((error) => {
                console.log(error)
              })
        }catch(error){
            console.log(error);
        }
    }
     if (!content) return null;


  return (
<div>

{/* Navigation Bar */}
<NavigationBar/> 

{/* Blog Section */}
<div className="container">
    <div className='fw-bold text-center mt-3 fs-1'>Edit Content</div>
    <form onSubmit={log}>
    {content.filter(cnt => cnt._id === id )
    .map(cDetails => (
        <div key={cDetails._id}>
            <div className='container'> 
                <div className='container bg-light mt-3 p-3'>
                    <label for="Blogtitle" className="form-label mt-3">Blog Title</label>
                    <input 
                    type='text' name="title" id="Blogtitle" 
                    className=' mt-3 form-control' 
                    required
                    value={newBlogTitle} 
                    onChange={e => setNewBlogTitle(e.target.value)} 
                    placeholder={cDetails.blogTitle} />
                    <label for="BlogAuthor" className="form-label mt-3">Blog Title</label>
                    <input type='text' name="authorName" id="BlogAuthor" className=' mt-3 form-control' 
                    value={newBlogAuthor} 
                    required
                    onChange={e => setNewBlogAuthor(e.target.value)} placeholder={cDetails.blogAuthor} />
                </div>
                <div className='container mt-5'>
                    <Editor
                    apiKey="jh0lc7p3nt1p5pp3egexvy7hvfw953p2uj0wxddyqfxmeosf"
                    onInit={(evt, editor) => {
                    setNewBlogContent(editor.getContent({format: 'html'}));
                    }}
                    required
                    initialValue={cDetails.blogContent}
                    onEditorChange={(newValue, editor) => {
                    //setValue(newValue);
                    setNewBlogContent(editor.getContent({format: 'html'}));
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
                </div> 

            </div>
        </div>
    ) )
    }
    <button type='submit' className="btn btn-primary mt-3 mx-4" >Update editor content</button>   

    </form>
    <button onClick={() => handleDelete(id)} className='btn btn-danger text-light mt-3 mx-4'>
        Delete Blog content
    </button>
    
</div> 


{/* Footer */}
<Footer></Footer>
    </div>
  )
}
