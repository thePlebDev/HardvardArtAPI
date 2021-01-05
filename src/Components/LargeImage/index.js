import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ImageFrame = styled.div`
  border:1px solid green;
  margin-left:10px;
  width: 500px;
  height:300px;
  margin-bottom:20px;
`
const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-self: flex-start;
  margin-left:20px;

`
const Title = styled.h5`
margin-top:0px;
margin-bottom:0px;
color:#6b6b6b;
font-size:14px;

`
const TitleInfo = styled.h3`
  margin-top:0px;
  color:#2b2b2b;
`
const SubContainer = styled.div`
  border-right:1px solid red;
  display:flex;
  align-self:start;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:85vh;

`
const Image = styled.img`
  border-radius:5px;
  border:1px solid red;
  width:500px;
`



const LargeImage = ()=>{
  const [state,setState] = useState()
  const [info,setInfo] = useState()

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/1kFOv9QaGACehV_.json?apikey=${process.env.REACT_APP_APIKEY}`)
      .then(data =>console.log(data.data._embedded))
      .catch(error=>console.log('Error -->' + error))
  },[])


  return(
    <SubContainer>
      {
        info
         ?
         <>
         <Image src={info.images[4].url} alt={info.name}/>
         <Title>Title</Title>
         <TitleInfo>Sweet home Alabama</TitleInfo>
         <Title>Date</Title>
         <TitleInfo>Sweet home Alabama</TitleInfo>
         </>
         :
         <ImageFrame/>
      }
      <Info>

        <Title>People</Title>
        <TitleInfo>George Lucas</TitleInfo>
        <Title>Date</Title>
        <TitleInfo>7th century</TitleInfo>
        <Title>Classification</Title>
        <TitleInfo>Drawing</TitleInfo>
      </Info>
    </SubContainer>
  )
}

export default LargeImage
