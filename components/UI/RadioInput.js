import classes from "./RadioInput.module.css";

const RadioInput = (props) => {
  return (
    <label className={classes.container}>
      {props.title}
      <input type="radio" name="radioGroup" value={props.id} />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default RadioInput;
