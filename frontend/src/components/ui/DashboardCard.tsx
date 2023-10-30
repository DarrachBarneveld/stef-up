import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { cn } from "../../helpers/tailwind";

interface DashBoardCardProps {
  icon: IconDefinition;
  text: string;
  color: string;
  amount?: number;
  className?: string;
}

const DashBoardCard: FunctionComponent<DashBoardCardProps> = ({
  icon,
  text,
  color,
  amount,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      className={cn(
        "flex items-center rounded-md bg-white px-5 py-6 text-start shadow-sm",
        className,
      )}
    >
      <div
        className={`flex aspect-square items-center justify-center rounded-full border-2 border-slate-500 ${color} p-3`}
      >
        <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
      </div>
      <div className="mx-5">
        <h4 className="text-2xl font-semibold text-gray-700">{amount}</h4>
        <div className="text-gray-500">{text}</div>
      </div>
    </motion.div>
  );
};

export default DashBoardCard;
