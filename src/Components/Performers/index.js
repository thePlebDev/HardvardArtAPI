import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Performers = styled.div`
  width:80%;
  margin:15px auto;
  transition:all 0.35s;
  position:relative;
  padding-left:30px;
  height:${({state})=>state ? '250px':'20px'};
  border-top:1px solid #353c42;
  border-bottom:1px solid #353c42;
  overflow:hidden;
  padding-top:2px;
  cursor:pointer;

`
const Arrow = styled.div`
  position:absolute;
  left:0;
  top:0;
  display:flex;
  align-items:center;
  transition:all 0.35s;
  transform-origin:center center;
  transform:${({state})=>state ? 'rotate(180deg)':'rotate(0deg)'};
`

const Name = styled.div`
  margin:5px;
`

const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:5px;

  padding-bottom:2px;

`

const Image = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
`


const Performer =({data})=>{
    const [arrow,setArrow] = useState(false);
    const [state,setState] = useState(data)

    useEffect(()=>{
      setState(data)
    },[data])


  return(
    <Performers onClick={()=>setArrow(!arrow)} state={arrow} >
      <h3 style={{marginTop:'0px'}} >Performers</h3>
      <Arrow state={arrow}>
        <ExpandLessIcon/>
      </Arrow>
        {
          state
            ?
            state.map((item,index)=>{
              return (<InfoContainer key={item.id}>
                        <Image src={item.images[3].url} alt={item.name} />
                        <Name >{item.name}</Name>
                      </InfoContainer>)
            })
            :
            <div>Performers not found</div>
        }
    </Performers>
  )
}

export default Performer
