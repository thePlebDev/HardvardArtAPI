import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';


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
    top:30px;
    @media screen and (min-width: 600px){
      top:10px;
    }
`
const Input = styled.input`
  margin-top:30px;
@media screen and (min-width: 600px){
  margin-top:0;
  padding:10px;
  width:120%;
}
`

const SearchInput =()=>{

  const {handleChange,handleSubmit,state} = useInput()

  return(
    <Container onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="search"/>
      <Input type="text" id="search" name="search" placeholder='Search by keyword' value={state.search} onChange={(e)=>handleChange(e)}/>
      <SearchContainer onClick={(e)=>{handleSubmit(e)}}>
        <SearchIcon/>
      </SearchContainer>
    </Container>
  )
}

export default SearchInput
