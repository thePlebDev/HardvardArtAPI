import {useEffect} from 'react';

const useClickDetection =(ref,setState)=>{


  useEffect(()=>{
    const handleClick = (e)=>{
      if(ref.current.contains(e.target)){
        return
      }else{
        setState(false)
      }
    }
    document.addEventListener("mousedown",handleClick);

    return()=>{
      document.removeEventListener("mousedown",handleClick)
    }
  },[ref,setState])

}

export default useClickDetection
