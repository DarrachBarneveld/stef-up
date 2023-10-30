import { FunctionComponent, useContext } from "react";
import { Workout, WorkoutContext } from "../context/WorkoutContext";
import { ExerciseClass } from "../classes/ExerciseClass";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ExerciseLabel from "./ui/ExerciseLabel";

interface WorkoutTableProps {}

const WorkoutTable: FunctionComponent<WorkoutTableProps> = () => {
  const { workouts, removeWorkout } = useContext(WorkoutContext);
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Workout
          </th>
          <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Exercises
          </th>
          <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Status
          </th>
          <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
            Date
          </th>
          <th className="border-b border-gray-200 bg-gray-50 px-6 py-3"></th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {workouts &&
          workouts?.length > 0 &&
          workouts.map((workout) => (
            <WorkoutCard
              workout={workout}
              removeWorkout={removeWorkout}
              key={workout.id}
            />
          ))}
      </tbody>
    </table>
  );
};

export default WorkoutTable;

interface WorkoutCardProps {
  workout: Workout;
  removeWorkout: (id: string) => void;
}

const WorkoutCard: FunctionComponent<WorkoutCardProps> = ({
  workout,
  removeWorkout,
}) => {
  const navigate = useNavigate();

  function deleteConfirmation(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeWorkout(id);
      }
    });
  }

  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="">
            <div className="text-sm font-medium leading-5 text-gray-900">
              Monday Madness
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {workout.id.slice(0, 10)}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="hidden md:block">
          {workout.exercises.map((exercise: ExerciseClass) => (
            <ExerciseLabel exercise={exercise} key={exercise.id} />
          ))}
        </div>

        <div className="md:hidden">
          <ExerciseLabel exercise={workout.exercises[0]} />
          {workout.exercises.length > 1 && (
            <span className="rounded-2xl bg-green-100 px-2 text-sm font-bold text-green-800">
              +{workout.exercises.length - 1}
            </span>
          )}
        </div>
      </td>

      <td className="px-6 py-4">
        <span className="inline-flex rounded-xl bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          Active
        </span>
      </td>

      <td className="px-6 py-4 text-sm leading-5 text-gray-500">
        {workout.date.toLocaleDateString()}
      </td>

      <td className="px-6 py-2 text-center text-sm font-medium leading-5">
        <div className="flex flex-col">
          <button
            onClick={() => navigate("workouts", { state: workout })}
            className="py-2 text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </button>
          <button
            onClick={() => deleteConfirmation(workout.id)}
            className="py-2 text-red-600 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
