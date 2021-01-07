import {useState,useEffect} from 'react';
import axios from 'axios';

import stringUtil from '../../Utils/StringUtils'

const useHomeImages =()=>{
// NEEDS TO HAVE THE STRING UTIL AS A DEPENDENCY. RIGHT NOW IT IS TIGHTLY COUPLED

  const [data,setData] = useState('')
  const [description,setDescription] = useState('')

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_APIKEY}`)
    .then(info=>setData(info.data._embedded.events[0]))
    .then(()=>setDescription(stringUtil.shortText(data.info)))
    .catch(error=>console.log('there was an error' + error))
  },[data.info])


  return{
    data,
    description
  }


}

export default useHomeImages
