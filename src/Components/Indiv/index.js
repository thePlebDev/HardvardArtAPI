import React,{useEffect,setState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  margin-top:75px;
  border:1px solid red;
  background-color:rgb(2,108,223);
  display:grid;
  height:200px;


  @media screen and (min-width:1024px){
    grid-template-columns: minmax(24px,1fr) minmax(auto, 906px) 48px 294px minmax(24px, 1fr);
      grid-template-areas: ". info . image .";
  };

  @media screen and (max-width:1024px){
    grid-template-columns:24px 1fr 48px 224px 24px;
    grid-template-areas:"info info info image image";
  };

  @media  screen and (max-width:450px){
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr 1fr;
    grid-template-areas:
    "image"
    "image"
    "info";
  };


`

const Image = styled.div`
  border:1px solid red;
  grid-area:image;
`

const Info = styled.div`
  border:1px solid red;
  grid-area:info;
`


const Indiv =({match:{params:{id}}})=>{
  console.log(id)

  // useEffect(()=>{
  //   axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.REACT_APP_APIKEY}`)
  //     .then(data=>console.log(data.data._embedded))
  //     .catch(error =>console.log('error --> ' + error))
  // },[id])

  return(
    <Container>
      <Info>another</Info>
      <Image>another</Image>

    </Container>
  )
}


export default Indiv
