import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = ({ label, ...others }: ButtonProps) => {
  return <button {...others}>{label}</button>;
};

export default Button;
