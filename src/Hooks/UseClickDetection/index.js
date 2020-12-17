import {useEffect} from 'react';

const useClickDetection =(ref,setState)=>{
  const handleClick = (e)=>{
    if(ref.current.contains(e.target)){
      return
    }else{
      setState(false)
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleClick);

    return()=>{
      document.removeEventListener("mousedown",handleClick)
    }
  },[])

}

export default useClickDetection
