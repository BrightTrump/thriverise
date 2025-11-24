import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronLeft from "./chevron-left";
import ChevronRight from "./chevron-right";
import ChevronUp from "./chevron-up";
import Dot from "./dot";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Quote from "./quote";
import Twitter from "./twitter";
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

    case Icons.Dot:
      return <Dot {...props} />;

    case Icons.Facebook:
      return <Facebook {...props} />;

    case Icons.Instagram:
      return <Instagram {...props} />;

    case Icons.Linkedin:
      return <Linkedin {...props} />;

    case Icons.Quote:
      return <Quote {...props} />;

    case Icons.Twitter:
      return <Twitter {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
