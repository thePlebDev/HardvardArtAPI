import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  border:1px solid red;
  width:80%;
  margin:0 auto;
  margin-top:75px;
`
const ImagePlaceHolder = styled.div`
  width:80%;
  margin 10px auto;
  border:1px solid red;
  height:600px;
`
const Title = styled.div`
  font-size:24px;
  font-weight:24px;
  padding-bottom:4px;
  color:rgb(53, 60, 66);
`
const TicketButton = styled.button`
  color:white;
  background-color:rgb(2, 108, 223);
  padding:0 12px;
  cursor:pointer;
  height:32px;
  font-weight:600;
  border:none;
  border-radius:2px;
`

const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  width:80%;
  margin:0 auto;
  justify-content:space-between;
`
const Description = styled.div`
  font-size:16px;
  font-weight:400;
  color:rgb(38,38,38);
  width:80%;
  margin:5px auto;
  line-height:1.5;
`

const MainImage =()=>{

  return(
    <Container>
      <ImagePlaceHolder/>
      <InfoContainer>
        <Title>Dude Perfect</Title>
        <TicketButton>Ticket Information</TicketButton>
      </InfoContainer>
      <Description>Experience the Dudes up close when they bring the action right into the audience.</Description>
    </Container>
  )
}

export default MainImage
