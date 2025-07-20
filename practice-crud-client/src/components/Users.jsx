import React, { useEffect, useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))

  }, [])
  return (
	<div className='w-11/12 mx-auto bg-orange-500 my-16 rounded-lg'>
    {users.length > 0 && <>
    <h2 className='text-center font-bold p-4 text-4xl'>Users: {users.length}</h2>
    <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 rounded-lg text-wrap p-4'>
      {users.map(user=> (
        <div key={user._id} className='border shadow rounded-lg p-4 bg-white'>
            <div className='flex justify-between'>
              <div>
                <h2>Name: {user.name}</h2>
                <h3>Email: {user.email}</h3>
              </div>
              <div className='border p-2 rounded-lg shadow'>
                <button className='text-red-500 font-bold ml-4 cursor-pointer text-2xl'><BiTrash/></button>
                <button className='text-green-500 font-bold ml-4 cursor-pointer text-2xl'><BiEdit/></button>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>}

    {users.length < 0 && <>
      <h2 className='font-bold text-red-600 text-2xl'>No users Available</h2>
    </>}
  </div>
  )
}
