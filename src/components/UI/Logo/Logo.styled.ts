import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { GiDoubleFish } from "react-icons/gi";
import screenWidth from "utilities/screenWidth";
import { IconProps, TextProps, ReferenceProps } from "types/props/LogoProps";

export const Reference = styled(Link)<ReferenceProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => {
    if (position === "center") {
      return "center";
    }
    if (position === "end") {
      return "end";
    }
    return "start";
  }};

  margin: ${({ margin }) => (margin ? margin : "")};
  font-family: var(--second-font);

  :hover .icon,
  :focus .icon {
    color: var(--gray-color);
  }
`;

export const Text = styled.p<TextProps>`
  display: flex;
  align-items: center;
  font-size: 24px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: ${({ type }) => (type === "text-icon" ? "30px" : "")};
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    font-size: ${({ type }) => (type === "text-icon" ? "34px" : "")};
  }
`;

export const Icon = styled(GiDoubleFish)<IconProps>`
  margin: ${({ type }) => (type === "text-icon" ? "0 10px" : "")};
  width: ${({ type }) => (type === "icon" ? "44px" : "")};
  height: ${({ type }) => (type === "icon" ? "44px" : "")};

  color: var(--accent-color);
  transition: color var(--hover-effect);

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: ${({ type }) => (type === "icon" ? "58px" : "")};
    height: ${({ type }) => (type === "icon" ? "58px" : "")};
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: ${({ type }) => (type === "icon" ? "68px" : "")};
    height: ${({ type }) => (type === "icon" ? "68px" : "")};
  }
`;
