import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

import Performers from '../Performers'
import Venue from '../Venue'

const ImageFrame = styled.div`
  border:1px solid green;
  margin-top:20px;
  margin-left:10px;
  width: 500px;
  height:300px;
  margin-bottom:20px;
`

const SubContainer = styled.div`
  display:flex;
  align-self:start;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;

`


const LargeImage = ()=>{
  const [state,setState] = useState()



  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/1kFOv9QaGACehV_.json?apikey=${process.env.REACT_APP_APIKEY}`)
      .then(data =>console.log(data.data._embedded))
      .catch(error=>console.log('Error -->' + error))
  },[])


  return(
    <SubContainer>
         <ImageFrame/>
         <Performers/>
         <Venue/>

    </SubContainer>
  )
}

export default LargeImage
