import React,{useState} from 'react';
import styled from 'styled-components'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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



const Performer =()=>{
    const [arrow,setArrow] = useState(false);
  return(
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
  )
}

export default Performer
