import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={[classes.btn, props.className].join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
