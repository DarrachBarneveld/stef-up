import { FunctionComponent, useContext } from "react";
import { motion } from "framer-motion";
import { WorkoutContext } from "../context/WorkoutContext";
import Exercise from "./Exercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface ViewWorkoutsProps {}

const ViewWorkouts: FunctionComponent<ViewWorkoutsProps> = () => {
  const navigate = useNavigate();
  const { workouts } = useContext(WorkoutContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
      className="justify-cente mt-5 flex items-center rounded-2xl bg-white text-slate-800"
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        {workouts && workouts.length > 0 ? (
          workouts.map((workout) => {
            return (
              <div
                className="border-20 rounded-xl p-4 text-center"
                key={workout.id}
              >
                <h2 className="font-extrabolds m-4 text-center text-2xl">
                  Workout {workout.id}
                </h2>
                <p className="text-muted p-5 text-xl font-bold">
                  {workout.date.toLocaleDateString()}
                </p>
                <div
                  key={workout.id}
                  className="flex flex-wrap justify-center gap-2"
                >
                  {workout.exercises.map((exercise) => (
                    <Exercise exercise={exercise} key={exercise.id} />
                  ))}
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <div className="flex flex-col gap-2 rounded-xl border-2 border-white bg-slate-700 p-4 text-white shadow-2xl">
            <h2>You have no workouts add some</h2>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="stroke-4 text-4xl text-green-600 hover:cursor-pointer hover:text-green-800"
              onClick={() => navigate("/create")}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ViewWorkouts;
