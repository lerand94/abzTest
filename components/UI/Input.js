import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  if (ref === null) {
    return (
      <div className={classes.input}>
        <input {...props.input} />
        <label htmlFor={props.input.id}>{props.label}</label>
      </div>
    );
  }
  return (
    <div className={classes.input}>
      <input {...props.input} ref={ref} />
      <label htmlFor={props.input.id}>{props.label}</label>
    </div>
  );
});

export default Input;
