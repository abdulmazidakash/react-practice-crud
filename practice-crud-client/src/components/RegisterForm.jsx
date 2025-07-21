import React from "react";
import { FaUser, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const submittedData = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
      gender: form.gender.value,
    };

    console.log("Submitted Data:--->", submittedData);
	fetch(`http://localhost:5000/register-post`,{
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(submittedData)
	})
	.then((res)=> res.json())
	.then((data)=> {
		console.log('register submit data:--->',data);
    if(data.acknowledged === true){
            Swal.fire({
              // position: "top-center",
              icon: "success",
              title: "Register added successfully",
              showConfirmButton: false,
              timer: 1500
              });
          }
	})
    form.reset(); // optional: reset form after submit
    navigate('/register-get')
  };

  return (
    <div className="w-6/12 mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="flex-1 outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 outline-none"
              required
            />
          </div>
        </div>

        {/* Role (Select Field) */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Role</label>
          <div className="relative">
            <select
              name="role"
              className="w-full border border-gray-300 rounded px-3 py-2 appearance-none"
              required
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Gender (Radio Field) */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Gender</label>
          <div className="flex items-center space-x-4">

            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="male" required />
              <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="female" />
              <span>Female</span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="other" />
              <span>Other</span>
            </label>

          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
