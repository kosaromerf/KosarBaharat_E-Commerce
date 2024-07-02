import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <Link to={text.toLowerCase()}>
      {text[0] !== "/" ? text : text.slice(1)}
    </Link>
  );
};

export default Button;
