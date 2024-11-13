import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import TellFeelingFormModal from "../components/BaseModal";
import UploadMemoriesModal from "../components/BaseModal";
import RelaxationModal from "../components/BaseModal";

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
            <HeaderLinks />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo className="w-36" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <HeaderLinks />
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn btn-outline btn-info">Login</a> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-outline btn-info m-1">
            Nyi Nyi Aung
          </label>
          <ul className="menu dropdown-content menu-compact bg-base-100 rounded-box z-[1] p-2 w-52 shadow">
            <li>
              <a className="px-3 py-2" href="#" onClick={() => document.getElementById("tellFeelingModal").showModal()}>Tell Feeling</a>
            </li>
            <li>
              <a className="px-3 py-2" href="#" onClick={() => document.getElementById("uploadMemoriesModal").showModal()}>Upload Memories Photo</a>
            </li>
            <li>
              <a className="px-3 py-2" href="#" onClick={() => document.getElementById("relaxationModal").showModal()}>Set Relaxation</a>
            </li>
            <li>
              <a className="px-3 py-2">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <Modals/>
    </div>
  );
}





function Modals() {
  return (
    <>
      <TellFeelingFormModal id="tellFeelingModal" title="Tell Feeling">
        <form>
          <textarea className="w-full textarea text-white resize-none h-[150px] border-gray-200"></textarea>
          <button className="btn btn-outline btn-sm " type="submit">
            Submit
          </button>
        </form>
      </TellFeelingFormModal>
      
      <UploadMemoriesModal id="uploadMemoriesModal" title="Upload Memories">
        <form className="space-y-2">
            <input type="file" className="file-input w-full"/>
            <button className="btn btn-outline btn-sm " type="submit">
              Upload
            </button>
        </form>
      </UploadMemoriesModal>


      <RelaxationModal id="relaxationModal" title="Sugget Relaxation Video">
        <form className="space-y-2"> 
            <textarea className="w-full textarea textarea-bordered text-gray-100 resize-none h-[100px]" placeholder="tell your feeling"></textarea>
            <input type="text" className="w-full input input-bordered text-gray-100" placeholder="youtube link"/>
            <button className="btn btn-outline btn-sm " type="submit">
              Submit
            </button>
        </form>
      </RelaxationModal>
    </>
  )
}