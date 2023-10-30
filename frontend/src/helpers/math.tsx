import { Workout } from "../context/WorkoutContext";

export function getTotalExercises(workouts: Workout[]): number {
  let totalExercises = 0;

  for (const workout of workouts) {
    totalExercises += workout.exercises.length;
  }
  return totalExercises;
}
