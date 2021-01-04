import {useState,useEffect} from 'react';
import axios from 'axios';

const useHomeImages =()=>{
  const [data,setData] = useState('')

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_APIKEY}`)
    .then(info=>setData(info.data._embedded.events))
    .catch(error=>console.log('there was an error' + error))
  },[])

  return{
    data
  }


}

export default useHomeImages
