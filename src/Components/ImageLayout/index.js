import React from 'react';
import styled from 'styled-components';


import TinyImages from '../TinyImages';


const TinyImageContainer = styled.div`
  border:1px solid blue;
  display:grid;
  width:100%;
  justify-content:center;
  align-self:start;
  grid-gap:5px;
  grid-template-columns:repeat(auto-fit,170px);
`


const ImageLayout = ({info})=>{
  //console.log(info)

  return(
    <TinyImageContainer>
      {
        info
         ?
         info.map((item,index)=>{

           return <TinyImages key={item.id}
            people={item.people[0]} date={item.dateend} classification={item.classification} title={item.title}/>
         })
         :
         <div>Nothing yet</div>

      }
    </TinyImageContainer>
  )
}

export default ImageLayout
