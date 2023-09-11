import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Title = ({ children, className }: TitleProps) => {
  return <h3 className={className}>{children}</h3>;
};

export default Title;
