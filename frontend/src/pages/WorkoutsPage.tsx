import { FunctionComponent, useContext, useState } from "react";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import DashBoardCard from "../components/ui/DashboardCard";
import { faCirclePlus, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import CustomForm from "../components/CustomForm";
import { FieldSet, createValidationSchema, timeSchema } from "../helpers/form";
import { ExerciseClass } from "../classes/ExerciseClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkoutContext } from "../context/WorkoutContext";
import Exercise from "../components/Exercise";
import ViewWorkouts from "../components/ViewWorkouts";
import { useLocation } from "react-router-dom";

const workoutInputFields = [
  {
    name: "type",
    label: "Workout",
    type: "select",
    options: [
      { value: "Skierg", label: "Skierg" },
      { value: "Sled Push", label: "Sled Push" },
      { value: "Wallballs", label: "Wallballs" },
      { value: "Farmers Carry", label: "Farmers Carry" },
      { value: "Rowing", label: "Rowing" },
      { value: "Sled Pull", label: "Sled Pull" },
      { value: "Lunges", label: "Lunges" },
      { value: "Burpee Broad Jump", label: "Burpee Broad Jump" },
    ],
  },
  {
    name: "sets",
    label: "Sets",
    type: "number",
  },
  {
    name: "rest",
    label: "Rest (mins)",
    type: "time",
  },

  {
    name: "weight",
    label: "Weight (kg)",
    type: "number",
  },
  {
    name: "distance",
    label: "Distance (m)",
    type: "number",
  },
];

const workoutFields: FieldSet = {
  type: Yup.string().required("Please select a workout"),
  sets: Yup.number()
    .required("This field is required")
    .min(0, "Number of sets must not be negative")
    .integer("Number of sets must be an integer"),
  rest: timeSchema.required("This field is required"),
  weight: Yup.number()
    .min(0, "Number of weight must not be negative")
    .integer("Number of weight must be an integer"),
  distance: Yup.number()
    .min(0, "Number of distance must not be negative")
    .integer("Number of distance must be an integer"),
};

const workoutValidationSchema = createValidationSchema(workoutFields);

interface WorkoutsPageProps {}

const WorkoutsPage: FunctionComponent<WorkoutsPageProps> = () => {
  const [viewWorkouts, setViewWorkouts] = useState(false);
  const { addWorkout } = useContext(WorkoutContext);
  const location = useLocation();

  const [exercises, setExercises] = useState<ExerciseClass[]>(
    location?.state?.exercises || [],
  );
  const workoutInitialValues = {
    workout: "Skierg",
    sets: 0,
    rest: "00:00",
    weight: 0,
    distance: 0,
  };

  function completeWorkoutPlan() {
    let id;
    if (location?.state) {
      id = location.state.id;
    } else {
      id = uuidv4();
    }

    const newWorkout = {
      exercises,
      id,
      date: new Date(),
    };

    addWorkout(newWorkout);
    // navigate("/");
  }

  function removeExercise(id: string) {
    const newExercises = exercises.filter((exercise) => exercise.id != id);

    setExercises(newExercises);
  }

  const exerciseSubmit = async (
    values: ExerciseClass,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    const { weight, sets, rest, distance, type } = values;
    const newExercise = new ExerciseClass(type, sets, rest, distance, weight);

    setExercises((prev) => [newExercise, ...prev]);

    setSubmitting(false);
  };

  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-200">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-medium text-gray-700">Workouts</h3>
        <div className="mt-4">
          <div className="-mx-6 flex flex-wrap">
            <button
              className="w-full p-0 px-6 sm:w-1/2 xl:w-1/3"
              onClick={() => setViewWorkouts(false)}
            >
              <DashBoardCard
                color="bg-sky-600"
                icon={faCirclePlus}
                text="Add Workout"
                className="hover:bg-sky-100"
              />
            </button>
            <button
              className="w-full px-6 sm:w-1/2 xl:w-1/3"
              onClick={() => setViewWorkouts(true)}
            >
              <DashBoardCard
                color="bg-green-600"
                icon={faDumbbell}
                text="View Workouts"
                className="hover:bg-green-100"
              />
            </button>
          </div>
        </div>
        {viewWorkouts ? (
          <ViewWorkouts />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
          >
            <div className="mt-8 flex w-full flex-1 flex-col gap-2 md:max-h-[34rem] md:flex-row">
              <CustomForm
                heading="What exercise would you like to add?"
                initialValues={workoutInitialValues}
                inputFields={workoutInputFields}
                validationSchema={workoutValidationSchema}
                handleSubmit={exerciseSubmit}
              />
              <div className="flex w-full flex-col overflow-y-scroll rounded-lg bg-slate-100 px-5 py-1 text-center shadow-md">
                <div className="flex items-center justify-center gap-2 border-b border-slate-300">
                  <h2 className="p-3 text-xl font-extrabold text-black">
                    Workout
                  </h2>
                  <FontAwesomeIcon
                    className="text-2xl text-green-700 duration-300 hover:cursor-pointer hover:text-green-800"
                    onClick={completeWorkoutPlan}
                    icon={faCirclePlus}
                  />
                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-3">
                  {exercises.map((exercise: ExerciseClass) => (
                    <Exercise
                      exercise={exercise}
                      key={exercise.id}
                      removeExercise={removeExercise}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default WorkoutsPage;
