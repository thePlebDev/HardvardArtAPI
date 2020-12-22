import React,{useState} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

import Accordian from '../Accordian'

import useInput from '../../Hooks/UseInput'

const Container = styled.form`
  position:relative;
  @media screen and (min-width: 600px){
    display:flex;
    align-items:center;
    position:absolute;
    width:30%;
    left:35%;
  }

`

const SearchContainer = styled.span`
    position:absolute;
    right:0;
`
const Input = styled.input`

@media screen and (min-width: 600px){
  padding:10px;
  width:120%;
}
`

const SearchInput =()=>{

  const {handleChange,handleSubmit,state} = useInput()

  return(
    <Container onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="search"/>
      <Input type="text" id="search" name="search" placeholder='Search Here' value={state.search} onChange={(e)=>handleChange(e)}/>
      <SearchContainer onClick={(e)=>{handleSubmit(e)}}>
        <SearchIcon/>
      </SearchContainer>
      <Accordian />
    </Container>
  )
}

export default SearchInput
