import {useState,useEffect} from 'react';
import axios from 'axios';

const useHomeImages =()=>{
  const [data,setData] = useState('')

  useEffect(()=>{
    axios.get('https://api.harvardartmuseums.org/image?apikey=f62650dc-ef26-4d8a-ace1-cf92860dcfb1')
    .then(info=>setData(info.data.records))
    .catch(error=>console.log('there was an error' + error))
  },[])

  return{
    data
  }


}

export default useHomeImages
