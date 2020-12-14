import {useState,useEffect} from 'react'

const useInput =()=>{
  const [state,setState] = useState({search:""});

  const handleChange =(e)=>{
    const {value,name} = e.target
    setState({...state,[name]:value});
    console.log(state)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('SUBMITTED')
  }

  return{
    state,
    handleChange,
    handleSubmit
  }
}

export default useInput
