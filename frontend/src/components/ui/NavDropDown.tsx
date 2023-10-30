import { FunctionComponent } from "react";

interface NavDropDownProps {}

const NavDropDown: FunctionComponent<NavDropDownProps> = () => {
  return (
    <div className="relative">
      <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-md bg-white shadow-xl">
        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
          Profile
        </a>
        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
          Logout
        </a>
      </div>
    </div>
  );
};

export default NavDropDown;
