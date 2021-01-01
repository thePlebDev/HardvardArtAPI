import React from 'react';

import useHomeImages from '../../Hooks/UseHomeImages'
import ImageContainer from '../ImageContainer'


const Images =()=>{
  const {data} = useHomeImages()






  return(
    <div>
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
    </div>
  )
}

export default Images
