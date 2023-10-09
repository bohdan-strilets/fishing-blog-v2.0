import { LogoProps } from "types/props/LogoProps";
import { Reference, Text, Icon } from "./Logo.styled";

const Logo: React.FC<LogoProps> = ({ type, position, margin }) => {
  if (type === "icon") {
    return (
      <Reference to="/" position={position} margin={margin}>
        <Icon className="icon" type={type} />
      </Reference>
    );
  }

  return (
    <Reference to="/" position={position} margin={margin}>
      <Text type={type}>
        Fishing
        <Icon className="icon" type={type} />
        Blog
      </Text>
    </Reference>
  );
};

export default Logo;
