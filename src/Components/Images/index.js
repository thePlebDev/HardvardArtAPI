import React from 'react';
import styled from 'styled-components'

import useHomeImages from '../../Hooks/UseHomeImages'

import ImageLayout from '../ImageLayout'


const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
  align-items:center;
  justify-items:start;
  margin-top:75px;
  grid-gap:5px;
`

const SubContainer = styled.div`
  border-right:1px solid red;
  display:flex;
  align-self:start;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:85vh;

`
const ImageFrame = styled.div`
  border:1px solid green;
  margin-left:10px;
  width: 500px;
  height:300px;
  margin-bottom:20px;
`
const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-self: flex-start;
  margin-left:20px;

`
const Title = styled.h5`
margin-top:0px;
margin-bottom:0px;
color:#6b6b6b;
font-size:14px;

`
const TitleInfo = styled.h3`
  margin-top:0px;
  color:#2b2b2b;

`



const Images =()=>{
  //console.log(process.env.REACT_APP_TITLE)
  const {data} = useHomeImages()


  return(
    <Container>

      <SubContainer>
        <ImageFrame/>
        <Info>
          <Title>Title</Title>
          <TitleInfo>Sweet home Alabama</TitleInfo>
          <Title>People</Title>
          <TitleInfo>George Lucas</TitleInfo>
          <Title>Date</Title>
          <TitleInfo>7th century</TitleInfo>
          <Title>Classification</Title>
          <TitleInfo>Drawing</TitleInfo>
        </Info>
      </SubContainer>

      <ImageLayout info={data}/>
    </Container>
  )
}

export default Images
