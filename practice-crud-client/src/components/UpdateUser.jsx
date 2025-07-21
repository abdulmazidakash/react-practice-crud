import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

export default function UpdateUser() {
	const navigate = useNavigate();
	const {id} = useParams();
	console.log(`update params:---> ${id}`);
	const [user, setUser] = useState([]);

	useEffect(()=>{
		fetch(`http://localhost:5000/user-detail/${id}`)
		.then((res)=> res.json())
		.then((data)=> {
			setUser(data)
		})
	}, [id]);

	const handleUpdate = (e)=>{
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const updatedUser = {name, email};

		console.log(`update user data:--->`, updatedUser);

		fetch(`http://localhost:5000/user-update/${id}`,{
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updatedUser)
		})
		.then((res)=> res.json())
		.then((data)=>{
			console.log(data);
			if(data.modifiedCount > 0){
				Swal.fire({
				// position: "top-center",
				icon: "success",
				title: "User Updated successfully",
				showConfirmButton: false,
				timer: 1500
				});
			}
			navigate('/users')
		})
	}
  return (
	<div>
		<h2 className='font-bold text-2xl my-4 text-center text-orange-600'>Update user name: {user.name}</h2>

		<form onSubmit={handleUpdate} className='flex justify-center items-center'>
			<fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
				<legend className="fieldset-legend">Update</legend>

				<label className="label">Name</label>
				<input defaultValue={user?.name} name="name" type="text" className="input" placeholder="enter your name" />

				<label className="label">Email</label>
				<input defaultValue={user?.email} name="email" type="email" className="input" placeholder="enter your email" />

				<button className="btn btn-neutral mt-4">Update</button>
			</fieldset>
		</form>
	</div>
  )
}
