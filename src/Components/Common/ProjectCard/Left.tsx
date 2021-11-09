import React, { FunctionComponent } from "react";
import Button, { IButton } from "../Button/Button";

// const ButtonInfo: IButton[] = [
//   {
//     title: "Demo",
//     link: "a",
//   },
//   {
//     title: "Code",
//     link: "a",
//   },
// ];

interface ILeft {
  demo: string;
  link: string;
}

const Left: FunctionComponent<ILeft> = ({ demo, link }) => {
  return (
    <div className="w-2/5 p-2 h-full bg-three flex flex-col text-center justify-center">
      <Button title="Demo" link={demo} />

      <Button title="Code" link={link} />
    </div>
  );
};

export default Left;
