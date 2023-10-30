import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import IconButton from "./ui/IconButton";
import SearchBar from "./ui/SearchBar";
import NotificationDropDown from "./ui/NotificationDropdown";
import NavDropDown from "./ui/NavDropDown";
import { WorkoutContext } from "../context/WorkoutContext";

interface HeaderProps {
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
}

const Header: FunctionComponent<HeaderProps> = ({ setShowNavbar }) => {
  const { workouts } = useContext(WorkoutContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAuthDropdown, setshowAuthDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-2">
      <div className="flex items-center">
        <IconButton
          className="h-12 text-xl text-gray-500 focus:outline-none lg:hidden "
          icon={faBars}
          onClick={() => setShowNavbar((prev) => !prev)}
        />
        <SearchBar />
      </div>

      <div className="flex items-center gap-4 ">
        <div className="relative">
          <IconButton
            className={`relative h-12 text-xl ${
              workouts && workouts?.length > 0
                ? "text-red-600"
                : "text-gray-500"
            } focus:outline-none`}
            icon={faBell}
            onClick={() => setShowNotifications((prev) => !prev)}
          />

          {showNotifications && (
            <NotificationDropDown workouts={workouts || []} />
          )}
        </div>
        <div className="relative">
          <IconButton
            className="h-12 text-xl text-gray-500 focus:outline-none"
            icon={faUser}
            onClick={() => setshowAuthDropdown((prev) => !prev)}
          />
          {showAuthDropdown && <NavDropDown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
