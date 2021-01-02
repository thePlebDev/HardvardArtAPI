import React from 'react';
import styled from 'styled-components'

import useHomeImages from '../../Hooks/UseHomeImages'
import ImageContainer from '../ImageContainer'
import TinyImages from '../TinyImages';

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
  align-items:center;
  justify-items:start;
  margin-top:75px;
  grid-gap:5px;
`

// {
//   data
//     ?
//     data.map((item,index)=>{
//       return<ImageContainer src={item.baseimageurl} key={item.id} id={item.id}/>
//     })
//     :
//     <h1>There is no data here</h1>
// }

const SubContainer = styled.div`
  border:1px solid red;
  display:flex;
  align-self:start;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  width:100%;

`
const ImageFrame = styled.div`
  border:1px solid green;
  margin-left:10px;
  width: 380px;
  height:300px;
`
const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-self: flex-start;
  padding-left:10px;
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

const TinyImageContainer = styled.div`
  border:1px solid blue;
  display:grid;
  width:100%;
  justify-content:center;
  align-self:end;
  grid-gap:5px;
  grid-template-columns:repeat(auto-fit,150px);
`


const Images =()=>{
  console.log(process.env.REACT_APP_TITLE)
//  const {data} = useHomeImages()
  //console.log(data)


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


    </Container>
  )
}

export default Images
