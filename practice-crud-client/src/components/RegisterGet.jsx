import React, { useEffect, useState } from 'react'

export default function RegisterGet() {
	const [registers, setRegisters] = useState([]);

	useEffect(()=>{
		fetch(`http://localhost:5000/register-get`)
		.then((res)=> res.json())
		.then((data)=>{
			console.log('register data get:--->', data);
			setRegisters(data);
		})
	}, []);

  return (
	<div className='w-11/12 mx-auto my-8 border border-gray-300 shadow rounded-lg p-4'>
		<h2 className='font-bold my-8 text-4xl text-center bg-green-500 text-white p-2 rounded-lg text-wrap'>Register: {registers?.length}</h2>
		<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-2'>
			{
			registers.map((register)=>(
				<div key={register._id} className='shadow border border-gray-300 bg-green-500 p-4 font-semibold rounded-lg text-white'>
					<h2>Name: {register.name}</h2>
					<h3>Email: {register.email}</h3>
					<h3>Gender: {register.gender}</h3>
					<h3>Role: {register.role}</h3>
				</div>)
			)
		}
		</div>
	</div>
  )
}
