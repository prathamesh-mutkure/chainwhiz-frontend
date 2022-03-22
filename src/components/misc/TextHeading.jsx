import React from "react";
import "./TextHeading.scss";

export default function TextHeading({ text = "" }) {
  return (
    <h1 className="heading">
      {text.split(" ").map((word) => {
        return <span>{`${word} `}</span>;
      })}
    </h1>
  );
}
