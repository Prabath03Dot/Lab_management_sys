import React,{useEffect} from 'react'
import Footerr from './Footer'
import NavigationBar from './NavigationBar'
import img from '../../images/chemistry.jpg'
import NavBar from './Navbar'
import axios  from 'axios'
import { Link } from 'react-router-dom'


export default function News() {
const [news, setNews] = React.useState();
      //User Object Post Request
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9ee3c44038ca4876b022a0ce1372512e")
    .then((response) => {
        setNews(response.data);
        console.log(response.data);
    }
    )     
  },[])

  return (
<div>
<NavigationBar/>
<div className='p-4 container'>
<div className='text-secondary fs-1 mt-5 mb-2'>Top Healthcare News Headlines</div>
{!news ? <div className='text-center fs-3 mt-5 pt-5 text-secondary' ><div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> : <div className='container' >{news.articles.map(data => (
    <div className='container'>
    <div className='mt-4 mx-auto'>
    <div className="card mb-4" >
    <div className="row g-0">
        <div className="col-md-4">
        <img src={data.urlToImage} className="img-fluid rounded-start" alt={data.urlToImage} 
        style={{height: '100%', backgroundSize: 'cover' }}/>
        </div>
        <div className="col-md-8 bg-light ">
        <div className="card-body p-4">
            <h3 className="card-title mb-4">{data.title}</h3> 
            <p className="card-text">{data.description}</p>
            <p className="card-text"><small className="text-muted"> Published {data.publishedAt} </small></p>
            <p className="card-text"><small className="text-muted"> {data.author} </small></p>
            <a href={data.url} className='text-decoration-none' target="_blank" rel="noopener"> Source <i class="bi bi-box-arrow-up-right"></i></a>
        </div>
        </div>
    </div>
    </div>
</div> 
    </div>
) )}</div> }

</div>

<Footerr></Footerr>
</div>
  )
}
