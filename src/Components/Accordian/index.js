import React,{useState,useRef,useLayoutEffect} from 'react';
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useMeasure from '../../Hooks/UseMeasure'

const Container = styled.div`
  border:1px solid red;
  display:flex;
  flex-direction:column;
  align-items:center;
  transition:height .25s;
  height:${({state,height})=>state ? `${height}px` : '20px'};
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
  const ref = useRef(null)
  const {height} = useMeasure(ref)


  return(
    <Container state={state} height={height}>
    <div ref={ref}>
    <ArrowContainer onClick={()=>setState(!state)}>
      <span>Advanced Search</span>
      <Arrow state={state}>
        <KeyboardArrowUpIcon/>
      </Arrow>
      </ArrowContainer>


        <div>Period</div>
        <div>Place</div>
        <div>Century</div>
      </div>
    </Container>
  )
}

export default Accordian
