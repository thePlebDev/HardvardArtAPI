import React from 'react';
import styled from 'styled-components'

import NotFound from '../NotFound'

const Container = styled.div`

  width:170px;
  height:170px;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.5);
  border-radius:5px;
  background-color:white;
  cursor:pointer;
  transition:all 0.35s;
  text-align:center;
  &:hover{
    box-shadow: 0 5px 60px 0 rgba(0,0,0,.5);
    transform:scale(1.1);
  }
`

const H5 =styled.h5`
  margin-bottom:0px;
  color:#6b6b6b;
  font-size:14px;

  &::after{
    content:'';
    border-bottom:1px solid #6b6b6b;;
    width:80px;
    display:block;
    margin:0 auto;
  }
`





const TinyImages = ({people,date,classification,title})=>{


  return(
    <Container>
      <H5>Title:</H5>
      <h5>{title}</h5>

    </Container>
  )
}

export default TinyImages
