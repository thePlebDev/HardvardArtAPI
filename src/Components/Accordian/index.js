import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MiniAccordian from '../MiniAccordian'

import useMeasure from '../../Hooks/UseMeasure'
import useClickDetection from '../../Hooks/UseClickDetection'

const Container = styled.div`
  display:flex;
  flex-direction:column;

  align-items:center;
  transition:height .25s;
  height:${({state,height})=>state ? `${height}` : '20px'};
  overflow:scroll;
  @media screen and (min-width: 600px){
    display:none;
  }
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
  useClickDetection(ref,setState)

  return(
    <Container state={state} height={height}>
    <div ref={ref}>
    <ArrowContainer onClick={()=>setState(!state)}>
      <span>Advanced Search</span>
      <Arrow state={state}>
        <KeyboardArrowUpIcon/>
      </Arrow>
      </ArrowContainer>


        <MiniAccordian title={'Person'}/>
        <MiniAccordian title={'Places'}/>
        <MiniAccordian title={'Period'}/>
      </div>
    </Container>
  )
}

export default Accordian
