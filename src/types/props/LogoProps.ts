export type LogoProps = {
  type?: "text-icon" | "icon";
  position?: "start" | "center" | "end";
  margin?: string;
};

export type IconProps = Pick<LogoProps, "type">;

export type TextProps = Pick<LogoProps, "type">;

export type ReferenceProps = Pick<LogoProps, "position" | "margin">;
