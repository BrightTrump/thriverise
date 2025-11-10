import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronLeft from "./chevron-left";
import ChevronRight from "./chevron-right";
import ChevronUp from "./chevron-up";
import Quote from "./quote";
import { IconProps, Icons } from "./types";

interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.Check:
      return <Check {...props} />;

    case Icons.ChevronDown:
      return <ChevronDown {...props} />;

    case Icons.ChevronLeft:
      return <ChevronLeft {...props} />;

    case Icons.ChevronRight:
      return <ChevronRight {...props} />;

    case Icons.ChevronUp:
      return <ChevronUp {...props} />;

    case Icons.Quote:
      return <Quote {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
