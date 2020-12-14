import React,{useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchInput from '../SearchInput'

// text-link: #2997ff;
// text-color:#444;

const navLinks =[
  {
    title:'Home',
    path:'/'
  },
  {
    title:'Contact',
    path:'/contact'
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
  align-items:center;
  @media screen and (max-width: 600px){
    position:absolute;
    background:white;
    height:calc(100% - 75px);
    top:75px;
    flex-direction:column;
    left:${({state})=>state ? '-200px' : '0'};
    width:200px;

    transition: 300ms ease left;
  }

`
const Title = styled.span`
  font-size: 24px;
  font-weight:400;
  display:flex;
  align-items:center;
  margin-left:30px;
`
const Li = styled.li`
  text-decoration:none;
  padding:0 20px 0 20px;
  font-size:20px;
  color: :#444;
  cursor:pointer;
  margin:30px 0;

  &:hover{
    color:#2997ff;
  }

`
const Hamburger = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  @media screen and (min-width: 600px){
    display:none;
  }
`





const Navigation =({peanut=navLinks})=>{
  const [state,setState] = useState(false)
  return(
    <Container>
      <Title>H-art collection</Title>

      <UlContainer state={state}>
        <SearchInput/>
      {
        peanut.map((link,index)=>{
          return(
            <Li key={index}>
                {link.title}
            </Li>
          )
        })
      }
      </UlContainer>
      <Hamburger onClick={()=>{setState(!state)}} data-testid="hamburger">
        <MenuIcon style={{width:'40px',height:'40px'}}/>
      </Hamburger>
    </Container>
  )
}

export default Navigation
