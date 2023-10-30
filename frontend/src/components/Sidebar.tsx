import { Dispatch, FunctionComponent, SetStateAction } from "react";
import LogoIcon from "../assets/icons/LogoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDumbbell,
  faGaugeSimpleHigh,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface SideBarProps {
  showNavbar: boolean;
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
}

interface SideBarIconProps {
  icon: IconDefinition;
  text: string;
  to: string;
}

const SideBarIcon: FunctionComponent<SideBarIconProps> = ({
  icon,
  text,
  to,
}) => (
  <Link
    to={to}
    className=" mt-4 flex items-center bg-gray-700 bg-opacity-25 px-6 py-3 text-gray-100 transition-all duration-300 hover:cursor-pointer hover:bg-violet-600"
  >
    <FontAwesomeIcon icon={icon} />
    <span className="mx-3">{text}</span>
  </Link>
);

const SideBar: FunctionComponent<SideBarProps> = ({
  showNavbar,
  setShowNavbar,
}) => {
  return (
    <>
      <div
        onClick={() => setShowNavbar(false)}
        className={`${
          showNavbar ? "block" : "hidden"
        } fixed inset-0 z-20 block h-screen w-screen bg-black opacity-50 transition-opacity lg:hidden`}
      ></div>
      <div
        className={`${
          showNavbar ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed inset-y-0 left-0 z-30 w-64 -translate-x-full transform overflow-y-auto bg-gray-900 transition duration-300 ease-in lg:static lg:inset-0 lg:translate-x-0`}
      >
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center">
            <div className="rounded-2xl border border-white bg-violet-600">
              <LogoIcon />
            </div>
            <span className="mx-2 text-2xl font-semibold text-white">
              StefUp
            </span>
          </div>
        </div>
        <nav className="mt-10">
          <SideBarIcon icon={faGaugeSimpleHigh} text="Dashboard" to="/" />
          <SideBarIcon icon={faDumbbell} text="Workouts" to="workouts" />
          <SideBarIcon icon={faRunning} text="Tracking" to="tracking" />
        </nav>
      </div>
    </>
  );
};

export default SideBar;
