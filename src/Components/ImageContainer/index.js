import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom'

const Image = styled.img`
  width:380px;
  cursor:pointer;
`




const ImageContainer =({src,id})=>{
  console.log(src)

  return(
    <Link to={`/image/${id}`}>
      <Image src={src} alt="artistic expression"/>
    </Link>
  )
}

export default ImageContainer
