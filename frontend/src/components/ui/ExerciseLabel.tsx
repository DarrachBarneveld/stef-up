import { FunctionComponent } from "react";
import { tabLabelStyling } from "../../helpers/styling";
import { ExerciseClass } from "../../classes/ExerciseClass";

interface ExerciseLabelProps {
  exercise: ExerciseClass;
}

const ExerciseLabel: FunctionComponent<ExerciseLabelProps> = ({ exercise }) => {
  const color = tabLabelStyling(exercise.type);
  return (
    <span
      key={exercise.id}
      className={`${color} inline-flex rounded-xl px-2 text-xs font-semibold leading-5`}
    >
      {exercise.type}
    </span>
  );
};

export default ExerciseLabel;
