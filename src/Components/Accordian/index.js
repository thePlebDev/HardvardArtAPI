import React,{useState} from 'react';
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Container = styled.div`
  border:1px solid red;
  display:flex;
  flex-direction:column;
  align-items:center;
  transition:all .25s;
  height:${({state})=>state ? "100px" : '20px'};
  overflow:hidden;


`
const Arrow = styled.span`

  transition:all .25s;
  transform:${({state})=>state ? 'rotate(180deg)': 'rotate(0deg)'};
`
const ArrowContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`


const Accordian =()=>{
  const [state,setState] = useState(false)

  return(
    <Container state={state}>
    <ArrowContainer onClick={()=>setState(!state)}>
      <span>Advanced Search</span>
      <Arrow state={state}>
        <KeyboardArrowUpIcon/>
      </Arrow>
      </ArrowContainer>

      <div>Period</div>
      <div>Place</div>
      <div>Century</div>
    </Container>
  )
}

export default Accordian
