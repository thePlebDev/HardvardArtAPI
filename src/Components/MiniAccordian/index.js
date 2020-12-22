import React,{useState} from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Container = styled.div`
    text-align:center;
    border:2px solid #e6e6e6;
    margin:10px 3px;

    transition:.25s all;
    justify-content:space-between;
    height:${({state})=>state ? '100px' :'25px'};
`
const ArrowContainer = styled.span`
  transition: .25s all;
  transform:${({state})=>state ? 'rotate(180deg)' :'rotate(0deg)'};
`


const MiniAccordian =({title})=>{
  const [state,setState] = useState(false)

  return(
    <Container state={state}  onClick={()=>{setState(!state)}}>
    <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
      {title}
        <ArrowContainer state={state}>
          <KeyboardArrowUpIcon/>
        </ArrowContainer>
      </div>
    </Container>
  )
}


export default MiniAccordian
