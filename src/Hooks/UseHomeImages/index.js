import {useState,useEffect} from 'react';
import axios from 'axios';

const useHomeImages =()=>{
  const [data,setData] = useState('')
  const API_KEY =process.env.REACT_APP_APIKEY

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_APIKEY}`)
    .then(info=>console.log(info.data._embedded.events))
    .catch(error=>console.log('there was an error' + error))
  },[])

  return{
    data
  }


}

export default useHomeImages
