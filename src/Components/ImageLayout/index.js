import React from 'react';
import styled from 'styled-components'

import TinyImages from '../TinyImages';


const TinyImageContainer = styled.div`
  border:1px solid blue;
  display:grid;
  width:100%;
  justify-content:center;
  align-self:start;
  grid-gap:5px;
  grid-template-columns:repeat(auto-fit,150px);
`


const ImageLayout = ()=>{


  return(
    <TinyImageContainer>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
      <TinyImages/>
    </TinyImageContainer>
  )
}

export default ImageLayout
