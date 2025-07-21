import React, { useEffect, useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))

  }, []);


const handleDelete = (id) => {
  console.log('delete id:--->', id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    background: '#fef9f1', // your custom color
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Only delete if confirmed
      fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "User has been deleted.",
              "success"
            );
            const remaining = users.filter(user=> user._id !== id);
            setUsers(remaining);
          } else {
            Swal.fire(
              "Failed!",
              "Something went wrong.",
              "error"
            );
          }
        })
        .catch((err) => {
          Swal.fire(
            "Error!",
            "Server error or invalid request.",
            "error"
          );
          console.error(err);
        });
    }
  });
};

  return (
	<div className='w-11/12 mx-auto bg-orange-100 my-16 rounded-lg font-semibold'>
    {users.length > 0 && <>
    <h2 className='text-center font-bold p-4 text-4xl'>Users: {users?.length}</h2>
    <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 rounded-lg text-wrap p-4'>
      {users.map(user=> (
        <div key={user._id} className='border shadow rounded-lg p-4 bg-white'>
            <div className='flex justify-between'>
              <div>
                <h2>Name: {user?.name}</h2>
                <h3>Email: {user?.email}</h3>
              </div>
              <div className='border items-center justify-center flex p-2 rounded-lg shadow'>
                <button onClick={()=> handleDelete(user?._id)} className='text-red-500 font-bold ml-4 cursor-pointer text-2xl'><BiTrash/></button>
                <Link to={`/update/${user?._id}`} className='text-green-500 font-bold ml-4 cursor-pointer text-2xl'><BiEdit/></Link>
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
