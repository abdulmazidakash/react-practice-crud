import { BiHome } from "react-icons/bi"
import { CiGrid31 } from "react-icons/ci"
import { GiBrain } from "react-icons/gi"
import { Link, useLocation} from "react-router"


export default function Navbar() {
  const {pathname} = useLocation();
  console.log('pathname: --->', pathname);

  return (
	<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <Link
              to={"/"}
              className="border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"
            >
              {" "}
              <BiHome size={18}></BiHome> Home
            </Link>
          </li>
          <li>
            <Link
              to={"/create"}
              className="border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"
            >
              {" "}
              <GiBrain size={18}></GiBrain> Create
            </Link>
          </li>
          <li>
            <Link
              to={"/creations"}
              className="border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"
            >
              {" "}
              <CiGrid31 size={18} /> Creations
            </Link>
          </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
            <Link
              to={"/"}
              className={pathname === "/" ? "bg-green-500 font-bold  border rounded-full border-gray-200 shadow px-4 py-2 text-white" : "border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"}
            >
              {" "}
              <BiHome size={18}></BiHome> Home
            </Link>
          </li>
          <li>
            <Link
              to={"/users"}
              className={pathname === "/users" ? "bg-green-500 font-bold  border rounded-full border-gray-200 shadow px-4 py-2 text-white" : "border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"}
            >
              {" "}
              <GiBrain size={18}></GiBrain> User
            </Link>
          </li>
          <li>
            <Link
              to={"/register-form"}
              className={pathname === "/register-form" ? "bg-green-500 font-bold  border rounded-full border-gray-200 shadow px-4 py-2 text-white" : "border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"}
            >
              {" "}
              <CiGrid31 size={18} /> Select Form
            </Link>
          </li>
          <li>
            <Link
              to={"/register-get"}
              className={pathname === "/register-get" ? "bg-green-500 font-bold  border rounded-full border-gray-200 shadow px-4 py-2 text-white" : "border rounded-full border-gray-200 shadow px-4 py-2 bg-base-100"}
            >
              {" "}
              <CiGrid31 size={18} /> Register Get
            </Link>
          </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}
