import React from 'react';
import styled from 'styled-components'

import useHomeImages from '../../Hooks/UseHomeImages'
import ImageContainer from '../ImageContainer'

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
  align-items:center;
  justify-items:center;
  margin-top:75px;
`



const Images =()=>{
  const {data} = useHomeImages()


  return(
    <Container>
      {
        data
          ?
          data.map((item,index)=>{
            console.log(item.baseimageurl)
            return<ImageContainer src={item.baseimageurl} key={item.id}/>
          })
          :
          <h1>There is no data here</h1>
      }
    </Container>
  )
}

export default Images
