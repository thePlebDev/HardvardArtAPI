import React,{useState,useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'

//make an api call with id from the

const Container = styled.div`
  margin-top:75px;
  display:flex;
  align-items:center;
  border:1px solid red;
`
const Image = styled.img`
  width:100vw;
`




const ImageIndiv =({match})=>{
  const id = match.params.id
  const [state,setState] = useState('')
  console.log(state)

  useEffect(()=>{
    axios.get(`https://api.harvardartmuseums.org/image/${id}?apikey=f62650dc-ef26-4d8a-ace1-cf92860dcfb1`)
      .then(data=>setState(data.data))
      .catch(error =>'error ---> ' + error)

  },[id])

  return(
    <Container>
      {
        state
          ?
        <Image src={state.baseimageurl} alt="artistic expression"/>
          :
        <div>Something went wrong</div>
      }

    </Container>

  )
}

export default ImageIndiv
