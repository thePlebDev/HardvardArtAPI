import React from 'react';
import styled from 'styled-components'

const Link = styled.li`
  text-link: #2997ff;
  text-color:#444;
`

const navLinks =[
  {
    title:'Home',
    path:'/'
  },
  {
    title:"Blog",
    path:'/blog'
  },
  {
    title:"Contact Us",
    path:'/contact-us'
  },
  {
    title:"Search",
    path:'/login'
  },
]

const Container = styled.nav`
  height:75px;
  width:100%;
  background-color:white;
  display:flex;
  justify-content:space-between;
  color:#444;
`
const UlContainer = styled.ul`
  height:100%;
  margin-block-start:0;
  margin-block-end:0;
  padding-inline-start:0;
  display:flex;
  list-style:none;
  margin-right:20px;
`
const Title = styled.span`
  font-size: 24px;
  font-weight:400;
  display:flex;
  align-items:center;
  margin-left:30px;
`



const Navigation =()=>{
  return(
    <Container>
      <Title>H-art collection</Title>
      <UlContainer>
      {
        navLinks.map((link,index)=>{
          return(
            <li key={index}>
                {link.title}
            </li>
          )
        })
      }

      </UlContainer>
    </Container>
  )
}

export default Navigation
