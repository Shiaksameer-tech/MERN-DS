import React from 'react'

const Child = ({name,age,isActive,Food,contact,sendMessage}) => {
  return (
    <div>
    <h1>Name : {name}</h1>
    <h1>Age : {age}</h1>
    <h2>Active Status : {isActive ? "Active" : "Inactive"}</h2>
    <h1>Fav Food</h1>
    <ul>
      {Food.map((value,index)=>(
        <li key={index}>{value}</li>
      ))}
    </ul>
    <h1>Communication</h1>
    <p>Mobile No:{contact.mobile}</p>
    <p>Email:{contact.email}</p>
    <button onClick={()=>{sendMessage("Message from child")}}>send message</button>
    </div>
    
  )
}

export default Child