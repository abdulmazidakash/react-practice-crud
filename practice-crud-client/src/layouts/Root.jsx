import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
	<div>
		<Navbar/>
		<div className='flex items-center justify-center my-8'>
			<Outlet/>
		</div>
	</div>
  )
}
