import { useNavigate } from "react-router";
import Swal from "sweetalert2";



export default function Home() {
	const navigate = useNavigate();

	const handleSubmit = (e)=>{
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email};

		console.log('user collection:--->', user);

		fetch('http://localhost:5000/user', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		} )
		.then((res)=> res.json())
		.then((data)=> {
			// console.log('data:',data)
			if(data.insertedId){
				Swal.fire({
					// position: "top-center",
					icon: "success",
					title: "Your added successfully",
					showConfirmButton: false,
					timer: 1500
					});
			}

		})
		.catch((error)=> console.log('error message:', error))
		form.reset();
		navigate('/users')
	}



  return (
	<form onSubmit={handleSubmit}>
		<fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Post</legend>

  <label className="label">Name</label>
  <input name="name" type="text" className="input" placeholder="enter your name" />

  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="enter your email" />



  <button className="btn btn-neutral mt-4">Submit</button>
	</fieldset>
	</form>
  )
}
