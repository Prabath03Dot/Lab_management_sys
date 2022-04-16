import React,{useEffect} from 'react'
import Footerr from './Footer'
import NavigationBar from './NavigationBar'
// import '../../../.env'
import axios  from 'axios'


export default function News() {
const [news, setNews] = React.useState();
      //User Object Post Request
      //console.log(process.env.REACT_APP_UNSPLASH_KEY)
  useEffect(() => {
    axios.get(process.env.REACT_APP_UNSPLASH_KEY)
    .then((response) => {
        setNews(response.data);
        //console.log(response.data);
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
        <img src={data.image} className="img-fluid rounded-start" alt={data.image} 
        style={{height: '100%', backgroundSize: 'cover' }}/>
        </div>
        <div className="col-md-8 bg-light ">
        <div className="card-body p-4">
            <h3 className="card-title mb-4">{data.title}</h3> 
            <p className="card-text">{data.content}</p>
            <p className="card-text"><small className="text-muted"> Published {data.publishedAt} </small></p>
            <p className="card-text"><small className="text-muted"> {data.source.name} </small></p>
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
