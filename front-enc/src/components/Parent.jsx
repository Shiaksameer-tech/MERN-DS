import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div><Child name="Sam"  age={20} isActive={true}
    Food={["pasta","momos","Dosa"]}
    contact={{
      mobile:6303760997,
      email:"Sameer@gmail.com"
    }}/>
    <Child name="vivek"  age={20} isActive={true}
    Food={["pongal","momos","Dosa"]}
    contact={{
      mobile:6303760998,
      email:"Vivek@gmail.com"
    }}/>
    </div>
  )
}

export default Parent