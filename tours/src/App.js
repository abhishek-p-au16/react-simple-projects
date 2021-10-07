import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] =useState(true)
  const [tours,setTour] = useState([]);
  const fetchTours = async()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTour(tours);  
    console.log(tours);

    }
    catch(err){
      console.log(err);

    }
  }

  useEffect(()=>{
    fetchTours();
  },[]);


  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  )
}

export default App
