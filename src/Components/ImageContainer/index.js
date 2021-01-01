import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
  width:380px;
`




const ImageContainer =({src})=>{

  return(
    <Image src={src} alt="artistic expression"/>
  )
}

export default ImageContainer
