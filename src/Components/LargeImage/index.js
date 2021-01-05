import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ImageFrame = styled.div`
  border:1px solid green;
  margin-top:20px;
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
  display:flex;
  align-self:start;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;

`
const Image = styled.img`
  border-radius:5px;
  border:1px solid red;
  width:500px;
`
const Performers = styled.div`
  width:80%;
  margin:15px auto;
  transition:all 0.35s;
  position:relative;
  padding-left:30px;
  height:${({state})=>state ? '100px':'20px'};
  border-top:1px solid #353c42;
  border-bottom:1px solid #353c42;
  overflow:hidden;
  padding-top:2px;
  cursor:pointer;

`
const Arrow = styled.div`
  position:absolute;
  left:0;
  top:0;
  display:flex;
  align-items:center;
  transition:all 0.35s;
  transform-origin:center center;
  transform:${({state})=>state ? 'rotate(180deg)':'rotate(0deg)'};
`




const LargeImage = ()=>{
  const [state,setState] = useState()
  const [arrow,setArrow] = useState(false);
  const [arrow2,setArrow2] = useState(false)
  const [info,setInfo] = useState()

  useEffect(()=>{
    axios.get(`https://app.ticketmaster.com/discovery/v2/events/1kFOv9QaGACehV_.json?apikey=${process.env.REACT_APP_APIKEY}`)
      .then(data =>console.log(data.data._embedded))
      .catch(error=>console.log('Error -->' + error))
  },[])


  return(
    <SubContainer>
         <ImageFrame/>

        <Performers onClick={()=>setArrow(!arrow)} state={arrow}>
          Performers
          <Arrow state={arrow}>
            <ExpandLessIcon/>
          </Arrow>
          <div>
            adele
          </div>
          <div>
            Mark antony
          </div>
        </Performers>

        <Performers onClick={()=>setArrow2(!arrow2)} state={arrow2}>
          Venue Details
          <Arrow state={arrow2}>
            <ExpandLessIcon/>
          </Arrow>
        </Performers>

    </SubContainer>
  )
}

export default LargeImage
