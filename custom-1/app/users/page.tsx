import React from 'react'
import ProductCard from '../components/ProductCard'

interface User {
  id:number,
  name: string
}

const UsersPage = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store'
  })
  const users: User[] = await res.json()
  console.log(users)

  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user=><li key={user.id}>{user.name}</li>)}
    </ul>
    </>

  )
}

export default UsersPage