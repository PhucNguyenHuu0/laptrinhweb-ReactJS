import React from 'react'

export default function Func_JSX_NguyenHuuPhuc() {
    const users = {
        name: "NguyenHuuPhuc",
        email: "tnh2424@gmail.com",
        age: 20
    } 
  return (
    <div>Func_JSX_NguyenHuuPhuc
    <h3>
        Welcom to, {users.name} - {users.age} 
    </h3>
    <hr/>
    
    </div>
  )
}
