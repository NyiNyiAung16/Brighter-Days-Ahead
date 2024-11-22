import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { logout } from "../helpers/auth";
import {useAuth} from "../helpers/useAuth";
import TellFeelingForm from "./TellFeelingForm";
import UploadMemories from "./UploadMemories";
import RelaxationForm from "./RelaxationForm";
import Spinner from "./Spinner";
import BaseModal from "./BaseModal";
import { GalleryProvider } from "../contexts/galleryContext";

function HeaderLinks({ userRole }) {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {userRole === "BS" && (
        <li>
          <NavLink to="/goals">Goals</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/feelings">Feelings</NavLink>
      </li>
      <li>
        <NavLink to="/relaxation-corner">Relaxation</NavLink>
      </li>
      <li>
        <NavLink to="/memories">Memories</NavLink>
      </li>
    </>
  );
}

export default function Header() {
  const { userLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("hit");
    await logout();
    navigate("/login", { replace: true });
  };

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
            className="menu menu-sm dropdown-content bg-base-100 text-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <HeaderLinks userRole={currentUser?.role} />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo className="w-36" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <HeaderLinks userRole={currentUser?.role}/>
        </ul>
      </div>
      <div className="navbar-end">
        {!userLoggedIn && (
          <Link to="/login" className="btn btn-outline btn-info">
            Login
          </Link>
        )}
        {userLoggedIn && (
          <div className="dropdown dropdown-end">
            <summary tabIndex={0} role="button" className="btn btn-outline btn-info m-1">
              {currentUser?.username || <Spinner size="sm" />}
            </summary>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 text-gray-200 rounded-box z-[1] p-2 w-52 shadow">
              <li>
                <a
                  className="px-3 py-2"
                  href="#"
                  onClick={() => document.getElementById("tellFeelingModal").showModal()}
                >
                  Tell Feeling
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2"
                  href="#"
                  onClick={() => document.getElementById("relaxationModal").showModal()}
                >
                  Set Relaxation
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2"
                  href="#"
                  onClick={() => document.getElementById("uploadMemoriesModal").showModal()}
                >
                  Upload Memories Photo
                </a>
              </li>
              <li onClick={handleLogout}>
                <a className="px-3 py-2">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Modals />
    </div>
  );
}

function Modals() {
  return (
    <>
      <BaseModal id="tellFeelingModal" title="Tell Feeling">
        <TellFeelingForm />
      </BaseModal>
      <BaseModal id="uploadMemoriesModal" title="Upload Memories Photo">
        <UploadMemories />
      </BaseModal>
      <BaseModal id="relaxationModal" title="Set Relaxation">
        <RelaxationForm />
      </BaseModal>
    </>
  );
}
