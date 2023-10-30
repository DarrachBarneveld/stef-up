import { ExerciseType } from "../classes/ExerciseClass";
import { ReactElement } from "react";

import CarryIcon from "../assets/icons/CarryIcon";
import PullIcon from "../assets/icons/PullIcon";
import PushIcon from "../assets/icons/PushIcon";
import RowingIcon from "../assets/icons/RowingIcon";
import WallBallIcon from "../assets/icons/WallballIcon";
import SkriegIcon from "../assets/icons/SkriegIcon";
import LungeIcon from "../assets/icons/LungeIcon";
import JumpIcon from "../assets/icons/JumpIcon";

export function exerciseStyling(type: ExerciseType): {
  color: string;
  border: string;
  icon: ReactElement;
} {
  let color: string;
  let border: string;
  let icon: ReactElement;

  if (type === "Burpee Broad Jump") {
    color = "bg-red-800";
    border = "border-red-800";
    icon = <JumpIcon />;
  } else if (type === "Farmers Carry") {
    color = "bg-orange-400";
    border = "border-orange-400";
    icon = <CarryIcon />;
  } else if (type === "Lunges") {
    color = "bg-green-600";
    border = "border-green-600";
    icon = <LungeIcon />;
  } else if (type === "Rowing") {
    color = "bg-violet-500";
    border = "border-violet-500";
    icon = <RowingIcon />;
  } else if (type === "Skierg") {
    color = "bg-teal-500";
    border = "border-teal-500";
    icon = <SkriegIcon />;
  } else if (type === "Sled Pull") {
    color = "bg-fuchsia-400";
    border = "border-fuchsia-400";
    icon = <PullIcon />;
  } else if (type === "Sled Push") {
    color = "bg-sky-500";
    border = "border-sky-500";
    icon = <PushIcon />;
  } else {
    color = "bg-stone-600";
    border = "border-stone-600";
    icon = <WallBallIcon />;
  }

  return { color, border, icon };
}

export function tabLabelStyling(type: ExerciseType): string {
  let color: string;

  if (type === "Burpee Broad Jump") {
    color = "bg-red-100 text-red-800";
  } else if (type === "Farmers Carry") {
    color = "bg-orange-100 text-orange-800";
  } else if (type === "Lunges") {
    color = "bg-green-100 text-green-800";
  } else if (type === "Rowing") {
    color = "bg-violet-100 text-violet-800";
  } else if (type === "Skierg") {
    color = "bg-teal-100 text-teal-800";
  } else if (type === "Sled Pull") {
    color = "bg-fuchsia-100 text-fuchsia-800";
  } else if (type === "Sled Push") {
    color = "bg-sky-100 text-sky-800";
  } else {
    color = "bg-stone-100 text-stone-800";
  }

  return color;
}
