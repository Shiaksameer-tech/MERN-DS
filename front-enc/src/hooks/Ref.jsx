import React, { useEffect,useRef,useState} from 'react'

export const Ref = () => {
    const [count,setCount] = useState(0);
    const like = useRef(0);
    const inputRef = useRef(null);
    // useEffect(()=>{
    //     console.log("Coumpound Re-rendered");
    // })
    // const handleLike = () => {
    //     like.current = like.current+1;

    // }
    // Eaxmple 2
    // useEffect(()=>{
    //    like.current = like.current+1;
    //    console.log("coumpund Re-rendered");
    // })
    // example 3
    const handleClick = () =>{
        inputRef.current.focus();
        inputRef.current.style.color = "blue";
    }

    return (
    <div>
        {/* example 3 */}
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
        {/* Example 1 */}
        {/* <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Likes : {like.current}</h1>
        <button onClick={handleLike}>❤️</button> */}
        {/* example 2
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Likes : {like.current}</h1> */}
    </div>
  )
}
