import classes from "./Title.module.css";

const Title = (props) => {
  return <h2 className={classes.title}>{props.text}</h2>;
};

export default Title;
