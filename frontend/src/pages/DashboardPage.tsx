import {
  faClock,
  faDumbbell,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useContext } from "react";
import DashBoardCard from "../components/ui/DashboardCard";
import WorkoutTable from "../components/WorkoutTable";
import { WorkoutContext } from "../context/WorkoutContext";
import { getTotalExercises } from "../helpers/math";

interface DashboardPageProps {}

const DashboardPage: FunctionComponent<DashboardPageProps> = () => {
  const { workouts } = useContext(WorkoutContext);
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-200">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
        <div className="mt-4">
          <div className="-mx-6 flex flex-wrap">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <DashBoardCard
                color="bg-sky-600"
                icon={faDumbbell}
                text="Workouts"
                amount={workouts?.length || 0}
              />
            </div>
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <DashBoardCard
                color="bg-green-600"
                icon={faRunning}
                text="Total Exercises"
                amount={getTotalExercises(workouts || [])}
              />
            </div>
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <DashBoardCard
                color="bg-red-600"
                icon={faClock}
                text="Days till Hyrox"
                amount={14}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
              <WorkoutTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
