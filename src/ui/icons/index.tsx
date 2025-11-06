import Agent from "./agent";
import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronLeft from "./chevron-left";
import ChevronRight from "./chevron-right";
import ChevronUp from "./chevron-up";
import Close from "./close";
import Dot from "./dot";
import Facebook from "./facebook";
import Hamburger from "./hamburger";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import People from "./people";
import Security from "./security";
import ServiceProvider from "./service-provider";
import Twitter from "./twitter";
import { IconProps, Icons } from "./types";
import Wrong from "./wrong";

interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.Agent:
      return <Agent {...props} />;

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

    case Icons.Close:
      return <Close {...props} />;

    case Icons.Dot:
      return <Dot {...props} />;

    case Icons.Facebook:
      return <Facebook {...props} />;

    case Icons.Hamburger:
      return <Hamburger {...props} />;

    case Icons.Instagram:
      return <Instagram {...props} />;

    case Icons.Linkedin:
      return <Linkedin {...props} />;

    case Icons.People:
      return <People {...props} />;

    case Icons.Security:
      return <Security {...props} />;

    case Icons.ServiceProvider:
      return <ServiceProvider {...props} />;

    case Icons.Twitter:
      return <Twitter {...props} />;

    case Icons.Wrong:
      return <Wrong {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
