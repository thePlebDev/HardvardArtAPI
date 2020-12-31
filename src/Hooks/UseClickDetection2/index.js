import {useEffect} from 'react';


const useClickDetection2 = (ref,ref2,setState)=>{


  useEffect(()=>{
    const handleClick = (e)=>{
      if(ref.current.contains(e.target)){
        return
      }
      else if (ref2.current.contains(e.target)) {
        return

      }else{
        setState(false)
      }
    }
    document.addEventListener("mousedown",handleClick);

    return()=>{
      document.removeEventListener("mousedown",handleClick)
    }
  },[ref,ref2,setState])


}


export default useClickDetection2
