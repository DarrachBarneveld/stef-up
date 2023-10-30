import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../helpers/tailwind";
import { ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: IconDefinition;
  className?: string;
  children?: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  children,
}) => {
  return (
    <button className={cn("hover:cursor-pointer", className)} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </button>
  );
};

export default IconButton;
