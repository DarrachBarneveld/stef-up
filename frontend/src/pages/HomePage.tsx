import { faCirclePlus, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutContext";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const { workouts } = useContext(WorkoutContext);
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300 text-white">
      <div className=" flex items-center justify-center gap-2 ">
        <Link
          to="create"
          className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-white bg-sky-700 p-5 pt-9 shadow-xl shadow-sky-950 hover:bg-sky-600 focus:bg-sky-600"
        >
          <h2 className="text-lg font-bold tracking-wider">Create a workout</h2>

          <FontAwesomeIcon icon={faCirclePlus} className="text-2xl" />
        </Link>

        <Link
          to="view"
          className="relative flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-white bg-emerald-700 p-5 pt-9 shadow-xl shadow-green-900 hover:bg-emerald-600 focus:bg-emerald-600"
        >
          <h2 className=" text-lg font-bold tracking-wider">
            View your workouts
          </h2>
          <span className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-100 bg-red-600 text-black">
            {workouts?.length}
          </span>
          <FontAwesomeIcon icon={faDumbbell} className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
