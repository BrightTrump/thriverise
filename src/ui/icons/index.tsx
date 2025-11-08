import Check from "./check";
import Quote from "./quote";
import { IconProps, Icons } from "./types";

interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.Quote:
      return <Quote {...props} />;

    case Icons.Check:
      return <Check {...props} />;


    default:
      return <p>Pick an Icon</p>;
  }
}
