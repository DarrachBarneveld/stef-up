import { v4 as uuidv4 } from "uuid";

export type ExerciseType =
  | "Skierg"
  | "Sled Push"
  | "Wallballs"
  | "Farmers Carry"
  | "Rowing"
  | "Sled Pull"
  | "Lunges"
  | "Burpee Broad Jump";

export class ExerciseClass {
  id: string;
  type: ExerciseType;
  sets: number;
  rest: string;
  weight?: number;
  distance?: number;

  constructor(
    type: ExerciseType,
    sets: number,
    rest: string,
    weight?: number,
    distance?: number,
  ) {
    this.id = uuidv4();
    this.type = type;
    this.sets = sets;
    this.rest = rest;
    this.weight = weight;
    this.distance = distance;
  }
}
