import React,{useState} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

import Accordian from '../Accordian'

import useInput from '../../Hooks/UseInput'

const Container = styled.form`
  position:relative;
`

const SearchContainer = styled.span`
    position:absolute;
    right:0;
`

const SearchInput =()=>{

  const {handleChange,handleSubmit,state} = useInput()

  return(
    <Container onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="search"/>
      <input type="text" id="search" name="search" value={state.search} onChange={(e)=>handleChange(e)}/>
      <SearchContainer onClick={(e)=>{handleSubmit(e)}}>
        <SearchIcon/>
      </SearchContainer>
      <Accordian />
    </Container>
  )
}

export default SearchInput
