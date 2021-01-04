import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position:relative;
  width:305px;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.5);
  border-radius:5px;
  background-color:white;
  cursor:pointer;
  transition:all 0.35s;
  text-align:center;
  transform:scale(1);
  transition:all .35s;

  &:hover{
    transform:scale(1.1);
    box-shadow: 0 5px 35px 0 rgba(0,0,0,.5);
    z-index:999999;
  }

`

const Image = styled.img`
  width:100%;
  height:225px;
  display:block;
  border-radius:5px;
`

const Info = styled.div`
  position:absolute;
  left:0;
  top:0;
  background: rgba(0,0,0,0.9);
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  color:white;
  width:100%;
  height:100%;
  transition:all .35s;
  transform:scale(1);

  &:hover{
    transform:scale(1.1);
  }
`
const Title = styled.div`

`
const Date = styled.div`

`



const TinyImages = ({name,image})=>{
//console.log(image)

  return(
    <Container>
      <Image src={image} alt={name}/>

    </Container>
  )
}

export default TinyImages
