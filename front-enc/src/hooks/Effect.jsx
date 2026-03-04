import React, { useEffect,useState} from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
    useEffect(() => {
        console.log("useEffect Mounted");
    })
    useEffect(() => {
    console.log("hooks component mounted");
  },[count])
  const handleIncrement =()=>{
    setCount((prev)=>prev+1); 
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
  }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Value: {value}</h1>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  )
}

export default Effect