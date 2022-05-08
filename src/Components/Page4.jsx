import React,{useContext} from 'react'
import Context1 from '../Context1';

export default function Page4() {
    const {color,val}=useContext(Context1)
  return (
    <div style={{color:color}}>Page4
    {val}</div>
  )
}
