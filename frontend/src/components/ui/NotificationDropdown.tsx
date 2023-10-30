import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Workout } from "../../context/WorkoutContext";
import { Link } from "react-router-dom";

interface NotificationDropDownProps {
  workouts: Workout[];
}

const NotificationDropDown: FunctionComponent<NotificationDropDownProps> = ({
  workouts,
}) => {
  return (
    <div
      x-show="notificationOpen"
      className="absolute right-0 z-10 mt-2 w-80 overflow-hidden rounded-lg bg-white shadow-xl"
    >
      {workouts?.map((workout) => (
        <Notifcation
          key={workout.id}
          workout={workout}
          text="Monday Madness"
          time={workout.date}
        />
      ))}
    </div>
  );
};

interface NotifcationProps {
  text: string;
  workout: Workout;
  time: Date;
}

const Notifcation: FunctionComponent<NotifcationProps> = ({
  text,
  workout,
  time,
}) => {
  return (
    <Link
      to={"workouts"}
      state={workout}
      className="-mx-2 flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white"
    >
      <p className="mx-2 text-sm">
        <span className="font-bold">W</span>{" "}
        <span className="font-bold text-indigo-400">{text}</span>
      </p>
      <p className="text-sm">
        <FontAwesomeIcon icon={faClock} />
        {time.toLocaleDateString()}
      </p>
    </Link>
  );
};

export default NotificationDropDown;
