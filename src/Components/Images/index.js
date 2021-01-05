import React from 'react';
import styled from 'styled-components'

import useHomeImages from '../../Hooks/UseHomeImages'

import ImageLayout from '../ImageLayout';
import LargeImage from '../LargeImage';


const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
  align-items:center;
  justify-items:start;
  margin-top:75px;
  grid-gap:5px;
`

const Images =()=>{
  //console.log(process.env.REACT_APP_TITLE)
  const {data} = useHomeImages()


  return(
    <Container>
      <LargeImage/>
      <ImageLayout info={data}/>
    </Container>
  )
}

export default Images
