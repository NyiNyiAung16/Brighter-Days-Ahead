import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function MobileHeaderLinks() {
  return (
    <>
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <NavLink
        to="/admin/dashboard"
        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
        aria-current="page"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/feelings"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Feelings
      </NavLink>
      <NavLink
        to="/admin/gallery"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/admin/relaxation"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Relaxation
      </NavLink>

    </>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <MobileHeaderLinks />
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="shrink-0">
            <h3 className=" capitalize text-gray-100 font-semibold">
              Nyi Nyi Aung
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuButton() {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>
      {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
      <svg
        className="block h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
      <svg
        className="hidden h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

function HeaderLinks() {
  return (
    <>
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <NavLink
        to="/admin/dashboard"
        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
        aria-current="page"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/feelings"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Feelings
      </NavLink>
      <NavLink
        to="/admin/gallery"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/admin/relaxation"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Relaxation
      </NavLink>
    </>
  );
}

function ProfileDropdown() {
  return (
    <div className="relative ml-3">
      <div>
        <h3 className=" capitalize text-gray-100 font-semibold">
          Nyi Nyi Aung
        </h3>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <Logo className="w-32"/>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <HeaderLinks />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <ProfileDropdown />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileMenuButton />
            </div>
          </div>
        </div>

        <MobileMenu />
      </nav>
      
      { children }
    </div>
  );
}
