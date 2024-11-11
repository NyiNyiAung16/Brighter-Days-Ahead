import { NavLink } from "react-router-dom";

function HeaderLinks() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/goals">Goals</NavLink>
      </li>
      <li>
        <NavLink to="/feelings">Feelings</NavLink>
      </li>
      <li>
        <NavLink to="/relaxation-corner">Relaxation</NavLink>
      </li>
    </>
  );
}

export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <HeaderLinks/>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Brighter Days Ahead</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         <HeaderLinks/>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-info">Login</a>
      </div>
    </div>
  );
}
