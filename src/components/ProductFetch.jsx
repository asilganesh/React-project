import React, {useEffect, useState} from 'react'
// import React from 'react'
// import {useDispatch} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductFetch() {

  const [data,setData]=useState([])
  const[input,setInput]=useState()
    // const dispatch=useDispatch();
    // const productStore=useSelector((state)=>state);
//     const apiFetch=async()=>{
//         const response = await fetch(`https://fakestoreapi.com/products`,{method:'GET'})
//         console.log(response)
//         const data=await response.json();
//         console.log(data)
//         dispatchEvent(GETProductsCreator(data))
// }
// useEffect(function(){
//     apiFetch();
// },[])

const options = {
  method: "GET",
  url: "https://live-tv-api1.p.rapidapi.com/tv",
  headers: {
    "X-RapidAPI-Key": "f306cc741dmsha55ae8fb8a69775p1f8f4fjsn3cd1c91b3b46",
    "X-RapidAPI-Host": "live-tv-api1.p.rapidapi.com",
  },
};

useEffect(() => {
  fetchData();
}, []);

function fetchData() {
  axios
    .request(options)
    .then((data)=>{
      console.log(data)
      setData(data.data)
    }
      )
    .catch(function (error) {
      console.error(error);
    });
    console.log(data)
}

function filterData(event) {
  const searchInput = event.target.value;
  const searchTerm = searchInput.toLowerCase();

  const filteredData = data.filter(item =>
      item.description.toLowerCase().includes(searchTerm) 
  );
  setData(filteredData)
}

const handleOnline=(type)=>{
  debugger;
let onlineData=data.filter(value=>{
  return value.status==type

})
setData(onlineData)
console.log(onlineData)
}
  return (

    <>
    <input type="search" placeholder="search" onInput={filterData} value={input}
    style={{padding:"10px",margin:"20px",borderRadius:"15px", width:"1000px",border:'none'}}>

    </input>
    <button onclick={()=>handleOnline("Offline")}> online </button>

            <div style={{display:'grid',gridTemplateColumns:'auto auto auto',gap:'1%', justifyContent:'space-evenly'}}>


    {
      data.length>0
      ?

      data.map((val,ind)=><>

      <div className="card" style={{ width: 400 }} key={ind}>
  {/* <video width="320" height="240" controls autoPlay muted className="card-img-top" >
          <source src={val.streamUrls[0]}></source>
        </video> */}




        <iframe
        src={val.streamUrls[0]}
        width="320"
        height="240"
        
      ></iframe>

  <div className="card-body">
    <h4 className="card-title">{
function truncateAndExpandString(str, maxWords = 20) {
  str=val.description
  const words = str.split(/\s+/); // Split the input string into an array of words

  if (words.length <= maxWords) {
    return str; // No truncation needed
  }

  const truncatedWords = words.slice(0, maxWords); // Truncate to the specified maximum words
  const truncatedString = truncatedWords.join(' ') + '...'; // Append '...' for the truncated part

  return {
    truncated: truncatedString,
    full: str,
  };
}

}</h4>
    <h4 className="card-title">{val.name}</h4>

    
    <Link to={val.streamUrls[0]}  className="btn btn-primary"> Click Here</Link>

    {/* <p className="card-text">Some example text.</p> */}
    {/* <a href="#" className="btn btn-primary">
      See Profile
    </a> */}
  </div>
</div>

      {/* <div class="card"width="100px"> */}
        
        {/* <ReactPlayer url='https://www.youtube.com/embed/live_stream?channel=UChBQgieUidXV1CmDxSdRm3g&autoplay=1&mute=0' /> */}
        {/* <div card="card-body">
      <p>{val.description}</p>
       <a href={val.icon}></a>
      <h3>{val.name}</h3>
      <a href="#">{val.social.Facebook}</a>
      <h5>{val.streamUrls[0]}</h5>
      </div>
      </div> */}
      {/* <Link to={val.streamUrls[0]}> click here</Link> */}

      

      </>)
      :
      <h2>loading..</h2>
    }
    </div>
   
    </>
  )
}

export default ProductFetch