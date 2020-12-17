import {useLayoutEffect,useState} from 'react'


const useMeasure =(ref)=>{
    const [height,setHeight] = useState(0)

  useLayoutEffect(()=>{
    setHeight(ref.current.clientHeight)
  },[ref])

  return{
    height
  }
}

export default useMeasure
