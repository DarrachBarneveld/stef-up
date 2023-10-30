import { createContext, useEffect, useState } from "react";
import { ExerciseClass, ExerciseType } from "../classes/ExerciseClass";
import { v4 as uuidv4 } from "uuid";

const DUMMY_DATA = [
  createExercise("Skierg", 5, "03:30", undefined, 200),
  createExercise("Sled Push", 4, "03:30", 80, 10),
  createExercise("Wallballs", 5, "03:30", 20, 2),
  createExercise("Farmers Carry", 2, "03:30", 10, 220),
  createExercise("Rowing", 5, "03:30", undefined, 200),
  createExercise("Sled Pull", 4, "03:30", 62, 10),
  createExercise("Lunges", 2, "03:30", 7.5, 110),
  createExercise("Burpee Broad Jump", 5, "03:30", undefined, 20),
];

export function createExercise(
  type: ExerciseType,
  sets: number,
  rest: string,
  distance?: number,
  weight?: number,
) {
  return new ExerciseClass(type, sets, rest, distance, weight);
}

export type Workout = {
  id: string;
  exercises: ExerciseClass[];
  date: Date;
};

type ValueProp = {
  workouts: Workout[] | undefined;
  addWorkout: (newWorkout: Workout) => void;
  removeWorkout: (id: string) => void;
};

const defaultState: ValueProp = {
  workouts: [],
  addWorkout: () => {},
  removeWorkout: () => {},
};

export const WorkoutContext = createContext(defaultState as ValueProp);

type ContextProp = {
  children: React.ReactNode;
};

export function WorkoutContextProvider({ children }: ContextProp) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = (newWorkout: Workout) => {
    setWorkouts((prev) => {
      const updatedWorkouts = prev.map((workout) => {
        if (workout.id === newWorkout.id) {
          return newWorkout;
        }
        return workout;
      });

      if (!prev.some((workout) => workout.id === newWorkout.id)) {
        updatedWorkouts.push(newWorkout);
      }

      return updatedWorkouts;
    });
  };

  const removeWorkout = (id: string) => {
    const filteredWorkouts = workouts.filter((workout) => workout.id != id);
    setWorkouts(filteredWorkouts);
  };

  useEffect(() => {
    const exercises: ExerciseClass[] = [];
    DUMMY_DATA.forEach((exercise) => {
      exercises.push(exercise);
    });

    const id = uuidv4();
    const newWorkout = {
      exercises,
      id,
      date: new Date(),
    };

    addWorkout(newWorkout);
  }, [DUMMY_DATA]);

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}
