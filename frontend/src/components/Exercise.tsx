import { FunctionComponent } from "react";
import { ExerciseClass } from "../classes/ExerciseClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleMinus,
  faClock,
  faDumbbell,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { exerciseStyling } from "../helpers/styling";

interface ExerciseProps {
  exercise: ExerciseClass;
  removeExercise?: (id: string) => void;
}

const Exercise: FunctionComponent<ExerciseProps> = ({
  exercise,
  removeExercise,
}) => {
  const { icon, color, border } = exerciseStyling(exercise.type);
  return (
    <div
      className={`border-1 bg-sky-100x relative my-3 w-64 rounded-3xl border-2 ${border} bg-white px-6 py-6 shadow-xl`}
    >
      <div
        className={`absolute -top-6 left-4 flex items-center rounded-full p-1 ${color} text-white shadow-xl`}
      >
        {icon}
      </div>
      {removeExercise && (
        <button
          className="absolute right-2 top-1"
          onClick={() => removeExercise(exercise.id)}
        >
          <FontAwesomeIcon
            icon={faCircleMinus}
            className=" text-xl text-red-700 hover:text-red-500"
          />
        </button>
      )}
      <div>
        <p className="my-2 text-start text-xl font-semibold ">
          {exercise.type}
        </p>
        <div className="text-md flex items-center space-x-2 font-extrabold text-gray-800">
          <FontAwesomeIcon icon={faChartLine} className="text-red-700" />
          <span>{exercise.sets}</span>
          <FontAwesomeIcon icon={faClock} className="text-green-700" />
          <span>{exercise.rest}</span>
        </div>

        <hr />

        <div className="flex justify-between text-gray-800">
          <div className="my-2">
            <p className="mb-2 font-semibold">Weight</p>
            <div className="flex items-center gap-2 font-semibold">
              <FontAwesomeIcon icon={faDumbbell} />
              <p>{exercise.weight || 0}kg</p>
            </div>
          </div>
          <div className="my-2">
            <p className="mb-2 font-semibold">Distance</p>
            <div className="flex items-center gap-2 font-semibold">
              <FontAwesomeIcon icon={faRunning} />
              <p>{exercise.distance || 0}m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
