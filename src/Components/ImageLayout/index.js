import React from 'react';
import styled from 'styled-components';


import TinyImages from '../TinyImages';


const TinyImageContainer = styled.div`
  height:85vh;
  display:grid;
  width:100%;
  justify-content:center;
  align-items:center;
  grid-gap:20px;
  grid-template-columns:repeat(auto-fit,305px);
`


const ImageLayout = ({info})=>{
  //console.log(info)

  return(
    <TinyImageContainer>
      {
        info
         ?
         info.map((item,index)=>{

           return <TinyImages key={item.id} name={item.name} date={item.dates.start.localDate} image={item.images[1].url}/>
         })
         :
         <div>Nothing yet</div>

      }
    </TinyImageContainer>
  )
}

export default ImageLayout
