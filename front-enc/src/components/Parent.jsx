import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
      <button onClick={()=>message("hello sam")}>send message</button>
      <Child name="Sam"  age={20} isActive={true}
    Food={["pasta","momos","Dosa"]}
    contact={{
      mobile:6303760997,
      email:"Sameer@gmail.com"
    }}
    sendMessage={message}/>
    <Child name="vivek"  age={20} isActive={true}
    Food={["pongal","momos","Dosa"]}
    contact={{
      mobile:6303760998,
      email:"Vivek@gmail.com"
    }}
    sendMessage={message}/>
    </div>
  )
}

export default Parent