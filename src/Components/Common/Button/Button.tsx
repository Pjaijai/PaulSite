import React, { FunctionComponent } from "react";

export interface IButton {
  title: string;
  link?: string;
}

const Button: FunctionComponent<IButton> = ({ title, link }) => {
  return (
    <a
      className="mt-2 p-2 bg-four text-two rounded-lg hover:text-five hover:bg-one"
      href={`${link}`}
    >
      {title}
    </a>
  );
};

export default Button;
