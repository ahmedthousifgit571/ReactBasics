import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>hello im component:{count}</h1>
    </div>
  )
}

export default Counter