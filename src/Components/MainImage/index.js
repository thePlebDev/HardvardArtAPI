import React,{useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import useHomeImages from '../../Hooks/UseHomeImages'
import stringUtil from '../../Utils/StringUtils'

const Container = styled.div`
  width:80%;
  margin:0 auto;
  margin-top:75px;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
`
const Image = styled.img`
margin:10px auto;
width:80%;
display:block;
cursor:pointer;

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
  margin-top:5px;
  cursor:pointer;
  height:32px;
  font-weight:600;
  border:none;
  border-radius:2px;
  text-decoration:none;
  transition:all 0.25s;

  &:hover{
    transform:scale(1.1);
  }
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
const SubContainer = styled.div`
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.5);
  margin-top:20%;
  transition:all 0.35s;
  @media only screen and (min-width:700px){
    margin-top:10%;
  }

  &:hover{
    transform:scale(1.01);
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.5);
  }
`

const MainImage =()=>{
  const {data,description} = useHomeImages()
  console.log(data)



  return(
    <Container>

      {
        data
          ?
          <SubContainer>
            <Link to={`/${data.id}`}>
              <Image src={data.images[0].url} alt={description}/>
            </Link>
              <InfoContainer>
                <Title>{data.name}</Title>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <TicketButton>Ticket Information</TicketButton>
                </a>
              </InfoContainer>
              <Description>{description}</Description>
          </SubContainer>
          :
          <h1>Nothing yet but we are working on it</h1>

      }

    </Container>
  )
}

export default MainImage
