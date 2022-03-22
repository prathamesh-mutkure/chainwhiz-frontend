import React from "react";
import "./TextHeading.scss";

export default function TextHeading({ text = "" }) {
  // console.log(text.split(" ").map((word) => {
  //   return
  // }));

  return (
    <h1 className="heading">
      {text.split(" ").map((word) => {
        return <span>{`${word} `}</span>;
      })}
    </h1>
  );
}
