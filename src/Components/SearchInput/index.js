import React,{useState} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

import useInput from '../../Hooks/UseInput'

const Container = styled.form`
  position:relative;
`

const SearchContainer = styled.span`
    position:absolute;
    right:0;
`
another one
const SearchInput =()=>{

  const {handleChange,handleSubmit,state} = useInput()

  return(
    <Container onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="search"/>
      <input type="text" id="search" name="search" value={state.search} onChange={(e)=>handleChange(e)}/>
      <SearchContainer onClick={(e)=>{handleSubmit(e)}}>
        <SearchIcon/>
      </SearchContainer>
      <div>Advanced Search </div>
    </Container>
  )
}

export default SearchInput
